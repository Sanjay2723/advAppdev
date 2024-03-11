package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;
import java.util.List;
import java.util.Optional;
import com.example.demo.Model.Role;

@Service
public class UserService {
    @Autowired
    private UserRepository usersRepository;

    public List<User> getAllUsers(boolean isAdmin) {
        if (isAdmin) {
            return usersRepository.findAll();
        }
        return null;
    }

    public Role getRoleByEmail(String email) {
        Optional<User> user = usersRepository.findByEmail(email);
        if (user.isPresent()) {
            User u = user.get();
            Role r = u.getRole();
            return r;
        }
        return null;
    }
}
