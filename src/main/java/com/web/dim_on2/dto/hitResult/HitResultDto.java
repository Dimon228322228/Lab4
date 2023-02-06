package com.web.dim_on2.dto.hitResult;

import com.web.dim_on2.domain.HitResult;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
@AllArgsConstructor
public class HitResultDto implements Dto<HitResult> {
    private CoordinateDto coordinates;
    private ShotResultDto shotResult;
    private ZonedDateTime currentTime;
}
