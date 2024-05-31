import { useSelector } from "react-redux";

export default function Left3(props) {
    console.log("render Left3");
    // 리덕스의 store를 통해 값을 가져온다.
    const number = useSelector((state) => state.number);

    return (
        <div>
            <h1>Left3 : {number}</h1>
        </div>
    );
}
