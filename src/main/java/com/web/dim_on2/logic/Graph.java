package com.web.dim_on2.logic;

import java.util.ArrayList;
import java.util.List;

public class Graph {
    private final List<Shape> shapes;

    public Graph( ArrayList<Shape> shapes ) {
        this.shapes = shapes;
    }

    public boolean isInGraph(double x, double y) {
        return shapes.stream().anyMatch(s -> s.isInShape(x,y));
    }
}
