package com.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.model.Student;
import com.student.service.StudentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {
	
	
	@Autowired
	private StudentService studentService;
	
	
	//save the data in database
	@PostMapping("/student")
	public Student saveStudent(@RequestBody Student student)
	{
		return this.studentService.saveStudent(student);
	}
	
	//display data by name
	@GetMapping("/student")
	public List<Student> displayAll(){
		//return this.studentService.displayStudent();
		return this.studentService.displayByName();
	}
	

}
