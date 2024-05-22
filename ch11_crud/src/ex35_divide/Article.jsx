function Article(props) {
    return (
        <article
            style={{
                color: "#9700ff",
                fontSize: "25px",
                display: "inline-block",
            }}
        >
            <h2
                style={{
                    color: "#9700ff",
                    fontSize: "30px",
                    display: "inline-block",
                    marginRight: "10px",
                }}
            >
                {props.title}
            </h2>
            {props.body}
        </article>
    );
}

export default Article;
