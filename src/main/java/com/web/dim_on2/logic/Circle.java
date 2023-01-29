package com.web.dim_on2.logic;

public class Circle extends AbstractShape{
    private final double radius;
    public Circle( int quadrant, double radius ) {
        super(quadrant);
        this.radius = radius;
    }

    @Override
    public boolean isInShape( double x, double y ) {
        return super.isInShape(x, y) && (((Math.pow(x, 2) + Math.pow(y, 2)) <= Math.pow(this.radius, 2)));
    }
}
