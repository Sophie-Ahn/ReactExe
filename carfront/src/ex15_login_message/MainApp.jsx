import { AppBar, Toolbar, Typography } from "@mui/material";
import Login from "./components/Login";

import "../App.css";

export default function MainApp() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar color="blue">
                    <Typography variant="h6">Carshop</Typography>
                </Toolbar>
            </AppBar>
            <Login />
            {/* <CarList /> */}
        </div>
    );
}
