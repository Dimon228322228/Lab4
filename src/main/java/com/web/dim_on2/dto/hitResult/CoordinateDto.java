package com.web.dim_on2.dto.hitResult;

import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.dto.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class CoordinateDto implements Dto<Coordinate> {
    private double x;
    private double y;
    private double r;
}
