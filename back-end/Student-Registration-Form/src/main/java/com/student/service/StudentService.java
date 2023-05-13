package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Student;
import com.student.repository.StudentRepo;

@Service
public class StudentService {
	
	
	@Autowired
	private StudentRepo studentRepo;
	
	
	public Student saveStudent(Student student)
	{
		return this.studentRepo.save(student);
	}
	
	public List<Student> displayStudent()
	{
	return	this.studentRepo.findAll();
	}
	
	public List<Student> displayByName()
	{
		return this.studentRepo.findAllByOrderByNameAsc();
	}

}
