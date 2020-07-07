package net.codesol.GMusicAcademyManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.codesol.GMusicAcademyManager.model.Item;


public interface ItemRepository extends JpaRepository<Item, Integer>{

}
