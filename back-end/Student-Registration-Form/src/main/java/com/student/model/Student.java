package com.student.model;


import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


import lombok.Data;


@Data
@Document(collection = "studentform")
public class Student {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer regdId;
	

	private String name;
	
	private String dob;
	
	private String classs;
	
	private String division;
	
	private String gender;
	
	
	
	
	
	

}
