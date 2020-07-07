package net.codesol.GMusicAcademyManager.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import net.codesol.GMusicAcademyManager.model.Salesman;
import net.codesol.GMusicAcademyManager.repository.SalesmanRepository;

@Service
@Transactional
public class SalesmanService {
	
	@Autowired
	private SalesmanRepository salesman_repo;
	
	public List<Salesman> listAll() {
		return salesman_repo.findAll();
	}
	
	public Salesman save(Salesman salesman) {
		 return salesman_repo.save(salesman);
	}
	
	public Salesman get(Integer salesman_id) {
		return salesman_repo.findById(salesman_id).get();
	}
	
	public void delete(Integer salesman_id) {
		salesman_repo.deleteById(salesman_id);
	}
	

}
