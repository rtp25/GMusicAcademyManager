package net.codesol.GMusicAcademyManager;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	public Student get(Integer student_id) {
		return student_repo.findById(student_id).get();
	}
	
	public void delete(Integer student_id) {
		student_repo.deleteById(student_id);
	}

}
