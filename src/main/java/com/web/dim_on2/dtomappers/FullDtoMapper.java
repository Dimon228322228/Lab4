package com.web.dim_on2.dtomappers;

import com.web.dim_on2.dto.Dto;

public interface FullDtoMapper<T, V extends Dto<T>> extends FromDtoMapper<T, V>, ToDtoMapper<T, V>{
}
