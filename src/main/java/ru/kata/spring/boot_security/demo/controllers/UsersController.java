package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.UserService;

@Controller
public class UsersController {
    private final UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String index(Model model) {
        model.addAttribute("users", userService.getAll());
        return "user";
    }

    @GetMapping("/new")
    public String newUser(@ModelAttribute("user") User user) {
        return "admin/new";
    }

    @PostMapping
    public String createNewUser(@ModelAttribute("user") User user) {
        userService.save(user);
        return "redirect:/users";
    }

    @GetMapping("/edit")
    public String editUser(@RequestParam("id") Long id, Model model) {
        System.out.println("id = " + id);
        model.addAttribute(userService.getUser(id));
        return "admin/edit";
    }

    @PostMapping("/update")
    public String updateUser(@ModelAttribute("user") User user){
        userService.update(user);
        return "redirect:/users";
    }

    @PostMapping("/remove")
    public String remove(@RequestParam("id") Long id){
        userService.remove(id);
        return "redirect:/users";
    }
}
