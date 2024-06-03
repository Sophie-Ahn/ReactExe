import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import { DataGrid } from "@mui/x-data-grid";

export default function CarList() {
    // 서버로부터 전체 car목록을 받아와서 저장
    const [cars, setCars] = useState([]);

    // 시작하면 1번 서버에 요청
    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch(SERVER_URL + "api/cars")
            .then((response) => response.json())
            .then((data) => setCars(data._embedded.cars))
            .catch((err) => console.log(err));
    };

    // 삭제 후 목록 다시 호출
    const onDelClick = (url) => {
        fetch(url, { method: "DELETE" })
            .then((response) => fetchCars())
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
            field: "_links.self.href",
            headerName: "",
            sortable: false,
            filterable: false,
            renderCell: (row) => (
                <button onClick={() => onDelClick(row.id)}>삭제</button>
            ),
        },
    ];

    return (
        <div style={{ height: 500, width: "100%" }}>
            {/* getRowId === row.id */}
            <DataGrid
                rows={cars}
                columns={columns}
                getRowId={(row) => row._links.self.href}
            ></DataGrid>
        </div>
    );
}
