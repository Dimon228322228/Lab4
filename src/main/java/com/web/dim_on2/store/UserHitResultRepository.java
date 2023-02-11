package com.web.dim_on2.store;

import com.web.dim_on2.domain.users.UserHitResult;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UserHitResultRepository extends PagingAndSortingRepository<UserHitResult, Long> {
    Iterable<UserHitResult> findByUserId(Long userId);

    Optional<UserHitResult> findByIdAndUserId(Long id, Long userId);

    void deleteByUserId(Long userId);

    Page<UserHitResult> findByUserIdEquals(Long userId, Pageable pageable);

    UserHitResult save(UserHitResult userHitResult);
}
