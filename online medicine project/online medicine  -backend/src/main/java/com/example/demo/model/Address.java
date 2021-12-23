package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Address")


public class Address {
	@Id

	@Column
	private int Doorno ;
	@Column
	private String colonyname;
	@Column
	private String city;



public int getDoorno() {
		return Doorno;
	}
	public void setDoorno(int doorno) {
		Doorno = doorno;
	}
	public String getColonyname() {
		return colonyname;
	}
	public void setColonyname(String colonyname) {
		this.colonyname = colonyname;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
}







