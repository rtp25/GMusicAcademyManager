package net.codesol.GMusicAcademyManager.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import net.codesol.GMusicAcademyManager.model.Employee;
import net.codesol.GMusicAcademyManager.repository.EmployeeRepository;;



@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employee_repo;
	
	public List<Employee> listAll() {
		return employee_repo.findAll();
	}
	
	public Employee save(Employee employee) {
		 return employee_repo.save(employee);
	}
	
	public Employee get(Integer employee_id) {
		return employee_repo.findById(employee_id).get();
	}
	
	public void delete(Integer employee_id) {
		employee_repo.deleteById(employee_id);
	}
	

}
