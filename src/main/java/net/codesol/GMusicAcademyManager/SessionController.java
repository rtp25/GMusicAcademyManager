package net.codesol.GMusicAcademyManager;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SessionController {

	@Autowired
	private SessionService session_service;

	@GetMapping("/sessions")
	public List<Session> list() {
		return session_service.listAll();
	}

	@GetMapping("/session/{session_id}")
	public ResponseEntity<Session> get(@PathVariable Integer session_id) {
		try {
			Session session = session_service.get(session_id);
			return new ResponseEntity<Session>(session, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Session>(HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/session")
	public void add(@RequestBody Session session) {
		session_service.save(session);
	}

	@PutMapping("/session/{session_id}")
	public ResponseEntity<?> update(@RequestBody Session session, @PathVariable Integer session_id) {
		try {
			// maybe save the existsession instead
			Session existSession = session_service.get(session_id);
			session_service.save(session);
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@DeleteMapping("/session/{session_id}")
	public void delete(@PathVariable Integer session_id) {
	    session_service.delete(session_id);
	}


}
