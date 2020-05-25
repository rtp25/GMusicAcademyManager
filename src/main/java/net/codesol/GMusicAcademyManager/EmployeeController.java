package net.codesol.GMusicAcademyManager;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@GetMapping("/employees")
	public List<Employee> list() {
		return service.listAll();
	}
	
	@GetMapping("/employee/{employee_id}")
	public ResponseEntity<Employee> get(@PathVariable Integer employee_id) {
		try {
			Employee employee = service.get(employee_id);
			return new ResponseEntity<Employee>(employee, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/employees")
	public void add(@RequestBody Employee employee) {
		service.save(employee);
	}
	
	@PutMapping("/employees/{employee_id}")
	public ResponseEntity<?> update(@RequestBody Employee employee, @PathVariable Integer employee_id) {
		try {
			// maybe save the existEmployee instead
			Employee existEmployee = service.get(employee_id);
			service.save(employee);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/employees/{employee_id}")
	public void delete(@PathVariable Integer employee_id) {
	    service.delete(employee_id);
	}
	

}
