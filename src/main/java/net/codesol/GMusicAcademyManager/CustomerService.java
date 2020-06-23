package net.codesol.GMusicAcademyManager;

import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CustomerService {
	
	@Autowired
	private CustomerRepository customer_repo;
	
	public List<Customer> listAll() {
		return customer_repo.findAll();
	}
	
	public Customer save(Customer customer) {
		 return customer_repo.save(customer);
	}
	
	public Customer get(Integer customer_id) {
		return customer_repo.findById(customer_id).get();
	}
	
	public void delete(Integer customer_id) {
		customer_repo.deleteById(customer_id);
	}
	

}
