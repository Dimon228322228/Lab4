package com.web.dim_on2.dtomappers;

import com.web.dim_on2.dto.Dto;
import com.web.dim_on2.exceptions.DtoException;

public interface FromDtoMapper<T, V extends Dto<T>>{
    T fromDto(V dto) throws DtoException;
}
