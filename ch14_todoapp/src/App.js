import { useState, useRef, useCallback } from 'react';

import './fonts/index.css';

import TodoTemplate from './ex07_TodoToggle/TodoTemplate';
import TodoInsertBtn from './ex07_TodoToggle/TodoInsert';
import TodoList from './ex07_TodoToggle/TodoList';

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '굉장한 해야할 일을 알아보기!',
            checked: true,
        },
        {
            id: 2,
            text: '웨더랜드인가 짱구 극장판 다시 보기!',
            checked: false,
        },
        {
            id: 3,
            text: '짱구 극장판 암흑대마왕 찾기 다시 보기!',
            checked: false,
        },
        {
            id: 4,
            text: '리눅스 강의 들어야 함',
            checked: false,
        },
    ]);

    const nextId = useRef(5);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);

    const onRemove = useCallback((id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]);

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );


    return (
        <>
            <TodoTemplate>
                <TodoInsertBtn onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </TodoTemplate>

        </>
    );
}

export default App;
