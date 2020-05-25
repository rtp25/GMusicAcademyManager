package net.codesol.GMusicAcademyManager;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "employee_type",
   discriminatorType = DiscriminatorType.INTEGER)
public  class Employee {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer employee_id;
	private String first_name;
	private String last_name;
	private String ssn;
	private float base_salary;
	//private String instrument_taught_type;
	private float comission_percentage;
	//private static final String GeneratedType = null;
	
	

	public Employee() {
		
	}
	
	public Employee(Integer employee_id, String first_name, String last_name, String ssn, float base_salary, 
			 float comission_percentage) {
		this.employee_id = employee_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.ssn = ssn;
		this.base_salary = base_salary;
		//this.instrument_taught_type = instrument_taught_type;
		this.comission_percentage = comission_percentage;
	}

	
	public Integer getemployee_id() {
		return employee_id;
	}

	public void setemployee_id(Integer employee_id) {
		this.employee_id = employee_id;
	}

	public String getfirst_name() {
		return first_name;
	}

	public void setfirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getlast_name() {
		return last_name;
	}

	public void setlast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public float getbase_salary() {
		return base_salary;
	}

	public void setbase_salary(float base_salary) {
		this.base_salary = base_salary;
	}

	/*
	public String getInstrument_taught_type() {
		return instrument_taught_type;
	}

	public void setInstrument_taught_type(String instrument_taught_type) {
		this.instrument_taught_type = instrument_taught_type;
	}
*/
	public float getcomission_percentage() {
		return comission_percentage;
	}

	public void setcomission_percentage(float comission_percentage) {
		this.comission_percentage = comission_percentage;
	}
	
	

}
