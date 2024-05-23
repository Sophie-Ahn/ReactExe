import style from "styled-components";

const Wrapper = style.div`
	padding: 12rem 1rem;
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	align-items: ${(props) => {
        if (props.alignCenter) {
            return "center";
        } else if (props.alignStart) {
            return "flex-start";
        } else if (props.alignEnd) {
            return "flex-end";
        }
    }};
	justify-content: ${(props) => {
        if (props.flexStart) {
            return "flex-start";
        } else if (props.flexEnd) {
            return "flex-end";
        } else if (props.center) {
            return "center";
        }
    }};
	background: lemonchiffon;
`;

export default Wrapper;
