import style from "styled-components";

const PrimaryButton = style.button`
	font-size: 50px;
    color: ${(props) => (props.primary ? "white" : "black")};
    background-color: ${(props) => (props.primary ? "black" : "white")};
`;

export default PrimaryButton;
