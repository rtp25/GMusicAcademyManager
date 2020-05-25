package net.codesol.GMusicAcademyManager;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity 
@DiscriminatorValue("2")
public class Salesman extends Employee{
	//private float percentComission;

	public Salesman() {
		
	}
	
	public Salesman(Integer instructorId, String firstName, String lastName, String ssn, float baseSalary, 
			String instrumentTaughtType, float comission) {
		super(instructorId, firstName, lastName, ssn, baseSalary, comission);
		//this.percentComission = percentCommission;
	}
	
	/*
	public float getpercentComission() {
		return percentComission;
	}

	public void setComission(float percentComission) {
		this.percentComission = percentComission;
	}
	
	*/

}
