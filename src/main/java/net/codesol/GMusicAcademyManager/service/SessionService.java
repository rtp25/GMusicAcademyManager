package net.codesol.GMusicAcademyManager.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import net.codesol.GMusicAcademyManager.model.Session;
import net.codesol.GMusicAcademyManager.repository.SessionRepository;

@Service
@Transactional
public class SessionService {
	
	@Autowired
	private SessionRepository session_repo;
	
	public List<Session> listAll() {
		return session_repo.findAll();
	}
	
	public Session save(Session session) {
		 return session_repo.save(session);
	}
	
	public Session get(Integer session_id) {
		return session_repo.findById(session_id).get();
	}
	
	public void delete(Integer session_id) {
		session_repo.deleteById(session_id);
	}
	



}
