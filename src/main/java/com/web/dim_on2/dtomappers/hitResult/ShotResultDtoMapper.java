package com.web.dim_on2.dtomappers.hitResult;

import com.web.dim_on2.domain.ShotResult;
import com.web.dim_on2.dto.hitResult.ShotResultDto;
import com.web.dim_on2.dtomappers.FullDtoMapper;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.time.Duration;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
public abstract class ShotResultDtoMapper implements FullDtoMapper<ShotResult, ShotResultDto> {
    public Duration mapExecTime(Long time){
        return Duration.ofNanos(time);
    }

    public Long mapExecTime(Duration time){
        return time.toNanos();
    }
}
