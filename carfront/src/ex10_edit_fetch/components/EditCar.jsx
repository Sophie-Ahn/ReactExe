import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    Stack,
} from "@mui/material";
import { EditIcon } from "@mui/icons-material";

export default function EditCar(props) {
    const { data, updateCar } = props;
    const [open, setOpen] = useState(false); // 수정 대화상자 열림 여부
    const [car, setCar] = useState({
        // 자동차 정보 입력
        brand: "",
        model: "",
        color: "",
        year: "",
        price: "",
    });

    // 입력 모달 창 열림
    const handleOpen = () => {
        setCar({
            brand: data.row.brand,
            model: data.row.model,
            color: data.row.color,
            year: data.row.year,
            price: data.row.price,
        });
        setOpen(true);
    };
    // 입력 모달 창 닫힘
    const handleClose = () => {
        setOpen(false);
    };
    // 모달창 내에서 자동차 정보 입력시, 해당 필드 정보 갱신
    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    // 자동차를 저장하고 모달 폼을 닫음
    const handleSave = () => {
        console.log(data);
        updateCar(car, data.id);
        handleClose();
    };

    return (
        <>
            <Button variant="outlined" size="small" onClick={handleOpen}>
                Edit Car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>수정할고야</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField
                            label="Brand"
                            size="small"
                            name="brand"
                            value={car.brand}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Model"
                            size="small"
                            name="model"
                            value={car.model}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Color"
                            size="small"
                            name="color"
                            value={car.color}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Year"
                            size="small"
                            name="year"
                            value={car.year}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Price"
                            size="small"
                            name="price"
                            value={car.price}
                            onChange={handleChange}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소~</Button>
                    <Button onClick={handleSave}>저장~</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
