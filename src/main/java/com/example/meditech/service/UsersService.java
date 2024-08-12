package com.example.meditech.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.meditech.model.Users;
import com.example.meditech.repository.UsersRepo;

@Service
public class UsersService {

    @Autowired
    private UsersRepo usersRepo;

    /**
     * Adds a new user to the repository.
     * 
     * @param user The user to be added.
     * @return The saved user.
     */
    public Users addUser(Users user) {
        // Ensure that password is properly hashed before saving
        // For example: user.setPassword(encodePassword(user.getPassword()));
        return usersRepo.save(user);
    }

    /**
     * Authenticates a user based on email and password.
     * 
     * @param email
     * @param password 
     * @return 
     */
    public boolean authenticate(String email, String password) {
        Users user = usersRepo.findByEmail(email);
        // Implement password hashing and comparison
        return user != null && user.getPassword().equals(password);
    }

    /**
     * Finds a user by email.
     * 
     * @param email The email of the user.
     * @return The user if found, otherwise null.
     */
    public Users findByEmail(String email) {
        return usersRepo.findByEmail(email);
    }
}