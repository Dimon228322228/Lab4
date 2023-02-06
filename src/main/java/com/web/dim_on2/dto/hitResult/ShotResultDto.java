package com.web.dim_on2.dto.hitResult;

import com.web.dim_on2.domain.ShotResult;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ShotResultDto implements Dto<ShotResult> {
    private boolean isHit;
    private String message;
    private long executionTime;
}
