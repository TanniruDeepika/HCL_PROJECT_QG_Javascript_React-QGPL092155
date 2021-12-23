package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Address;

import com.example.demo.repository.AddressRepository;
@CrossOrigin(origins="http://localhost:3001")
@RestController
@RequestMapping("/api/v1")
public class AddressController {

	@Autowired
	private AddressRepository addressRepository;
	
	@GetMapping("/address")
	public List<Address> getAllAddress() {
		return addressRepository.findAll();
	}
	@PostMapping("/address")
	public Address createAddress(@RequestBody Address address) {
		return addressRepository.save(address);
}

}
