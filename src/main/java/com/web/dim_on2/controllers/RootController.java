package com.web.dim_on2.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {
    @GetMapping("/login")
    public String hello(){
        return "index.html";
    }
}
