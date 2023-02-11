package com.web.dim_on2.domain.arealogic;

import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.domain.HitResult;
import com.web.dim_on2.domain.ShotResult;
import com.web.dim_on2.logic.Validation;
import lombok.AllArgsConstructor;

import java.time.Instant;

@AllArgsConstructor
public class AreaChecker {
    Validation validation;
    public HitResult check(Coordinate coordinate){
        Instant start = Instant.now();
        if (coordinate.getR() < 0) return HitResult.fromHit(coordinate, ShotResult.create(false, "Invalid R", start));
        if (validation.isPointInShapes(coordinate.getX(), coordinate.getY(), coordinate.getR())) return HitResult.fromHit(coordinate, ShotResult.create(true, "Попал!", start));
        return HitResult.fromHit(coordinate, ShotResult.create(false, "Промах", start));
    }
}
