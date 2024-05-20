import { Component } from "react";

export default class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    onChange={(e) => {
                        console.log("입력~");
                        console.log(e);
                        console.log(e.target.value);
                    }}
                />
            </div>
        );
    }
}
