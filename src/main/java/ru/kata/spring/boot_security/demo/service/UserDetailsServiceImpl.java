package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.repositories.UsersRepository;
import ru.kata.spring.boot_security.demo.security.SecurityUserDetails;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    private final UsersRepository usersRepository;
    
    public UserDetailsServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = usersRepository.findByUsername(username);
        
        if(user.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        
        return new SecurityUserDetails(user.get());
    }
}
