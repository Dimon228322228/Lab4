package com.web.dim_on2.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Entity
@Table(name = "hit-results")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class HitResult {
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "coord_id", referencedColumnName = "id")
    private Coordinate coords;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shot_id", referencedColumnName = "id")
    private ShotResult shot;

    private ZonedDateTime currentTime;


    public static HitResult fromHit(Coordinate coordinate, ShotResult shotResult) {
        return new HitResult(null, coordinate, shotResult, ZonedDateTime.now(ZoneId.of("Europe/Moscow")));
    }

    @Override
    public String toString() {
        return "HitResult{" +
                "id=" + id +
                ", Coordinates=" + coords +
                ", ShotResult=" + shot +
                ", currentTime=" + currentTime +
                '}';
    }
}
