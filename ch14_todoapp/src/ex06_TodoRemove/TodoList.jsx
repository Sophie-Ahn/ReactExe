import "./TodoList.scss";

import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onRemove }) {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
    );
}
