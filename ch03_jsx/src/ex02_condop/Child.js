function Child() {
	const name = "리액트";
	return (
		<>
			{name === '리액트' ? (
				<h1>리액트입니당~0.0</h1>
			) : (
				<h2>리액트 아니예용ㅠㅠ</h2>
			)}
		</>
	)
}

export default Child;