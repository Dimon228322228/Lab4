package com.web.dim_on2.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.Duration;
import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Embeddable
public class ShotResult {
    private boolean res;
    private String message;
    private Duration executionTime;

    public static ShotResult create(boolean res, String message, Instant startTime) {
        return new ShotResult(res,message,getDiff(startTime));
    }

    private static Duration getDiff(Instant start) {
        Instant finish = Instant.now();
        return Duration.between(start, finish);
    }

    @Override
    public String toString() {
        return "ShotResult{" +
                ", res=" + res +
                ", message='" + message + '\'' +
                ", executionTime=" + executionTime +
                '}';
    }
}