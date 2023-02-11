package com.web.dim_on2.dtomappers.hitResult;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.dto.hitResult.UserHitResultDto;
import com.web.dim_on2.dtomappers.ToDtoMapper;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.springframework.stereotype.Component;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        uses = ToHitResultMapper.class,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
@Component
public abstract class ToUserHitResultMapper implements ToDtoMapper<UserHitResult, UserHitResultDto> {
    @Override
    @Mapping(target = "userId", source = "user")
    public abstract UserHitResultDto toDto(UserHitResult item);

    @Override
    @Mapping(target = "userId", source = "user")
    public abstract Iterable<UserHitResultDto> toDtos(Iterable<UserHitResult> items);

    public Long userMapper(User user){
        return user.getId();
    }
}
