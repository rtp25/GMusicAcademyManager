package net.codesol.GMusicAcademyManager;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity 
@DiscriminatorValue("1")
public class Instructor extends Employee {
	private String instrument_taught_type;

	public Instructor() {
		
	}
	
	public Instructor(Integer instructorId, String firstName, String lastName, String ssn, float baseSalary, 
			String instrumentTaughtType) {
		super(instructorId, firstName, lastName, ssn, baseSalary, 0);
		this.instrument_taught_type = instrumentTaughtType;
		//super.setComission(0);
	}
	
	
	public String getInstrumentTaughtType() {
		return instrument_taught_type;
	}

	public void setInstrumentTaughtType(String instrumentTaughtType) {
		this.instrument_taught_type = instrumentTaughtType;
	}
	
	

}
