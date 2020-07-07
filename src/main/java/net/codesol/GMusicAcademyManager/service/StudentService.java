package net.codesol.GMusicAcademyManager.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import net.codesol.GMusicAcademyManager.model.Student;
import net.codesol.GMusicAcademyManager.repository.StudentRepository;

@Service
@Transactional
public class StudentService {

	@Autowired
	private StudentRepository student_repo;

	public List<Student> listAll() {
		return student_repo.findAll();
	}

	public Student save(Student student) {
		 return student_repo.save(student);
	}

	public Student get(Integer customer_id) {
		return student_repo.findById(customer_id).get();
	}

	public void delete(Integer customer_id) {
		student_repo.deleteById(customer_id);
	}

}
