package net.codesol.GMusicAcademyManager;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
