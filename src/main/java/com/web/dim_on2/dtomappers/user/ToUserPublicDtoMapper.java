package com.web.dim_on2.dtomappers.user;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.dto.user.UserPublicDto;
import com.web.dim_on2.dtomappers.ToDtoMapper;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
public interface ToUserPublicDtoMapper extends ToDtoMapper<User, UserPublicDto> {
}
