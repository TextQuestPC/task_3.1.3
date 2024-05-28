package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserService {
    User getUser(Long id);
    void save(User user);
    void remove(Long id);
    void update(User user);
    List<User> getAll();
}
