package org.mind.carddatabase;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mind.carddatabase.domain.Car;
import org.mind.carddatabase.domain.Owner;
import org.mind.carddatabase.domain.User;
import org.mind.carddatabase.repository.CarRepository;
import org.mind.carddatabase.repository.OwnerRepository;
import org.mind.carddatabase.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
@Log4j2
@RequiredArgsConstructor
public class CardDataBaseApplication implements CommandLineRunner {

	private final OwnerRepository ownerRepository;
	private final CarRepository carRepository;
	private final UserRepository userRepository;

	public static void main(String[] args) {

		SpringApplication.run(CardDataBaseApplication.class, args);
		log.info("CardDataBase Application Started..........................");
	}

	@Override
	public void run(String... args) throws Exception {
		// 부모테이블의 데이터를 먼저 저장
//		Owner owner1 = Owner.builder()
//				.firstName("Seulki")
//				.lastName("Ahn")
//				.build();
//		Owner owner2 = Owner.builder()
//				.firstName("Hyuni")
//				.lastName("Chu")
//				.build();
//		ownerRepository.saveAll(Arrays.asList(owner1, owner2));
//
//		Car car1 = Car.builder()
//				.brand("Ford")
//				.model("Mustang")
//				.color("white")
//				.registerNumber("AAA-111")
//				.year(2024)
//				.price(6400)
//				.owner(owner2)
//				.build();
//		Car car2 = Car.builder()
//				.brand("Hyundai")
//				.model("Genesis")
//				.registerNumber("BBB-111")
//				.year(2024)
//				.price(8500)
//				.owner(owner1)
//				.build();
//		Car car3 = Car.builder()
//				.brand("Volvo")
//				.model("SUV")
//				.registerNumber("CCC-111")
//				.year(2024)
//				.price(10000)
//				.owner(owner1)
//				.build();
//		carRepository.saveAll(Arrays.asList(car1, car2, car3));
//
//		for(Owner owner : ownerRepository.findAll()) {
//			log.info(owner.toString());
//		}
//		for(Car car : carRepository.findAll()) {
//			log.info(car.toString());
//		}

		// username=user / password=user
//		User user1 = User.builder()
//						.username("user")
//						.password("$2y$10$wlw84Kru3sDTE55qlN5t6O4w7pV9Q1h0OFmvHnkazBhJ7u5WufJfC")
//						.role("USER")
//						.build();
//		User user2 = User.builder()
//				.username("admin")
//				.password("$2y$10$6QZkIu0xNXm7U5648ASGVeg/qADBWnDnl94lhRlyjB.baHwjrR8ze")
//				.role("ADMIN")
//				.build();
//
//
//		userRepository.save(user1);
//		userRepository.save(user2);
	}
}
