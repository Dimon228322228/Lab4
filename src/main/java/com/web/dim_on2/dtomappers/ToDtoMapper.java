package com.web.dim_on2.dtomappers;

import com.web.dim_on2.dto.Dto;

public interface ToDtoMapper<T, V extends Dto<T>>{
    V toDto(T item);
    Iterable<V> toDtos(Iterable<T> items);
}
