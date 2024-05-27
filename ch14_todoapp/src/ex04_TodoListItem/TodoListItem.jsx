import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdOutlineIndeterminateCheckBox,
} from "react-icons/md";
import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ({ todo }) => {
    let { text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn("checkbox", { checked })}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdOutlineIndeterminateCheckBox />
            </div>
        </div>
    );
};

export default TodoListItem;
