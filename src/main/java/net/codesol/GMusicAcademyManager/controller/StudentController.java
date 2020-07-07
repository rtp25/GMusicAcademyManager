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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import net.codesol.GMusicAcademyManager.service.StudentService;
import net.codesol.GMusicAcademyManager.model.Student;

@RestController
@RequestMapping("/api")
public class StudentController {

	@Autowired
	private StudentService student_service;

	@GetMapping("/students")
	public List<Student> list() {
		return student_service.listAll();
	}

	@GetMapping("/student/{customer_id}")
	public ResponseEntity<Student> get(@PathVariable Integer customer_id) {
		try {
			Student student = student_service.get(customer_id);
			return new ResponseEntity<Student>(student, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/student")
	public void add(@RequestBody Student student) {
		student_service.save(student);
	}

	@PutMapping("/student/{customer_id}")
	public ResponseEntity<?> update(@RequestBody Student student, @PathVariable Integer customer_id) {
		try {
			// maybe save the existstudent instead
			Student existStudent = student_service.get(customer_id);
			student_service.save(student);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@DeleteMapping("/student/{customer_id}")
	public void delete(@PathVariable Integer customer_id) {
	    student_service.delete(customer_id);
	}

}
