package net.codesol.GMusicAcademyManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.codesol.GMusicAcademyManager.model.Session;

public interface SessionRepository extends JpaRepository<Session, Integer>{

}
