package com.web.dim_on2.rest.controllers;

import com.web.dim_on2.domain.users.User;
import com.web.dim_on2.exceptions.UserIdNotFoundException;
import com.web.dim_on2.rest.Wrapper;
import com.web.dim_on2.store.UserRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
@Getter
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserControllerUtils {
    private UserRepository userRepository;
    private Wrapper wrapper;

    public User getUser(long userId) throws UserIdNotFoundException {
        return userRepository.findById(userId).orElseThrow(() -> new UserIdNotFoundException("Нет такого пользователя"));
    }

    public User getUser(String username) throws UsernameNotFoundException{
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Нет такого пользователя"));
    }

    public User getUserOr(String username) throws ResponseStatusException {
        try {
            return getUser(username);
        } catch (UsernameNotFoundException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    public User getUserOr(Long userId){
        try {
            return getUser(userId);
        } catch (UserIdNotFoundException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
