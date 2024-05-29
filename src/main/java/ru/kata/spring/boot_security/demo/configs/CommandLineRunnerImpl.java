package ru.kata.spring.boot_security.demo.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.ArrayList;
import java.util.List;

@Component
public class CommandLineRunnerImpl implements CommandLineRunner {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public CommandLineRunnerImpl(UserService userService, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @Override
    public void run(String... args) {
        Role roleAdmin = new Role("ROLE_ADMIN");
        Role roleUser = new Role("ROLE_USER");

        if (!roleService.getRoles().isEmpty()) {
            return;
        }

        roleService.addRole(roleAdmin);
        roleService.addRole(roleUser);

        List<Role> rolesAdmin = new ArrayList<>();
        List<Role> rolesUser = new ArrayList<>();

        rolesAdmin.add(roleAdmin);
        rolesAdmin.add(roleUser);
        rolesUser.add(roleUser);

        String passwordAdmin = new BCryptPasswordEncoder().encode("admin");
        String passwordUser = new BCryptPasswordEncoder().encode("user");

        User admin = new User("admin", 30, "admin@mail.ru", passwordAdmin, rolesAdmin);
        User user = new User("user", 20, "serge@mail.ru", passwordUser, rolesUser);
        userService.save(admin);
        userService.save(user);
    }
}