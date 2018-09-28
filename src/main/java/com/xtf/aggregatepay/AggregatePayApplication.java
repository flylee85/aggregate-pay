package com.xtf.aggregatepay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class AggregatePayApplication {

	public static void main(String[] args) {

		SpringApplication.run(AggregatePayApplication.class, args);
	}
}
