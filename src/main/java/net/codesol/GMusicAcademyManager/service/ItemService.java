package net.codesol.GMusicAcademyManager.service;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import net.codesol.GMusicAcademyManager.model.Item;
import net.codesol.GMusicAcademyManager.repository.ItemRepository;

@Service
@Transactional
public class ItemService {
	
	@Autowired
	private ItemRepository item_repo;
	
	public List<Item> listAll() {
		return item_repo.findAll();
	}
	
	public Item save(Item item) {
		 return item_repo.save(item);
	}
	
	public Item get(Integer item_id) {
		return item_repo.findById(item_id).get();
	}
	
	public void delete(Integer item_id) {
		item_repo.deleteById(item_id);
	}
	
	public float getItemPrice(Integer item_id) {
		return item_repo.findById(item_id).get().getPrice();
	}
	
	//maybe do this with param in ItemRepo
	//@Query("SELECT price FROM item WHERE item_id =")
	//public float getItemPrice()

}
