package com.student.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.student.model.Student;

public interface StudentRepo extends MongoRepository<Student, Integer>{
	
	List<Student> findAllByOrderByNameAsc();

}
