package com.web.dim_on2.dto.user;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.domain.users.UserRole;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class UserPublicDto implements Dto<User> {
    private String username;
    private Set<UserRole> roles;
}
