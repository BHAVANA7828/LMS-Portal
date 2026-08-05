package lms.lmsProject.controller;

import lms.lmsProject.entity.User;
import lms.lmsProject.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // ==========================================
    // REGISTER ENDPOINT
    // ==========================================
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> payload) {
        try {
            String name = payload.get("name");
            if (name == null || name.trim().isEmpty()) {
                name = payload.get("fullName");
            }
            if (name == null || name.trim().isEmpty()) {
                name = payload.get("username");
            }

            String email = payload.get("email");
            String password = payload.get("password");

            if (name == null || name.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Full name is required."));
            }

            if (email == null || email.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Email is required."));
            }

            if (userRepository.findByEmail(email).isPresent()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Email is already registered!"));
            }

            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(password);

            User savedUser = userRepository.save(user);

            return ResponseEntity.ok(Map.of(
                "message", "User registered successfully!",
                "user", savedUser
            ));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Registration error: " + e.getMessage()));
        }
    }

    // ==========================================
    // LOGIN ENDPOINT
    // ==========================================
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> payload) {
        try {
            String email = payload.get("email");
            String password = payload.get("password");

            if (email == null || email.trim().isEmpty() || password == null || password.trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Email and password are required."));
            }

            Optional<User> userOpt = userRepository.findByEmail(email);

            if (userOpt.isPresent()) {
                User user = userOpt.get();

                // Null-safe check to prevent "Login error: null"
                if (user.getPassword() != null && user.getPassword().equals(password)) {
                    return ResponseEntity.ok(Map.of(
                        "message", "Login successful!",
                        "user", Map.of(
                            "id", user.getId(),
                            "name", user.getName() != null ? user.getName() : "",
                            "email", user.getEmail()
                        )
                    ));
                }
            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password!"));
        } catch (Exception e) {
            e.printStackTrace();
            String errorMsg = e.getMessage() != null ? e.getMessage() : e.getClass().getSimpleName();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Login error: " + errorMsg));
        }
    }
}