package com.web.dim_on2.logic;

public class Triangle extends AbstractShape {

    private final double x;
    private final double y;

    public Triangle( int quadrant, double x, double y ) {
        super(quadrant);
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean isInShape(double x, double y) {
        return super.isInShape(x, y) && ((Math.abs(x) / this.x + Math.abs(y) / this.y) <= 1);
    }
}
