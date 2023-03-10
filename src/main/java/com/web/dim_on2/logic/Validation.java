package com.web.dim_on2.logic;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Validation {
    private final Graph graph;
    public Validation(){
        this.graph = new Graph( createShapes() );
    }

    public boolean isPointInShapes( double x, double y, double unitR ){
        return this.graph.isInGraph( x / unitR, y / unitR );
    }

    private ArrayList<Shape> createShapes() {
        Circle circle = new Circle(4, 1);
        Square square = new Square(2, -1, 0.5);
        Triangle triangle = new Triangle(1, 1, 0.5);
        return new ArrayList<>( List.of(circle, square, triangle) );
    }
}
