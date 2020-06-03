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
public class ItemController {
	
	@Autowired
	private ItemService item_service;
	
	@GetMapping("/items")
	public List<Item> list() {
		return item_service.listAll();
	}
	
	@GetMapping("/item/{item_id}")
	public ResponseEntity<Item> get(@PathVariable Integer item_id) {
		try {
			Item item = item_service.get(item_id);
			return new ResponseEntity<Item>(item, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Item>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/items")
	public void add(@RequestBody Item item) {
		item_service.save(item);
	}
	
	@PutMapping("/items/{item_id}")
	public ResponseEntity<?> update(@RequestBody Item item, @PathVariable Integer item_id) {
		try {
			// maybe save the existitem instead
			Item existItem = item_service.get(item_id);
			item_service.save(item);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/items/{item_id}")
	public void delete(@PathVariable Integer item_id) {
	    item_service.delete(item_id);
	}
	

}
