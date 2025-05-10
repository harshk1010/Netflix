package com.Netflix_clone.Netflix_clone.controller;

import com.Netflix_clone.Netflix_clone.config.JwtProvider;
import com.Netflix_clone.Netflix_clone.model.User;
import com.Netflix_clone.Netflix_clone.repository.UserRepository;
import com.Netflix_clone.Netflix_clone.request.LoginRequest;
import com.Netflix_clone.Netflix_clone.response.AuthResponse;
import com.Netflix_clone.Netflix_clone.service.CustomerUserDetailsService;
import com.Netflix_clone.Netflix_clone.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody User user) throws Exception {
        User isEmailExist = userRepository.findByEmail(user.getEmail());

        if (isEmailExist != null) {
            throw new Exception("Email is already used with another account");
        }

        User createdUser = new User();
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
        createdUser.setMobileNo(user.getMobileNo()); // ✅ Add this if your User entity has it
        createdUser.setPassword(passwordEncoder.encode(user.getPassword())); // ✅ Only encode once

        User savedUser = userRepository.save(createdUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Register success");

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED); // ✅ Fix return type
    }



    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest req) {
        String username = req.getEmail();
        String password = req.getPassword();

        Authentication authentication = authenticate(username, password);

        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Login success");

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<User> findUserByJwtToken(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customerUserDetailsService.loadUserByUsername(username);

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
