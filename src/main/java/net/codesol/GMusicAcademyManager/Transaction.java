package net.codesol.GMusicAcademyManager;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Transaction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer transactionId;
	private Integer itemId;
	private Integer employeeId;
	private Integer customerId;
	private int saleQuantity;
	private String date;
	
	public Transaction() {
		
	}

	public Transaction(Integer transactionId, Integer itemId, Integer employeeId, Integer customerId, int saleQuantity,
			String date) {
	
		this.transactionId = transactionId;
		this.itemId = itemId;
		this.employeeId = employeeId;
		this.customerId = customerId;
		this.saleQuantity = saleQuantity;
		this.date = date;
	}

	public Integer getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Integer transactionId) {
		this.transactionId = transactionId;
	}

	public Integer getItemId() {
		return itemId;
	}

	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	public Integer getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Integer employeeId) {
		this.employeeId = employeeId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public int getSaleQuantity() {
		return saleQuantity;
	}

	public void setSaleQuantity(int saleQuantity) {
		this.saleQuantity = saleQuantity;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
	
	
}
