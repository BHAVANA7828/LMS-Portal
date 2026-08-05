package lms.lmsProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "forward:/index.html";
    }

    @GetMapping("/course-detail")
    public String courseDetail() {
        return "forward:/course-detail.html";
    }

    @GetMapping("/compiler")
    public String compiler() {
        return "forward:/compiler.html";
    }

    @GetMapping("/exam")
    public String exam() {
        return "forward:/exam.html";
    }
}