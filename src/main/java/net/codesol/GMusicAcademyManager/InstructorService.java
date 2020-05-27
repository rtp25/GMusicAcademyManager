package net.codesol.GMusicAcademyManager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class InstructorService {
	
	@Autowired
	private InstructorRepository instructor_repo;
	
	public List<Instructor> listAll() {
		return instructor_repo.findAll();
	}
	
	public Instructor save(Instructor instructor) {
		 return instructor_repo.save(instructor);
	}
	
	public Instructor get(Integer instructor_id) {
		return instructor_repo.findById(instructor_id).get();
	}
	
	public void delete(Integer instructor_id) {
		instructor_repo.deleteById(instructor_id);
	}
	
	
}
