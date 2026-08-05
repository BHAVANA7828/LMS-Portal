package lms.lmsProject.repository;

import lms.lmsProject.entity.Enrollement;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EnrollementRepository extends JpaRepository<Enrollement, Long> {
    List<Enrollement> findByUserId(Long userId);
    List<Enrollement> findByCourseId(Long courseId);
}