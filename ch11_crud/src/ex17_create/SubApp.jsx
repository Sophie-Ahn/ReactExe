import { useState } from "react";

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
        <article>
            <h2>{props.title}</h2>
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

    if (mode === "WELCOME") {
        content = (
            <Article
                title="이쥬히가 꾸는 꿈은 무엇일까"
                body="꿈의 과일 왕국~"
            ></Article>
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
    }

    return (
        <div>
            <Header
                title="이쥬히 잠 깨는 방법"
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
            <a
                href="/create"
                onClick={(event) => {
                    event.preventDefault();
                    setMode("CREATE");
                }}
            >
                알아보기
            </a>
        </div>
    );
}
