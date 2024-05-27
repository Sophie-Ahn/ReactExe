import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdOutlineIndeterminateCheckBox,
} from "react-icons/md";

import "./TodoListItem.scss";

export default function TodoListItem() {
    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className="text">굉장한 할일!</div>
            </div>
            <div className="remove">
                <MdOutlineIndeterminateCheckBox />
            </div>
        </div>
    );
}
