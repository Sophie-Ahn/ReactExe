import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

export default function TodoList() {
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
}
