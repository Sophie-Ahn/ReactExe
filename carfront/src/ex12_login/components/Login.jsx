import React, { useState } from "react";
import { SERVER_URL } from "./constants";
import { Button, TextField, Stack } from "@mui/material";

export default function Login() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [isAuthenticated, setAuth] = useState(false);

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const login = () => {
        fetch(SERVER_URL + "login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify,
        })
            .then((response) => {
                const jwtToken = response.headers.get("Authorization");
                if (jwtToken != null) {
                    sessionStorage.setItem("jwt", jwtToken);
                    setAuth(true);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <Stack spacing={2} alignItems="center" mt={2}>
                <TextField name="username" label="Username" onChange={null} />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    onChange={null}
                />
                <Button variant="outlined" color="primary" onClick={null}>
                    Login
                </Button>
            </Stack>
        </div>
    );
}
