package lms.lmsProject.service;

import lms.lmsProject.dto.RegisterRequest;
import lms.lmsProject.entity.User;

public interface UserService {
    User registerUser(RegisterRequest request);
    User findByEmail(String email);
}