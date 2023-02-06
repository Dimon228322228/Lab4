package com.web.dim_on2.domain.users;

import com.web.dim_on2.domain.HitResult;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "hitResults")
public class UserHitResult {
    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private int number;

    @Embedded
    private HitResult hitResult;

    @ManyToOne
    @JoinColumn(name = "UserId")
    private User user;

    public static UserHitResult create(HitResult hitResult, User user){
        List<UserHitResult> hitResults = user.getData().getHitResults();
        return new UserHitResult(null, hitResults.size(), hitResult, user);
    }
}
