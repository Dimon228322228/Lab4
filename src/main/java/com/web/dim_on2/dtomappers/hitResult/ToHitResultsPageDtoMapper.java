package com.web.dim_on2.dtomappers.hitResult;

import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.dto.hitResult.HitResultsPageDto;
import com.web.dim_on2.dto.hitResult.UserHitResultDto;
import com.web.dim_on2.dtomappers.ToDtoMapper;
import com.web.dim_on2.store.UserHitResultPage;
import lombok.Setter;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(
        componentModel = MappingConstants.ComponentModel.SPRING,
        uses = ToUserHitResultMapper.class,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR)
@Component
public abstract class ToHitResultsPageDtoMapper implements ToDtoMapper<UserHitResultPage, HitResultsPageDto> {
    @Autowired
    @Setter
    private ToUserHitResultMapper userHitResultMapper;
    @Override
    @Mapping(target = "totalLength", source = "page")
    @Mapping(target = "pagesAmount", source = "page")
    @Mapping(target = "hitResults", source = "page")
    public abstract HitResultsPageDto toDto(UserHitResultPage item);

    public long mapTotalLength(Page<UserHitResult> page) {
        return page.getTotalElements();
    }
    public int mapPagesAmount(Page<UserHitResult> page) {
        return page.getTotalPages();
    }
    public List<UserHitResultDto> mapHitResults(Page<UserHitResult> page) {
        return page.stream().map(userHitResultMapper::toDto).toList();
    }
}
