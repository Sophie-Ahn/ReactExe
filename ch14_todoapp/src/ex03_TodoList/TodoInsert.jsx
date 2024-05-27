import { MdOutlineAddBox } from "react-icons/md";
import "./TodoInsert.scss";

export default function TodoInsert() {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdOutlineAddBox />
            </button>
        </form>
    );
}
