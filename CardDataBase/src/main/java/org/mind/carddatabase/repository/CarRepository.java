package org.mind.carddatabase.repository;

import org.mind.carddatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;

import java.util.List;

/*Rest Repository 설정에 의해
₩* 이 CarRepository는 json Controller의 역할을 한다.
* 1. 전체 조회 GET - http://localhost:12000/api/cars
* 2. ID 3인 CAR 조회 GET - http://localhost:12000/api/cars/3
* 3. ID 3인 CAR의 OWNER 조회 GET - http://localhost:12000/api/cars/3/owner
* 4, 생성 POST - http://localhost:12000/api/cars
*       Body > raw > JSON
*       전송
* {
    "brand": "Samsung",
    "model": "SSS",
    "color": "black",
    "registerNumber": "SSS-111",
    "year": "2024",
    "price": "3000"
}
* 응답
* {
    "brand": "Samsung",
    "model": "SSS",
    "color": "black",
    "registerNumber": "SSS-111",
    "year": 2024,
    "price": 3000,
    "_links": {
        "self": {
            "href": "http://localhost:12000/api/cars/11"
        },
        "car": {
            "href": "http://localhost:12000/api/cars/11"
        },
        "owner": {
            "href": "http://localhost:12000/api/cars/11/owner"
        }
    }
}
* 5. 업데이트 PATCH - http://localhost:12000/api/cars/11
*       Body > raw >JSON
*       전송
* {
    "color": "gold"
}
* 응답
* {
    "brand": "Samsung",
    "model": "SSS",
    "color": "gold",
    "registerNumber": "SSS-111",
    "year": 2024,
    "price": 3000,
    "_links": {
        "self": {
            "href": "http://localhost:12000/api/cars/11"
        },
        "car": {
            "href": "http://localhost:12000/api/cars/11"
        },
        "owner": {
            "href": "http://localhost:12000/api/cars/11/owner"
        }
    }
}
*
* 6. ID 11인 CAR의 OWNER를 추가 PUT - http://localhost:12000/api/cars/11
* */


// 현재 Repository의 api 주소를 변경할 수 있다.
//@RepositoryRestResource(path = "aaa")

// Client에서 요청하는 추가 메서드를 만드려면 @RepositoryRestResource를 써주고
// 아래처럼 @Param으로 요청값을 전달해야 한다.
@RepositoryRestResource
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByBrand(@Param("brand") String brand);

    List<Car> findByColor(@Param("color") String color);
}
