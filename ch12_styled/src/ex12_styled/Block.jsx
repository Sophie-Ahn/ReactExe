import style from "styled-components";

const Block = style.div`
	padding: ${(props) => props.padding};
	border: 1px solid black;
	border-radius: 16px;
	background: ${(props) => props.background};
	color: yellow;
	font-size: 4rem;
	font-weight: bold;
	text-align: center;
	
`;

export default Block;
