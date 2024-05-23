import style from "styled-components";

const Block = style.div`
	padding: ${(props) => props.padding};
	border: 1px solid black;
	border-radius: 16px;
	background-color: ${(props) => props.backgroundColor};
	color: white;
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
`;

export default Block;
