import { useContext } from "react";
import Sub3 from "./Sub3";
import { themeContext2 } from "./ThemeContext";

export default function Sub2() {
    const theme2 = useContext(themeContext2);
    return (
        <div style={theme2}>
            <h1>Sub2</h1>
            <Sub3 />
        </div>
    );
}
