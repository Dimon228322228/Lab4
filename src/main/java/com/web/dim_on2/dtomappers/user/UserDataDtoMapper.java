package com.web.dim_on2.dtomappers.user;

import com.web.dim_on2.domain.users.UserData;
import com.web.dim_on2.dto.user.UserDataDto;
import com.web.dim_on2.dtomappers.FullDtoMapper;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
public interface UserDataDtoMapper extends FullDtoMapper<UserData, UserDataDto> {
}
