package net.codesol.GMusicAcademyManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.codesol.GMusicAcademyManager.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
