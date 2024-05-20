import { Component } from "react";

export default class EventPractice extends Component {
    state = {
        message: "",
    };
    render() {
        const { message } = this.state;

        return (
            <div>
                <h1>이벤트 연습</h1>
                <h2>메세지: {message}</h2>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력"
                    value={this.state.message}
                    onChange={(e) => {
                        this.setState({
                            message: e.target.value,
                        });
                    }}
                />
                <button
                    onClick={() => {
                        alert(this.state.message);
                        this.setState({
                            message: "",
                        });
                    }}
                >
                    어디 한번 눌러보시지
                </button>
            </div>
        );
    }
}
