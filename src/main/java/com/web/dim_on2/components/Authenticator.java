package com.web.dim_on2.components;

import com.web.dim_on2.dto.user.UserPostDto;
import org.apache.tomcat.websocket.AuthenticationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Authenticator {
    @Value("${security.password.regexp}")
    private String passwordRegex;

    public void verify(UserPostDto userPostDto) throws AuthenticationException {
        if(userPostDto.getUsername().length() < 4) throw new AuthenticationException("Неверное имя. Имя должно быть длиннее 4 символов. ");
        if(!userPostDto.getPassword().matches(passwordRegex)) throw new AuthenticationException("Пароль должен быть не менее 8 символов и содержать 1 букву и цифру");
    }
}
