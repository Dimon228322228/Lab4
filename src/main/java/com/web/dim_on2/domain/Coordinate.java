package com.web.dim_on2.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Embeddable
public class Coordinate {
    private double x;
    private double y;
    private double r;

    @Override
    public String toString() {
        return "Coordinates{" +
                ", x=" + x +
                ", y=" + y +
                ", r=" + r +
                '}';
    }
}