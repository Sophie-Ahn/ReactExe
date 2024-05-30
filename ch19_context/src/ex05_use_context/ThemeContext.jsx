import { createContext } from "react";

// theme1을 사용하는 모든 컴포넌트의 속성을 이곳에서 변경하면 모두 적용된다.
const theme1 = { border: "10px dashed gold" };
const themeContext1 = createContext(theme1);

const theme2 = { border: "10px solid royalblue" };
const themeContext2 = createContext(theme2);

export { themeContext1, themeContext2 };
