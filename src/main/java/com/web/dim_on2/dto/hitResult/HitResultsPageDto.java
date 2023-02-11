package com.web.dim_on2.dto.hitResult;

import com.web.dim_on2.dto.Dto;
import com.web.dim_on2.store.UserHitResultPage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Setter
@Getter
public class HitResultsPageDto implements Dto<UserHitResultPage> {
    private long totalLength;
    private int pagesAmount;
    private List<UserHitResultDto> hitResults;
    private long userId;
}
