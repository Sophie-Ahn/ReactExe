import { Component } from "react";

export default class MyComponent extends Component {
    id = 1;
    setId = (n) => {
        this.id = n;
    };
    printId = (n) => {
        console.log(this.id);
    };
    render() {
        return <div>MyComponent</div>;
    }
}
