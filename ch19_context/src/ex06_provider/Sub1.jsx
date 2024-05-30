import { useContext } from "react";
import Sub2 from "./Sub2";
import { themeContext2 } from "./ThemeContext";

export default function Sub1() {
    const theme2 = useContext(themeContext2);

    // 아래 Provider로 감싼 영역 이하에는
    // themeContext1의 값을 아래처럼 적용한다.
    return (
        <themeContext2.Provider value={{ border: "20px solid skyblue" }}>
            <div style={theme2}>
                <h1>Sub1</h1>
                <Sub2 />
            </div>
        </themeContext2.Provider>
    );
}
