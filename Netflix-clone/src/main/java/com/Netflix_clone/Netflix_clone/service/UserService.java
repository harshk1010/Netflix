package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.User;

public interface UserService {

    User saveUser(User user);

    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;

    void deleteUser(Long id);

    // createUser( );
}
