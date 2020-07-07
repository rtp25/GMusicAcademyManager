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

import net.codesol.GMusicAcademyManager.model.Accessory;
import net.codesol.GMusicAcademyManager.service.AccessoryService;





@RestController
@RequestMapping("/api")
public class AccessoryController {
	
	@Autowired
	private AccessoryService accessory_service;
	
	@GetMapping("/accessories")
	public List<Accessory> list() {
		return accessory_service.listAll();
	}
	
	@GetMapping("/accessory/{item_id}")
	public ResponseEntity<Accessory> get(@PathVariable Integer item_id) {
		try {
			Accessory accessory = accessory_service.get(item_id);
			return new ResponseEntity<Accessory>(accessory, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Accessory>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/accessory")
	public void add(@RequestBody Accessory accessory) {
		accessory_service.save(accessory);
	}
	
	@PutMapping("/accessory/{item_id}")
	public ResponseEntity<?> update(@RequestBody Accessory accessory, @PathVariable Integer item_id) {
		try {
			// maybe save the existaccessory instead
			Accessory existAccessory = accessory_service.get(item_id);
			accessory_service.save(accessory);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/accessory/{item_id}")
	public void delete(@PathVariable Integer item_id) {
	    accessory_service.delete(item_id);
	}
	

}
