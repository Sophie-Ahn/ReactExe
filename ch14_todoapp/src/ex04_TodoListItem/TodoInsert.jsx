import { useState, useCallback } from "react";

import { MdOutlineAddBox } from "react-icons/md";
import "./TodoInsert.scss";

export default function TodoInsert() {
    const [value, setValue] = useState("");
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <form className="TodoInsert">
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdOutlineAddBox />
            </button>
        </form>
    );
}
