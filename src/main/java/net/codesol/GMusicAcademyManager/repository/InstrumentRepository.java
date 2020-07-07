package net.codesol.GMusicAcademyManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.codesol.GMusicAcademyManager.model.Instrument;

public interface InstrumentRepository extends JpaRepository<Instrument, Integer>{

}
