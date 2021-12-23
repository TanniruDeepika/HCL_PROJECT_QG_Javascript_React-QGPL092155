package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="medicines")
public class Medicine {
@Id
@Column(name="medicine_name")
private  String medicinename;

@Column(name="quantity")
private long quantity;
@Column(name="amount")
private double amount;
public long getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public Medicine() {
	
}

public Medicine(String medicinename, double amount,long quantity) {
	super();
	this.medicinename = medicinename;
	this.amount = amount;
	this.quantity=quantity;
	
	}

public String getMedicinename() {
	return medicinename;
}
public void setMedicinename(String medicinename) {
	this.medicinename = medicinename;
}
public double getAmount() {
	return amount;
}
public void setAmount(double amount) {
	this.amount = amount;
}

}
