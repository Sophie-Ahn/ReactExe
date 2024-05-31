import { useDispatch } from "react-redux";

export default function Right3(props) {
    // 공유된 redux store로 이벤트 action전달
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Right3</h1>
            <input
                type="button"
                value="+"
                onClick={() => dispatch({ type: "PLUS" })}
            />
        </div>
    );
}
