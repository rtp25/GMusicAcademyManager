package net.codesol.GMusicAcademyManager.controller;

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
import net.codesol.GMusicAcademyManager.model.Instrument;
import net.codesol.GMusicAcademyManager.service.InstrumentService;



@RestController
@RequestMapping("/api")
public class InstrumentController {
	
	@Autowired
	private InstrumentService instrument_service;
	
	@GetMapping("/instruments")
	public List<Instrument> list() {
		return instrument_service.listAll();
	}
	
	@GetMapping("/instrument/{item_id}")
	public ResponseEntity<Instrument> get(@PathVariable Integer item_id) {
		try {
			Instrument instrument = instrument_service.get(item_id);
			return new ResponseEntity<Instrument>(instrument, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Instrument>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/instrument")
	public void add(@RequestBody Instrument instrument) {
		instrument_service.save(instrument);
	}
	
	@PutMapping("/instrument/{item_id}")
	public ResponseEntity<?> update(@RequestBody Instrument instrument, @PathVariable Integer item_id) {
		try {
			// maybe save the existInstrument instead
			Instrument existInstrument = instrument_service.get(item_id);
			instrument_service.save(instrument);
			return new ResponseEntity<>(HttpStatus.OK);
			
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/instrument/{item_id}")
	public void delete(@PathVariable Integer item_id) {
	    instrument_service.delete(item_id);
	}

}
