package net.codesol.GMusicAcademyManager.model;

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
@Table(name = "item")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "item_type",
   discriminatorType = DiscriminatorType.STRING)
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer item_id;
	private String name;
	private String brand;
	private float price;
	private int quantity;
	
	public Item() {
		
	}

	public Item(Integer item_id, String name, String brand, float price, int quantity) {
		this.item_id = item_id;
		this.name = name;
		this.brand = brand;
		this.price = price;
		this.quantity = quantity;
	}

	public Integer getitem_id() {
		return item_id;
	}

	public void setitem_id(Integer item_id) {
		this.item_id = item_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public float getPriceFromId(int item_id) {
		return this.item_id;
	}
	

}
