import style from "styled-components";

const PrimaryButton = style.button`
	font-size: 50px;
    color: ${(props) => {
        if (props.primary) {
            return "white";
        } else {
            return "black";
        }
    }};
    background-color: ${(props) => {
        if (props.primary) {
            return "black";
        } else {
            return "white";
        }
    }};
`;

export default PrimaryButton;
