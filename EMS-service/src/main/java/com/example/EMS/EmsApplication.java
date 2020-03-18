package com.example.EMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication(scanBasePackages = "com.example.EMS")
@EnableAutoConfiguration
@EnableWebMvc
@Configuration

public class EmsApplication {

	public static void main(String[] args) {

		SpringApplication.run(EmsApplication.class, args);
	}

}
