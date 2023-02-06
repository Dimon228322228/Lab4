package com.web.dim_on2.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.ZonedDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class HitResult {

    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Embedded
    private Coordinate coords;

    @Embedded
    private ShotResult shot;

    private ZonedDateTime currentTime;


    public static HitResult fromHit(Coordinate coordinate, ShotResult shotResult) {
        return new HitResult(null, coordinate, shotResult, ZonedDateTime.now());
    }

    @Override
    public String toString() {
        return "HitResult{" +
                "id=" + id +
                ", Coordinates=" + coords +
                ", ShotResult=" + shot +
                '}';
    }
}
