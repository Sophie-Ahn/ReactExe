import { useState } from "react";

export default function EventPractice() {
    // form은 username과 message를 변수로 갖는 객체가 저장됨
    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    // js 변수 초기화
    const { username, message } = form;

    const onChange = (e) => {
        // 기존 form 객체 변수를 갱신한 새로운 nextForm객체 생성(참조값이 다른 객체)
        const nextForm = {
            ...form, // form객체 내의 변수를 나열하라
            [e.target.name]: e.target.value, // 앞에 변수가 있으면 덮어써라(없으면 추가)
        };
        setForm(nextForm);
    };

    const onClick = () => {
        setForm({
            username: "",
            message: "",
        });
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
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="메세지적기"
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>눌러</button>
        </div>
    );
}
