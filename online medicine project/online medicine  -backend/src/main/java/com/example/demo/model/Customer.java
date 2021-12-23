package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customers")

public class Customer {
@Id
@Column
private String FirstName;
@Column
private String LastName;
@Column
private String EmailId;


public String getEmailId() {
	return EmailId;
}
public void setEmailId(String emailId) {
	EmailId = emailId;
}
public String getFirstName() {
	return FirstName;
}
public void setFirstName(String firstName) {
	FirstName = firstName;
}
public String getLastName() {
	return LastName;
}
public void setLastName(String lastName) {
	LastName = lastName;
}

}




