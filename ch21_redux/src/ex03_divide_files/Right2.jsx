import Right3 from "./Right3";

export default function Right2(props) {
    const { onIncrease } = props;

    return (
        <div>
            <h1>Right2</h1>
            <Right3 onIncrease={onIncrease} />
        </div>
    );
}
