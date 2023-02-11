package com.web.dim_on2.dto.user;

import com.web.dim_on2.domain.users.UserData;
import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class UserDataDto implements Dto<UserData> {
    private List<UserHitResult> attempts;
}
