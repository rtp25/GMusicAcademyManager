package net.codesol.GMusicAcademyManager.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import net.codesol.GMusicAcademyManager.model.Instrument;
import net.codesol.GMusicAcademyManager.repository.InstrumentRepository;

@Service
@Transactional
public class InstrumentService {
	
	@Autowired
	private InstrumentRepository instrument_repo;
	
	public List<Instrument> listAll() {
		return instrument_repo.findAll();
	}
	
	public Instrument save(Instrument instrument) {
		 return instrument_repo.save(instrument);
	}
	
	public Instrument get(Integer item_id) {
		return instrument_repo.findById(item_id).get();
	}
	
	public void delete(Integer item_id) {
		instrument_repo.deleteById(item_id);
	}

}
