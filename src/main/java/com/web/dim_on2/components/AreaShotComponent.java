package com.web.dim_on2.components;

import com.web.dim_on2.domain.Coordinate;
import com.web.dim_on2.domain.arealogic.AreaChecker;
import com.web.dim_on2.domain.arealogic.AreaShooter;
import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.domain.users.UserHitResult;
import com.web.dim_on2.logic.Validation;
import com.web.dim_on2.store.UserHitResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AreaShotComponent {
    private AreaShooter areaShooter;
    private UserHitResultRepository hitResultRepository;

    @Autowired
    public AreaShotComponent(Validation validation, UserHitResultRepository hitResultRepository){
        areaShooter = new AreaShooter(new AreaChecker(validation));
        this.hitResultRepository = hitResultRepository;
    }

    public UserHitResult shoot(Coordinate coordinate, User user){
        UserHitResult userHitResult = areaShooter.shoot(coordinate, user);
        UserHitResult saved = hitResultRepository.save(userHitResult);
        user.getData().getHitResults().add(saved);
        return saved;
    }
}
