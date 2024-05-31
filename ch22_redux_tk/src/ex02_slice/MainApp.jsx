// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// 리덕스를 많이 쓰는 방법
// store 자체를 여러개를 만들던지
// 하나의 store 안에다가 여러 개를 만들던지

/*
function reducer(state, action) {
    // 이벤트 처리 후 store 저장변수에 갱신
    if (action.type === "up") {
        return { ...state, value: state.value + action.step };
    }

    return state;
}
const initialState = { value: 0 }; // 초기값 / 어떤 변수를 store에 저장할 것인가
const store = createStore(reducer, initialState); /// 공유 저장소
*/

// store내에 작은 store를 slice라 한다.
const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { value: 0, mValue: 0 },
    reducers: {
        up: (state, action) => {
            state.value = state.value + action.step;
        },
        down: (state, action) => {
            state.mValue = state.mValue - action.step;
        },
    },
});

// 큰 저장소인 store내에 작은 저장소인 slice를 포함
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const mCount = useSelector((state) => state.counter.mValue);
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: "counterSlice/up", step: 2 });
                }}
            >
                +
            </button>
            {count}
            <button
                onClick={() => {
                    dispatch({ type: "counterSlice/down", step: 1 });
                }}
            >
                -
            </button>
            {mCount}
        </div>
    );
}

export default function MainApp() {
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>
    );
}
