import "./child.css";

function Child() {
	const name = "리액트";
	// js 주석은 이렇게
	/*
	js 여러 줄 주석은 이렇게
	*/

	return (
		<>
			<div className="react">
				{/* 주석은 이렇게 작성합니다. */}
				{name}
				<br />
				위에가 주석이지롱
			</div>
		</>
	);
}

export default Child;