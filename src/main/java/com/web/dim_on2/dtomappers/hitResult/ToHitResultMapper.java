package com.web.dim_on2.dtomappers.hitResult;

import com.web.dim_on2.domain.HitResult;
import com.web.dim_on2.dto.hitResult.HitResultDto;
import com.web.dim_on2.dtomappers.ToDtoMapper;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        uses = {ShotResultDtoMapper.class, CoordinateDtoMapper.class},
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
public abstract class ToHitResultMapper implements ToDtoMapper<HitResult, HitResultDto> {
}
