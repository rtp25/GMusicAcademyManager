package net.codesol.GMusicAcademyManager.controller;

import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.codesol.GMusicAcademyManager.model.Customer;
import net.codesol.GMusicAcademyManager.service.CustomerService;



@RestController
@RequestMapping("/api")
public class CustomerController {
	@Autowired
	private CustomerService customer_service;
	
	@GetMapping("/customers")
	public List<Customer> list() {
		return customer_service.listAll();
	}
	
	@GetMapping("/customer/{customer_id}")
	public ResponseEntity<Customer> get(@PathVariable Integer customer_id) {
		try {
			Customer customer = customer_service.get(customer_id);
			return new ResponseEntity<Customer>(customer, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/customer")
	public void add(@RequestBody Customer customer) {
		customer_service.save(customer);
	}
	
	@PutMapping("/customer/{customer_id}")
	public ResponseEntity<?> update(@RequestBody Customer customer, @PathVariable Integer customer_id) {
		try {
			// maybe save the existCustomer instead
			Customer existCustomer = customer_service.get(customer_id);
			customer_service.save(customer);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/customer/{customer_id}")
	public void delete(@PathVariable Integer customer_id) {
	    customer_service.delete(customer_id);
	}
	

}
