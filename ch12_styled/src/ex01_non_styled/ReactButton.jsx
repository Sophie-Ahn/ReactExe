const ReactButton = (props) => {
    const style = {
        background: "purple",
        border: "5px solid aqua",
        color: "white",
    };

    return (
        <button style={style} type="button">
            {props.children}
        </button>
    );
};

export default ReactButton;
