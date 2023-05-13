package com.student.controller;

import java.util.Comparator;

import com.student.model.Student;

public class SortByName implements Comparator{

	@Override
	public int compare(Object o1, Object o2) {
		Student s1=(Student)o1;
		Student s2=(Student)o2;
		
		String n1=s1.getName();
		String n2=s2.getName();
		
		return n1.compareTo(n2);
	}

}
