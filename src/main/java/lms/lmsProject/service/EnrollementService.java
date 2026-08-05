package lms.lmsProject.service;

import lms.lmsProject.entity.Enrollement;
import lms.lmsProject.repository.EnrollementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollementService {

    @Autowired
    private EnrollementRepository enrollementRepository;

    public Enrollement enrollUser(Enrollement enrollment) {
        return enrollementRepository.save(enrollment);
    }

    public List<Enrollement> getEnrolelmentsByUser(Long userId) {
        return enrollementRepository.findByUserId(userId);
    }
}