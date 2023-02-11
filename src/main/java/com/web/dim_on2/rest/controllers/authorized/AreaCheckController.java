package com.web.dim_on2.rest.controllers.authorized;

import com.web.dim_on2.components.AreaShotComponent;
import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.dto.hitResult.CoordinateDto;
import com.web.dim_on2.dto.hitResult.UserHitResultDto;
import com.web.dim_on2.exceptions.DtoException;
import com.web.dim_on2.rest.Wrapper;
import com.web.dim_on2.rest.controllers.UserControllerUtils;
import com.web.dim_on2.security.AppUserDetails;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/areacheck")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class AreaCheckController {
    private AreaShotComponent areaShotComponent;
    private UserControllerUtils utils;
    private Wrapper wrapper;

    @PostMapping(name = "/shoot", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserHitResultDto> shoot(@RequestBody CoordinateDto coordinateDto, @AuthenticationPrincipal AppUserDetails appUserDetails){
        try {
            User user = utils.getUser(appUserDetails.getUsername());
            Coordinate coordinate = wrapper.unwrap(coordinateDto, Coordinate.class);
            UserHitResult userHitResult = areaShotComponent.shoot(coordinate, user);
            return wrapper.wrapOK(userHitResult, UserHitResultDto.class);
        } catch (DtoException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
