package com.web.dim_on2.rest.controllers.everyone;

import com.web.dim_on2.components.Authenticator;
import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.dto.user.UserGetDto;
import com.web.dim_on2.dto.user.UserPostDto;
import com.web.dim_on2.exceptions.DtoException;
import com.web.dim_on2.rest.Wrapper;
import com.web.dim_on2.rest.controllers.UserControllerUtils;
import com.web.dim_on2.security.jwt.JwtUtils;
import lombok.AllArgsConstructor;
import org.apache.tomcat.websocket.AuthenticationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserControllerUtils utils;
    private final Wrapper wrapper;
    private final Authenticator authenticator;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserPostDto userPostDto){
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userPostDto.getUsername(), userPostDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtUtils.generateJwtTocken(authentication);

            ResponseCookie cookie = ResponseCookie.from("token", token).path("/").maxAge(24 * 60 * 60).httpOnly(true).build();

            UserGetDto userGetDto = wrapper.wrap(utils.getUserOr(authentication.getName()), UserGetDto.class);
            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(userGetDto);
        } catch (org.springframework.security.core.AuthenticationException e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Неверный пользователь");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserPostDto userPostDto){
        try {
            authenticator.verify(userPostDto);
            User user = utils.getUserRepository().save(wrapper.unwrap(userPostDto, User.class));
            return ResponseEntity.ok(null);
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        } catch (DtoException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Такое имя пользователя уже существует");
        }
    }

    @GetMapping("/exists/{username}")
    public ResponseEntity<?> usernameExists(@PathVariable String username){
        return ResponseEntity.ok(utils.getUserRepository().existsUserByUsername(username));
    }

}
