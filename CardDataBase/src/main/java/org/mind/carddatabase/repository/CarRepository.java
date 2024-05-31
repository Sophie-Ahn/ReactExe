package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;

// 현재 Repository의 api 주소를 변경할 수 있다.
//@RepositoryRestResource(path = "aaa")
public interface CarRepository extends JpaRepository<Car, Long> {

}
