package com.web.dim_on2.store;

import com.web.dim_on2.domain.users.UserHitResult;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

@Getter
@Setter
@AllArgsConstructor
public class UserHitResultPage {
    private Page<UserHitResult> page;

    private Long userId;
}
