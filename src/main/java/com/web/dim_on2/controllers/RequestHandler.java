package com.web.dim_on2.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class RequestHandler {

    @GetMapping("/controller")
    public ArrayList<String> getTableHitResult(){
        return new ArrayList<String>();
    }
}
