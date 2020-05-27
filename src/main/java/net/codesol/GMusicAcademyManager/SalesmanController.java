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
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SalesmanController {

	@Autowired
	private SalesmanService service;
	
	@GetMapping("/salesmen")
	public List<Salesman> list() {
		return service.listAll();
	}
	
	@GetMapping("/salesman/{salesman_id}")
	public ResponseEntity<Salesman> get(@PathVariable Integer salesman_id) {
		try {
			Salesman salesman = service.get(salesman_id);
			return new ResponseEntity<Salesman>(salesman, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Salesman>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/salesmen")
	public void add(@RequestBody Salesman salesman) {
		service.save(salesman);
	}
	
	@PutMapping("/salesmen/{salesman_id}")
	public ResponseEntity<?> update(@RequestBody Salesman salesman, @PathVariable Integer salesman_id) {
		try {
			// maybe save the existsalesman instead
			Salesman existsalesman = service.get(salesman_id);
			service.save(salesman);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/salesmen/{salesman_id}")
	public void delete(@PathVariable Integer salesman_id) {
	    service.delete(salesman_id);
	}
	
}
