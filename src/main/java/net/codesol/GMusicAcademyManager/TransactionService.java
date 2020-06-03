package net.codesol.GMusicAcademyManager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class TransactionService {
	
	@Autowired
	private TransactionRepository transaction_repo;
	
	public List<Transaction> listAll() {
		return transaction_repo.findAll();
	}
	
	public Transaction save(Transaction transaction) {
		 return transaction_repo.save(transaction);
	}
	
	public Transaction get(Integer transaction_id) {
		return transaction_repo.findById(transaction_id).get();
	}
	
	public void delete(Integer transaction_id) {
		transaction_repo.deleteById(transaction_id);
	}
	
	

}
