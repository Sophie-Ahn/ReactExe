import { AppBar, Toolbar, Typography } from "@mui/material";
import CarList from "./components/CarList";

import "../App.css";

export default function MainApp() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar color="blue">
                    <Typography variant="h6">Carshop</Typography>
                </Toolbar>
            </AppBar>
            <CarList />
        </div>
    );
}
