package net.codesol.GMusicAcademyManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.codesol.GMusicAcademyManager.model.Instructor;


public interface InstructorRepository extends JpaRepository<Instructor, Integer>  {

}
