package net.codesol.GMusicAcademyManager.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.codesol.GMusicAcademyManager.model.Session;
import net.codesol.GMusicAcademyManager.service.InstructorService;
import net.codesol.GMusicAcademyManager.service.InstrumentService;
import net.codesol.GMusicAcademyManager.service.ItemService;
import net.codesol.GMusicAcademyManager.service.SessionService;
import net.codesol.GMusicAcademyManager.service.StudentService;
import net.codesol.GMusicAcademyManager.service.TransactionService;

@Service
public class OperationsController {
	
	@Autowired
	private ItemService item_service;
	@Autowired
	private TransactionService transaction_service;
	@Autowired
	private SessionService session_service;
	@Autowired
	private StudentService student_service;
	@Autowired
	private InstructorService instructor_service;
	@Autowired
	private InstrumentService instrument_service;
	
	
	public void processTransaction() {
		//check if customer and employee in db every time a post attempt
		// updated item inventory after transaction has been made
		
	}
	
	// checks session from every post attempt
	public boolean processSession(Session session)  {
		
//		Session current_session = session_service.get(session_id);
		Session current_session = session;
		Integer student_id = current_session.getstudent_id();
		Integer instructor_id = current_session.getinstructor_id();
		Integer instrument_id = current_session.getinstrument_id();
		

			if(student_service.get(student_id).equals(null) ||  instructor_service.get(instructor_id).equals(null)
					|| instrument_service.get(instrument_id).equals(null)) {
//			session_service.delete(session_id);
				return false;
			}
			
			return true;
		
		
		
	}
	
	public boolean checkItemValid(Integer item_id) {
		
		if(!item_service.get(item_id).equals(null))
			return true;
		
		return false;
	}
	

}
