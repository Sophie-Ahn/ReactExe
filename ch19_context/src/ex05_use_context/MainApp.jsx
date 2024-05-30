import { useContext } from "react";
import Sub1 from "./Sub1";
import { themeContext1 } from "./ThemeContext";

import "./style.css";

export default function MainApp() {
    const theme1 = useContext(themeContext1);

    return (
        <>
            <div style={theme1} className="root">
                <h1>Hello World</h1>
                <Sub1 />
            </div>
        </>
    );
}
