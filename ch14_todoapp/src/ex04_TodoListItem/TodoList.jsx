import "./TodoList.scss";

import TodoListItem from "./TodoListItem";

export default function TodoList({ todos }) {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
}
