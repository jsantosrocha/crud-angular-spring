package com.zecadev.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.zecadev.crudspring.model.Course;
import com.zecadev.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args -> {
			courseRepository.deleteAll();

			Course c1 = new Course();
			c1.setName("Angular");
			c1.setCategory("front-end");
			courseRepository.save(c1);

			Course c2 = new Course();
			c2.setName("Angular");
			c2.setCategory("front-end");
			courseRepository.save(c2);

		};
	}
}
