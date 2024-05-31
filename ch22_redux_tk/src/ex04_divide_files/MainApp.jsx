import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/shareStore";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const mCount = useSelector((state) => state.counter.mValue);
    const str = useSelector((state) => state.append.value);

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
            <br />
            <button
                onClick={() => {
                    dispatch({ type: "counterSlice/down", step: 1 });
                }}
            >
                -
            </button>
            {mCount}
            <br />
            <button
                onClick={() => {
                    dispatch({ type: "strSlice/append", ch: "0" });
                }}
            >
                더하기
            </button>
            {str}
            <br />
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
