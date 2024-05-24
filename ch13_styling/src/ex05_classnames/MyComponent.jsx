import classnames from "classnames";

export default function MyComponent() {
    let result = "";
    result = classnames("one", "two");
    console.log(result);
    result = classnames("one", { two: true });
    console.log(result);
    result = classnames("one", { two: false });
    console.log(result);
    result = classnames("one", ["two", "three"]);
    console.log(result);

    const myclass = "hello";
    result = classnames("one", myclass, { myCondition: true });
    console.log(result);

    return <div>굉장해 엄청나!!</div>;
}
