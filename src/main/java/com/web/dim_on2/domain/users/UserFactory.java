package com.web.dim_on2.domain.users;

import com.web.dim_on2.exceptions.UsernameAlreadyTakenException;
import com.web.dim_on2.store.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserFactory {
    private UserRepository userRepository;

    public User create(String username, String password) throws UsernameAlreadyTakenException {
        if (userRepository.existsUserByUsername(username)) throw new UsernameAlreadyTakenException("This username is already belong another user. ");
        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        return new User(null, username, encoder.encode(password), Set.of(UserRole.USER), UserData.create());
    }

}
