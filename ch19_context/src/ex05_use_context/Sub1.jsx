import { useContext } from "react";
import Sub2 from "./Sub2";
import { themeContext2 } from "./ThemeContext";

export default function Sub1() {
    const theme2 = useContext(themeContext2);
    return (
        <div style={theme2}>
            <h1>Sub1</h1>
            <Sub2 />
        </div>
    );
}
