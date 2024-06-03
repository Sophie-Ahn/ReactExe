import "../App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function MainApp() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Carshop</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
