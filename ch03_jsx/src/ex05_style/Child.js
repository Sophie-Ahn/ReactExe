function Child() {
	const name = "리액트";
	const style = {
		backgroundColor: 'turquoise',
		color: 'yellow',
		fontSize: '20px',
		fontWeight: 'bold',
		padding: 10
	}


	return (
		<>
			<div style={style}>
				{name}
			</div>
		</>
	);
}

export default Child;