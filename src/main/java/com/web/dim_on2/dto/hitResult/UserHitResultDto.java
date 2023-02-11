package com.web.dim_on2.dto.hitResult;

import com.web.dim_on2.domain.HitResult;
import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserHitResultDto implements Dto<UserHitResult> {
    private Long id;
    private int number;
    private HitResultDto hitResult;
    private Long userId;
}
