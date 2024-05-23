import style from "styled-components";

const Wrapper = style.div`
	padding: 1rem;
	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	align-items: ${(props) => (props.Start ? "flex-start" : "flex-end")};
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
