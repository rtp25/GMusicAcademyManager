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
public class AccessoryController {
	
	@Autowired
	private AccessoryService accessory_service;
	
	@GetMapping("/accessories")
	public List<Accessory> list() {
		return accessory_service.listAll();
	}
	
	@GetMapping("/accessory/{accessory_id}")
	public ResponseEntity<Accessory> get(@PathVariable Integer accessory_id) {
		try {
			Accessory accessory = accessory_service.get(accessory_id);
			return new ResponseEntity<Accessory>(accessory, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Accessory>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/accessories")
	public void add(@RequestBody Accessory accessory) {
		accessory_service.save(accessory);
	}
	
	@PutMapping("/accessories/{accessory_id}")
	public ResponseEntity<?> update(@RequestBody Accessory accessory, @PathVariable Integer accessory_id) {
		try {
			// maybe save the existaccessory instead
			Accessory existAccessory = accessory_service.get(accessory_id);
			accessory_service.save(accessory);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/accessories/{accessory_id}")
	public void delete(@PathVariable Integer accessory_id) {
	    accessory_service.delete(accessory_id);
	}
	

}
