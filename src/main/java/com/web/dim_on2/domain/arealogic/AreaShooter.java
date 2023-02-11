package com.web.dim_on2.domain.arealogic;

import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.domain.HitResult;
import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.domain.users.UserHitResult;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
public class AreaShooter {
    private AreaChecker areaChecker;

    public UserHitResult shoot(Coordinate coordinate, User user){
        HitResult hitResult = areaChecker.check(coordinate);
        return UserHitResult.create(hitResult, user);
    }
}
