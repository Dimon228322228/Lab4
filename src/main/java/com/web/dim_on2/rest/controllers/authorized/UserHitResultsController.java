package com.web.dim_on2.rest.controllers.authorized;

import com.web.dim_on2.components.AreaShotComponent;
import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.dto.hitResult.CoordinateDto;
import com.web.dim_on2.dto.hitResult.HitResultsPageDto;
import com.web.dim_on2.dto.hitResult.UserHitResultDto;
import com.web.dim_on2.exceptions.DtoException;
import com.web.dim_on2.rest.Wrapper;
import com.web.dim_on2.rest.controllers.UserControllerUtils;
import com.web.dim_on2.store.UserHitResultPage;
import com.web.dim_on2.store.UserHitResultRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("users/id/{userId}/hitResults")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserHitResultsController {
    private AreaShotComponent areaShotComponent;
    private UserHitResultRepository hitResultRepository;
    private UserControllerUtils utils;
    private Wrapper wrapper;

    @GetMapping
    public ResponseEntity<Iterable<UserHitResultDto>> allHitResults(@PathVariable Long userId){
        return wrapper.wrapAllOk(hitResultRepository.findByUserId(userId), UserHitResultDto.class);
    }

    @GetMapping("/page/{page}/{size}")
    public ResponseEntity<HitResultsPageDto> getPage(@PathVariable int page, @PathVariable int size, @PathVariable Long userId) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("number").descending());
        Page<UserHitResult> hitResultPage = hitResultRepository.findByUserIdEquals(userId, pageable);
        return wrapper.wrapOK(new UserHitResultPage(hitResultPage, userId), HitResultsPageDto.class);
    }

    @GetMapping("/{hitResultId}")
    public ResponseEntity<UserHitResultDto> oneHitResult(@PathVariable Long userId, @PathVariable long hitResultId){
        return wrapper.wrapOK(
                hitResultRepository.findByIdAndUserId(hitResultId, userId)
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Попытка не найдена")),
                UserHitResultDto.class);
    }

    @PostMapping("/shoot")
    public ResponseEntity<UserHitResultDto> shoot(@PathVariable Long userId, @RequestBody CoordinateDto coordinateDto){
        try {
            UserHitResult hitResult = areaShotComponent.shoot(wrapper.unwrap(coordinateDto, Coordinate.class), utils.getUserOr(userId));
            return wrapper.wrapOK(hitResult, UserHitResultDto.class);
        } catch (DtoException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping("/clear")
    @Transactional
    public void clear(@PathVariable long userId){
        hitResultRepository.deleteByUserId(userId);
    }
}
