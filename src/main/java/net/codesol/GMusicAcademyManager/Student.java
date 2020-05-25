package net.codesol.GMusicAcademyManager;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity 
@DiscriminatorValue("1")
public class Student extends Customer{
	private String instrumentTypeLearning;
	
	public Student() {
		
	}
	
	public Student(Integer studentId, String firstName, String lastName, String phoneNumber, String intrumentTypeLearning) {
		super(studentId, firstName, lastName, phoneNumber);
		this.instrumentTypeLearning = intrumentTypeLearning;
	}

	public String getInstrumentTypeLearning() {
		return instrumentTypeLearning;
	}

	public void setInstrumentTypeLearning(String instrumentTypeLearning) {
		this.instrumentTypeLearning = instrumentTypeLearning;
	}
	
	
}
