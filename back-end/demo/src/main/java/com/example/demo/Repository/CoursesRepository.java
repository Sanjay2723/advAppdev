package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Courses;

public interface CoursesRepository extends JpaRepository<Courses, Long> {

}
