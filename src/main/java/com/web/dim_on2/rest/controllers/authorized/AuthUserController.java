package com.web.dim_on2.rest.controllers.authorized;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.dto.user.UserGetDto;
import com.web.dim_on2.dto.user.UserPostDto;
import com.web.dim_on2.exceptions.UserIdNotFoundException;
import com.web.dim_on2.rest.controllers.UserControllerUtils;
import com.web.dim_on2.security.AppUserDetails;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/users")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class AuthUserController {
    private final UserControllerUtils utils;

    @GetMapping("/id/{userId}")
    public ResponseEntity<UserGetDto> userById(@PathVariable Long userId){
        return utils.getWrapper().wrapOK(utils.getUserOr(userId), UserGetDto.class);
    }

    @PostMapping("/id/{userId}/logout")
    private ResponseEntity<?> logout(@PathVariable Long userId){
        ResponseCookie cookie = ResponseCookie.from("token", null).path("/").maxAge(0).httpOnly(true).build();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).build();
    }

    @GetMapping("/current")
    public ResponseEntity<?> current(@AuthenticationPrincipal AppUserDetails userDetails){
        if (userDetails!=null) return utils.getWrapper().wrapOK(utils.getUserOr(userDetails.getUsername()), UserGetDto.class);
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Текущий пользователь не найден...");
    }
}
