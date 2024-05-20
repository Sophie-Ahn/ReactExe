import { useState } from "react";

export default function EventPractice() {
    // [변수명, setter함수] = useState(초기값)
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);
    const onClick = () => {
        console.log(username + " : " + message);
        setUsername("");
        setMessage("");
    };
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <h2>
                {username} : {message}
            </h2>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="메세지적기"
                value={message}
                onChange={onChangeMessage}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>눌러</button>
        </div>
    );
}
