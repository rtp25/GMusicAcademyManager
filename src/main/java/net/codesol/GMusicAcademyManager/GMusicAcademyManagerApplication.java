package net.codesol.GMusicAcademyManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages= {"net.codesol.GMusicAcademyManager"})
public class GMusicAcademyManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GMusicAcademyManagerApplication.class, args);
		
	}

}
