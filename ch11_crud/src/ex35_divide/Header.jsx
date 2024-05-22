function Header(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode();
                    }}
                    style={{
                        display: "inline-block",
                        color: "yellow",
                        background: "turquoise",
                        textDecoration: "none",
                        fontSize: "100px",
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

export default Header;
