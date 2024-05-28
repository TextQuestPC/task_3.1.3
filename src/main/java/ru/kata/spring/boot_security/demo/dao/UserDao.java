package ru.kata.spring.boot_security.demo.dao;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserDao {
    User getUser(Long id);
    void save(User user);
    void remove(Long id);
    void update(User user);
    List<User> getAll();
}
