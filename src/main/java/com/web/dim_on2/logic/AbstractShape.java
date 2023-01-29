package com.web.dim_on2.logic;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public abstract class AbstractShape implements Shape{
    protected int quadrant;

    private boolean isInQuadrant( double x, double y ){
        if (x >= 0){
            if (y >= 0) return quadrant == 1;
            else return quadrant == 4;
        } else {
            if (y >= 0) return quadrant == 2;
            else return quadrant == 3;
        }
    }

    @Override
    public boolean isInShape(double x, double y) {
        return isInQuadrant(x, y);
    }
}
