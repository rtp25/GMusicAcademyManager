package net.codesol.GMusicAcademyManager.model;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity 
@DiscriminatorValue("1")
public class Instructor extends Employee {
	//@Column(name = "instrument_taught_type")
	private String instrument_taught_type;

	public Instructor() {
		
	}
	
	public Instructor(Integer instructorId, String firstName, String lastName, String ssn, float baseSalary, 
			String instrument_taught_type) {
		super(instructorId, firstName, lastName, ssn, baseSalary);
		this.instrument_taught_type = instrument_taught_type;
		//super.setcomission_percentage(0);
	}

	public String getInstrument_taught_type() {
		return instrument_taught_type;
	}

	public void setInstrument_taught_type(String instrument_taught_type) {
		this.instrument_taught_type = instrument_taught_type;
	}
	
	
	
	
	

}
