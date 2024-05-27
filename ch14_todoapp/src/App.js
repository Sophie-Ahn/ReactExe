import { useState, useRef, useCallback } from 'react';

import './fonts/index.css';

import TodoTemplate from './ex05_TodoInsert/TodoTemplate';
import TodoInsertBtn from './ex05_TodoInsert/TodoInsert';
import TodoList from './ex05_TodoInsert/TodoList';

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


    return (
        <>
            <TodoTemplate>
                <TodoInsertBtn onInsert={onInsert} />
                <TodoList todos={todos} />
            </TodoTemplate>

        </>
    );
}

export default App;
