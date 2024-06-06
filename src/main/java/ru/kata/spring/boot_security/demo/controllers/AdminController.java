package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
public class AdminController {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/authorize")
    public ResponseEntity<?> getAuthorizationUser() {
        return new ResponseEntity<>(userService.getUser(), HttpStatus.OK);
    }

    @GetMapping("/getRolesUser")
    public ResponseEntity<?> getRolesUser() {
        return new ResponseEntity<>(userService.getUser().getNameRoles(), HttpStatus.OK);
    }

    @GetMapping("/getUser")
    public ResponseEntity<User> getUser() {
        return new ResponseEntity<>(userService.getUser(), HttpStatus.OK);
    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> getAllUser() {
        List<User> allUsers = userService.getAll();
        return allUsers != null && !allUsers.isEmpty()
                ? new ResponseEntity<>(allUsers, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        User user = userService.getUser(id);
        return user != null
                ? new ResponseEntity<>(user, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


//    @GetMapping("/new")
//    public String newUser(Model model) {
//        model.addAttribute("user", new User());
//        model.addAttribute("allRoles", roleService.getRoles());
//        return "admin/new";
//    }
//
//    @GetMapping("/admin")
//    public String allUsers(Model model) {
//        model.addAttribute("user", userService.getUser());
//        model.addAttribute("users", userService.getAll());
//        model.addAttribute("allRoles", roleService.getRoles());
//        return "admin/main";
//    }
//
//    @PostMapping
//    public String createNewUser(@ModelAttribute("user") User user,
//                                @RequestParam("selectedRoles") List<Integer> selectRoles,
//                                BindingResult result) {
//
//        if (!result.hasErrors()) {
//            List<Role> roles = new ArrayList<>();
//            for (int roleId : selectRoles) {
//                roles.add(roleService.getRoleById(roleId));
//            }
//
//            user.setRole(roles);
//            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//            userService.save(user);
//        }
//        return "redirect:/admin/admin";
//    }
//
//    @GetMapping("/edit")
//    public String editUser(@RequestParam("id") Long id, Model model) {
//        System.out.println("id = " + id);
//        model.addAttribute("user", userService.getUser(id));
//        return "admin/edit";
//    }
//
//    @PostMapping("/update")
//    public String updateUser(@ModelAttribute("user") User user,
//                             @RequestParam("selectedRoles") List<Integer> selectRoles,
//                             BindingResult result) {
//        if (!result.hasErrors()) {
//            List<Role> roles = new ArrayList<>();
//            for (int roleId : selectRoles) {
//                roles.add(roleService.getRoleById(roleId));
//            }
//            user.setRole(roles);
//            System.out.println("PASSWORD = " + user.getPassword());
//            userService.update(user);
//        }
//        return "redirect:/admin/admin";
//    }
//
//    @DeleteMapping("/remove")
//    public String remove(@RequestParam("id") Long id) {
//        userService.remove(id);
//        return "redirect:/admin/admin";
//    }
}
