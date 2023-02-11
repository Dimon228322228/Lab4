package com.web.dim_on2.rest;

import com.web.dim_on2.dto.Dto;
import com.web.dim_on2.dtomappers.FromDtoMapper;
import com.web.dim_on2.dtomappers.ToDtoMapper;
import com.web.dim_on2.exceptions.DtoException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ResolvableType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class Wrapper {
    private final List<ToDtoMapper<?,?>> toMappers;
    private final List<FromDtoMapper<?,?>> fromMappers;

    public<T, V extends Dto<T>> V wrap(T item, Class<V> targetClass){
        return toMapper(item.getClass(), targetClass).toDto(item);
    }

    public <T, V extends Dto<T>> ResponseEntity<V> wrapOK(T item, Class<V> targetClass){
        V dto = wrap(item, targetClass);
        return ResponseEntity.ok(dto);
    }

    public <T, V extends Dto<T>> ResponseEntity<Iterable<V>> wrapAllOk(Iterable<T> item, Class<V> targetClass){
        if (!item.iterator().hasNext()) return ResponseEntity.ok(null);
        Iterable<V> dtos = toMapper(item.iterator().next().getClass(), targetClass).toDtos(item);
        return ResponseEntity.ok(dtos);
    }

    public<T, V extends Dto<T>> T unwrap(V dto, Class<T> itemClass) throws DtoException{
        return fromMapper(itemClass, dto.getClass()).fromDto(dto);
    }

    private <V extends Dto<T>, T> FromDtoMapper<T,V> fromMapper(Class<T> itemClass, Class<?> dtoClass) {
        ResolvableType mapperType = ResolvableType.forClassWithGenerics(FromDtoMapper.class, itemClass, dtoClass);
        return (FromDtoMapper<T, V>) fromMappers.stream().filter(mapperType::isInstance).findFirst().get();
    }

    private <V extends Dto<T>, T> ToDtoMapper<T,V> toMapper(Class<?> itemClass, Class<V> targetClass) {
        ResolvableType mapperType = ResolvableType.forClassWithGenerics(ToDtoMapper.class, itemClass, targetClass);
        return (ToDtoMapper<T, V>) toMappers.stream().filter(mapperType::isInstance).findFirst().get();
    }

}
