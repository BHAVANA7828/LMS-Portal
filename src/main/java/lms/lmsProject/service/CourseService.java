package lms.lmsProject.service;

import lms.lmsProject.entity.Course;
import java.util.List;

public interface CourseService {
    List<Course> getAllCourses();
    Course getCourseById(Long id);
    Course saveCourse(Course course);
}