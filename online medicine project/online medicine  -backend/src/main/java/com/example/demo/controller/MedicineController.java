package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Medicine;
import com.example.demo.repository.MedicineRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MedicineController {

	@Autowired
	private MedicineRepository medicineRepository;
	
	@GetMapping("/medicines")
	public List<Medicine> getAllMedicines() {
		return medicineRepository.findAll();
	}
	@PostMapping("/medicines")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medicineRepository.save(medicine);
}

}