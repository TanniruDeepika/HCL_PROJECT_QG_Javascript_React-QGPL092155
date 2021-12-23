package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Customer;
@Repository
public interface 	CustomerRepository extends JpaRepository<Customer,String>{

	List<Customer> findAll();

	

	
	
}


