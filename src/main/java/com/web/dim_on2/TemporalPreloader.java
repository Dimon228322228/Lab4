package com.web.dim_on2;

import com.web.dim_on2.domain.users.UserFactory;
import com.web.dim_on2.store.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor(onConstructor = @__({@Autowired}))
public class TemporalPreloader implements CommandLineRunner {
    private final UserRepository userRepository;
    private final UserFactory userFactory;

    @Override
    public void run(String... args) throws Exception {}
}
