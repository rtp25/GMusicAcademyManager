package net.codesol.GMusicAcademyManager.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//need to add transaction total cost with cost = salequantity*item cost + tax (0.08)
@Entity
@Table(name = "transaction")
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer transaction_id;
	private Integer item_id;
	private Integer employee_id;
	private Integer customer_id;
	private int sale_quantity;
	private float total_cost;
	private Date date;

	public Transaction() {

	}
	// maybe think about setting or initializing total_cost
	public Transaction(Integer transaction_id, Integer item_id, Integer employee_id, Integer customer_id, int sale_quantity,
			Date date) {

		this.transaction_id = transaction_id;
		this.item_id = item_id;
		this.employee_id = employee_id;
		this.customer_id = customer_id;
		this.sale_quantity = sale_quantity;
		this.date = date;
		//this.total_cost = this.sale_quantity * this.item.getPrice();
	}

	public Integer gettransaction_id() {
		return transaction_id;
	}

	public void settransaction_id(Integer transaction_id) {
		this.transaction_id = transaction_id;
	}

	public Integer getitem_id() {
		return item_id;
	}

	public void setitem_id(Integer item_id) {
		this.item_id = item_id;
	}

	public Integer getemployee_id() {
		return employee_id;
	}

	public void setemployee_id(Integer employee_id) {
		this.employee_id = employee_id;
	}

	public Integer getcustomer_id() {
		return customer_id;
	}

	public void setcustomer_id(Integer customer_id) {
		this.customer_id = customer_id;
	}

	public int getsale_quantity() {
		return sale_quantity;
	}

	public void setsale_quantity(int sale_quantity) {
		this.sale_quantity = sale_quantity;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void calculatetotal_cost(float item_cost) {
		float item_cost_before_tax = this.sale_quantity * item_cost;
		this.total_cost =  item_cost_before_tax + item_cost_before_tax * 0.08f;
	}

	public float gettotal_cost() {
		return this.total_cost;

	}

}
