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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class InstructorController {
	@Autowired
	private InstructorService service;
	
	@GetMapping("/instructors")
	public List<Instructor> list() {
		return service.listAll();
	}
	
	@GetMapping("/instructor/{employee_id}")
	public ResponseEntity<Instructor> get(@PathVariable Integer employee_id) {
		try {
			Instructor instructor = service.get(employee_id);
			return new ResponseEntity<Instructor>(instructor, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Instructor>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/instructor")
	public void add(@RequestBody Instructor instructor) {
		service.save(instructor);
	}
	
	@PutMapping("/instructor/{employee_id}")
	public ResponseEntity<?> update(@RequestBody Instructor instructor, @PathVariable Integer employee_id) {
		try {
			// maybe save the existEmployee instead
			Instructor existInstructor = service.get(employee_id);
			service.save(instructor);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/instructor/{employee_id}")
	public void delete(@PathVariable Integer employee_id) {
	    service.delete(employee_id);
	}

}
