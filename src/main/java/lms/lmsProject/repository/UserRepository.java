package lms.lmsProject.repository;

import lms.lmsProject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // 1. Fixes the issue in UserController when looking up users by email
    Optional<User> findByEmail(String email);

    // 2. Lookup user by name if needed
    Optional<User> findByName(String name);
}