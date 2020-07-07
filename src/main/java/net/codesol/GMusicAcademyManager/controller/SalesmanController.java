package net.codesol.GMusicAcademyManager.controller;

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
import net.codesol.GMusicAcademyManager.service.SalesmanService;
import net.codesol.GMusicAcademyManager.model.Salesman;

@RestController
@RequestMapping("/api")
public class SalesmanController {

	@Autowired
	private SalesmanService service;
	
	@GetMapping("/salesmen")
	public List<Salesman> list() {
		return service.listAll();
	}
	
	@GetMapping("/salesman/{employee_id}")
	public ResponseEntity<Salesman> get(@PathVariable Integer employee_id) {
		try {
			Salesman salesman = service.get(employee_id);
			return new ResponseEntity<Salesman>(salesman, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Salesman>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/salesman")
	public void add(@RequestBody Salesman salesman) {
		service.save(salesman);
	}
	
	@PutMapping("/salesman/{employee_id}")
	public ResponseEntity<?> update(@RequestBody Salesman salesman, @PathVariable Integer employee_id) {
		try {
			// maybe save the existsalesman instead
			Salesman existSalesman = service.get(employee_id);
			service.save(salesman);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/salesman/{employee_id}")
	public void delete(@PathVariable Integer employee_id) {
	    service.delete(employee_id);
	}
	
}
