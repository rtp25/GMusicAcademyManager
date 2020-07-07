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
import net.codesol.GMusicAcademyManager.model.Transaction;
import net.codesol.GMusicAcademyManager.service.TransactionService;
import net.codesol.GMusicAcademyManager.service.ItemService;

@RestController
@RequestMapping("/api")
public class TransactionController {
	
	@Autowired
	private TransactionService transaction_service;
	@Autowired
	private ItemService item_service;
	
	@GetMapping("/transactions")
	public List<Transaction> list() {
		return transaction_service.listAll();
	}
	
	@GetMapping("/transaction/{transaction_id}")
	public ResponseEntity<Transaction> get(@PathVariable Integer transaction_id) {
		try {
			Transaction transaction = transaction_service.get(transaction_id);
			return new ResponseEntity<Transaction>(transaction, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Transaction>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/transaction")
	public void add(@RequestBody Transaction transaction) {
		float item_total_cost = item_service.getItemPrice(transaction.getitem_id());
		transaction.calculatetotal_cost(item_total_cost);
		transaction_service.save(transaction);
	}
	
	@PutMapping("/transaction/{transaction_id}")
	public ResponseEntity<?> update(@RequestBody Transaction transaction, @PathVariable Integer transaction_id) {
		try {
			// maybe save the existtransaction instead
			Transaction existTransaction = transaction_service.get(transaction_id);
			//float item_total_cost = item_service.getItemPrice(transaction.getitem_id());
			//transaction.calculatetotal_cost(item_total_cost);
			transaction_service.save(transaction);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/transaction/{transaction_id}")
	public void delete(@PathVariable Integer transaction_id) {
	    transaction_service.delete(transaction_id);
	}
	

}
