package net.codesol.GMusicAcademyManager.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("2")
public class Salesman extends Employee{
	private float comission_percentage;

	public Salesman() {

	}

	public Salesman(Integer salesmanId, String firstName, String lastName, String ssn, float baseSalary,
			 float comission_percentage) {
		super(salesmanId, firstName, lastName, ssn, baseSalary);
		this.comission_percentage = comission_percentage;
	}

	public float getComission_percentage() {
		return comission_percentage;
	}

	public void setComission_percentage(float comission_percentage) {
		this.comission_percentage = comission_percentage;
	}

	/*
	public float getpercentcomission_percentage() {
		return percentcomission_percentage;
	}

	public void setcomission_percentage(float percentcomission_percentage) {
		this.percentcomission_percentage = percentcomission_percentage;
	}

	*/

}
