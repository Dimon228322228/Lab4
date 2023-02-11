package com.web.dim_on2.dto.user;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class UserPostDto implements Dto<User> {
    private String username;
    private String password;
}
