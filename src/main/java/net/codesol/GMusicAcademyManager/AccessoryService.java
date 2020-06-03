package net.codesol.GMusicAcademyManager;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AccessoryService {
	
	@Autowired
	private AccessoryRepository accessory_repo;
	
	public List<Accessory> listAll() {
		return accessory_repo.findAll();
	}
	
	public Accessory save(Accessory accessory) {
		 return accessory_repo.save(accessory);
	}
	
	public Accessory get(Integer accessory_id) {
		return accessory_repo.findById(accessory_id).get();
	}
	
	public void delete(Integer accessory_id) {
		accessory_repo.deleteById(accessory_id);
	}

}
