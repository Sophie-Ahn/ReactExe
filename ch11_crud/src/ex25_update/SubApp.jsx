import { useState } from "react";

const style = {
    listStyle: "none",
};
const none = {
    textDecoration: "none",
    fontSize: "22px",
    color: "#ef05e9",
    background: "#fcedff",
    padding: 10,
    display: "inline-block",
    marginBottom: "20px",
};

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

function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.fruits.length; i++) {
        let t = props.fruits[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={"/read/" + t.id}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode(Number(event.target.id));
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }

    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}

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

function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            {/* submit버튼을 누르면 form에서 onSubmit이 호출된다. */}
            <form
                onSubmit={(event) => {
                    event.preventDefault(); // 기본 동작 막음(페이지 reload)
                    const title = event.target.title.value;
                    const body = event.target.body.value;

                    // 부모영역에서 props를 통해 전달한 onCreate 함수를 호출함
                    props.onCreate(title, body);
                }}
            >
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create" />
                </p>
            </form>
        </article>
    );
}

function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return (
        <article>
            <h2>Update</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const title = event.target.title.value;
                    const body = event.target.body.value;

                    props.onUpdate(title, body);
                }}
            >
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={(event) => {
                            setBody(event.target.value);
                        }}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="Update" />
                </p>
            </form>
        </article>
    );
}

export default function SubApp() {
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null); // nav의 어떤 항목(id)이 선택되었는지
    const [nextId, setNextId] = useState(4); // 새로운 id발급, fruits가 처음 3개 이므로, 새로운 id는 4부터 시작
    const [fruits, setFruits] = useState([
        {
            id: 1,
            title: "banana",
            body: "is yellow....",
        },
        {
            id: 2,
            title: "apple",
            body: "is red....",
        },
        {
            id: 3,
            title: "grape",
            body: "is violet....",
        },
    ]);

    let content = null;
    let contextControl = null;

    if (mode === "WELCOME") {
        content = (
            <Article title="어서 오세요!" body="꿈의 과일 왕국~"></Article>
        );
    } else if (mode === "READ") {
        let title,
            body = null;
        for (let i = 0; i < fruits.length; i++) {
            console.log(id, typeof id);
            // 선택된 id와 같은 항목을 찾았으면
            if (fruits[i].id === id) {
                title = fruits[i].title;
                body = fruits[i].body;
                break;
            }
        }

        content = <Article title={title} body={body}></Article>;
        contextControl = (
            <li style={style}>
                <a
                    href={"/update/" + id}
                    onClick={(event) => {
                        event.preventDefault();
                        setMode("UPDATE");
                    }}
                    style={none}
                >
                    Update
                </a>
            </li>
        );
    } else if (mode === "CREATE") {
        // <Create />내부에서 submit 이벤트가 발생하면
        // 부모에서 전달한 함수인 onCreate에 title, body를 전달하여 호출한다.
        content = (
            <Create
                onCreate={(_title, _body) => {
                    // 새로운 항목을 fruits에 저장
                    const newFruit = { id: nextId, title: _title, body: _body };
                    // fruits.push(newFruit);
                    /* 
                    fruits의 내용을 바뀌었지만, 할당된 참조값은 바뀌지 않아서 기존과 동일한 참조값을 가진 fruit를 넣었으므로
                    React Hook이 변화를 감지하지 못함
                    =>그러므로 새로운 newFruits객체를 할당해서 fruits에 넣어야함
                    */
                    const newFruits = [...fruits]; // fruits를 복제해서 새로운 객체 생성
                    newFruits.push(newFruit); // 새로운 항목 추가
                    setFruits(newFruits); // 바뀐 객체를 전달 => Hook이벤트를 생성

                    setMode("READ");
                    setId(nextId);
                    setNextId(nextId + 1);
                }}
            />
        );
    } else if (mode === "UPDATE") {
        let title,
            body = null;
        for (let i = 0; i < fruits.length; i++) {
            title = fruits[i].title;
            body = fruits[i].body;
            break;
        }

        content = (
            <Update
                title={title}
                body={body}
                onUpdate={(title, body) => {
                    const newFruits = [...fruits];
                    const updateFruit = { id: id, title: title, body: body };
                    for (let i = 0; i < newFruits.length; i++) {
                        if (newFruits[i].id === id) {
                            newFruits[i] = updateFruit;
                            break;
                        }
                    }
                    setFruits(newFruits);
                }}
            />
        );
    }

    return (
        <div>
            <Header
                title="=과일왕국="
                onChangeMode={() => {
                    setMode("WELCOME");
                }}
            />
            <Nav
                fruits={fruits}
                onChangeMode={(id) => {
                    setMode("READ");
                    setId(id); // nav의 리스트중에 어떤 항목(id)이 선택되었는지 알 수 있음
                }}
            />
            {content}
            <ul>
                <li style={style}>
                    <a
                        href="/create"
                        onClick={(event) => {
                            event.preventDefault();
                            setMode("CREATE");
                        }}
                        style={none}
                    >
                        Create
                    </a>
                </li>
                {contextControl}
            </ul>
        </div>
    );
}
