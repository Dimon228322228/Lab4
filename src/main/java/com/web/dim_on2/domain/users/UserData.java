package com.web.dim_on2.domain.users;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class UserData {
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<UserHitResult> hitResults;

    public static UserData create(){
        return new UserData(new ArrayList<>());
    }
}
