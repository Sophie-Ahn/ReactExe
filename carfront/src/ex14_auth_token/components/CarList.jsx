import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import { DataGrid } from "@mui/x-data-grid";
import { Snackbar, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddCar from "./AddCar";
import EditCar from "./EditCar";

export default function CarList() {
    // 서버로부터 전체 car목록을 받아와서 저장
    const [cars, setCars] = useState([]);
    // 알림 메세지 상태
    const [open, setOpen] = useState(false);

    // 시작하면 1번 서버에 요청
    useEffect(() => {
        fetchCars();
    }, []);

    // 서버에 car목록 요청 함수
    const fetchCars = () => {
        // 세션 스토리지로부터 token을 가져온다.
        const token = sessionStorage.getItem("jwt");

        fetch(SERVER_URL + "api/cars", {
            headers: { Authorization: token },
        })
            .then((response) => response.json())
            .then((data) => setCars(data._embedded.cars))
            .catch((err) => console.log(err));
    };

    // 삭제 후 목록 다시 호출
    const onDelClick = (url) => {
        if (window.confirm("정말 삭제 할거...?")) {
            const token = sessionStorage.getItem("jwt");
            fetch(url, { method: "DELETE", headers: { Authorization: token } })
                .then((response) => {
                    fetchCars();
                    setOpen(true);
                })
                .catch((err) => console.log(err));
        }
    };

    const addCar = (car) => {
        const token = sessionStorage.getItem("jwt");

        fetch(SERVER_URL + "api/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(car),
        })
            .then((response) => {
                if (response.ok) {
                    // 추가 성공이면, 서버로부터 목록 재 요청
                    fetchCars();
                } else {
                    alert("something wrong");
                }
            })
            .catch((err) => console.log(err));
    };

    // 특정 항목 갱신 시 => PATCH
    // 전체 항목 갱신 시 => PUT
    // car객체 서버로 갱신 요청 함수
    const updateCar = (car, link) => {
        const token = sessionStorage.getItem("jwt");

        fetch(link, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(car),
        })
            .then((response) => {
                console.log(link);
                if (response.ok) {
                    // 추가 성공이면, 서버로부터 목록 재 요청
                    fetchCars();
                } else {
                    alert("something wrong");
                }
            })
            .catch((err) => console.log(err));
    };

    // DataGrid의 헤더에서 사용할 정보
    const columns = [
        // field가 json데이터의 명칭과 같아야 함
        { field: "brand", headerName: "Brand", width: 200 },
        { field: "model", headerName: "Model", width: 200 },
        { field: "color", headerName: "Color", width: 200 },
        { field: "year", headerName: "Year", width: 200 },
        { field: "price", headerName: "Price", width: 200 },
        {
            field: "_links.car.href",
            headerName: "update",
            sortable: false,
            filterable: false,
            renderCell: (row) => (
                <EditCar data={row} updateCar={updateCar}></EditCar>
            ),
        },
        {
            field: "_links.self.href",
            headerName: "delete",
            sortable: false,
            filterable: false,
            renderCell: (row) => (
                <IconButton onClick={() => onDelClick(row.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            ),
        },
    ];

    return (
        <React.Fragment>
            <div style={{ height: 500, width: "100%" }}>
                {/* getRowId === row.id */}
                <DataGrid
                    rows={cars}
                    columns={columns}
                    disableRowSelectionOnClick={true}
                    getRowId={(row) => row._links.self.href}
                />
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                    message="Car deleted"
                />
            </div>

            <AddCar addCar={addCar} />
        </React.Fragment>
    );
}