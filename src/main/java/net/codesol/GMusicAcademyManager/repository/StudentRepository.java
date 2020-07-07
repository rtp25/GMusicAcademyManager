package net.codesol.GMusicAcademyManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.codesol.GMusicAcademyManager.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{

}
