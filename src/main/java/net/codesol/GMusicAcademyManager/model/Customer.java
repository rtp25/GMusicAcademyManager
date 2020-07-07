package net.codesol.GMusicAcademyManager.model;

import javax.persistence.DiscriminatorColumn;

import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "customer_type",
   discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("C")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer customer_id;
	private String first_name;
	private String last_name;
	private String phone_number;



	public Customer() {

	}

	public Customer(Integer customer_id, String first_name, String last_name, String phone_number) {
		this.customer_id = customer_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_number = phone_number;
	}


	public Integer getcustomer_id() {
		return customer_id;
	}

	public void setcustomer_id(Integer customer_id) {
		this.customer_id = customer_id;
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

	public String getphone_number() {
		return phone_number;
	}

	public void setphone_number(String phone_number) {
		this.phone_number = phone_number;
	}





}
