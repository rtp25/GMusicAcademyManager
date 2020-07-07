package net.codesol.GMusicAcademyManager.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("S")
public class Student extends Customer{
	private String instrument_type_learning;

	public Student() {

	}

	public Student(Integer studentId, String firstName, String lastName, String phoneNumber, String intrumentTypeLearning) {
		super(studentId, firstName, lastName, phoneNumber);
		this.instrument_type_learning = intrumentTypeLearning;
	}

	public String getinstrument_type_learning() {
		return instrument_type_learning;
	}

	public void setinstrument_type_learning(String instrument_type_learning) {
		this.instrument_type_learning = instrument_type_learning;
	}


}
