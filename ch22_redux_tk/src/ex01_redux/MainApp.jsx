// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// 리덕스를 많이 쓰는 방법
// store 자체를 여러개를 만들던지
// 하나의 store 안에다가 여러 개를 만들던지

function reducer(state, action) {
    // 이벤트 처리 후 store 저장변수에 갱신
    if (action.type === "up") {
        return { ...state, value: state.value + action.step };
    }

    return state;
}

const initialState = { value: 0 }; // 초기값 / 어떤 변수를 store에 저장할 것인가
const store = createStore(reducer, initialState); /// 공유 저장소

function Counter() {
    const dispatch = useDispatch(); // redux store에 저장된 reducer에 이벤트 전달
    // redux store에서 저장된 객체의 value필드값을 가져온다.
    const count = useSelector((state) => state.value);
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: "up", step: 2 }); // reducer의 action에 객체 전달
                }}
            >
                +
            </button>
            {count}
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
