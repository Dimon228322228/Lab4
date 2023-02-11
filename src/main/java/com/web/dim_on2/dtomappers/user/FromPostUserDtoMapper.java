package com.web.dim_on2.dtomappers.user;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.domain.users.UserFactory;
import com.web.dim_on2.dto.user.UserPostDto;
import com.web.dim_on2.dtomappers.FromDtoMapper;
import com.web.dim_on2.exceptions.UsernameAlreadyTakenException;
import lombok.Setter;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR
)
@Component
public class FromPostUserDtoMapper implements FromDtoMapper<User, UserPostDto> {
    @Setter(onMethod = @__(@Autowired))
    private UserFactory userFactory;

    public User fromDto(UserPostDto userPostDto) throws UsernameAlreadyTakenException {
        return userFactory.create(userPostDto.getUsername(), userPostDto.getPassword());
    }

}
