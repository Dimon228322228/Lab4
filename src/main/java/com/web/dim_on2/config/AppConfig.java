package com.web.dim_on2.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@PropertySource("classpath:/application.properties")
@PropertySource("classpath:/db.properties")
@EnableAutoConfiguration
public class AppConfig implements WebMvcConfigurer {
}