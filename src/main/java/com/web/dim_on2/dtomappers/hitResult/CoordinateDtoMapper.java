package com.web.dim_on2.dtomappers.hitResult;

import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.dto.hitResult.CoordinateDto;
import com.web.dim_on2.dtomappers.FullDtoMapper;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.springframework.stereotype.Component;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
@Component
public interface CoordinateDtoMapper extends FullDtoMapper<Coordinate, CoordinateDto> {
}
