package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Courses;
import com.example.demo.Model.Role;
import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.JwtService;
import com.example.demo.Service.UserService;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers(@RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        if (isAdmin) {
            return ResponseEntity.ok().body(userRepository.findAll());
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }

    @GetMapping("/courses/{id}")
    public List<Courses> getCourseById(@PathVariable Long id) {
        User u = userRepository.findById(id).orElse(null);
        return u.getCourses();
    }

}
