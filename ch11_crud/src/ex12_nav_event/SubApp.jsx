// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용한다.
function Header(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault(); // 원래 <a>의 기능을 막는다.
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
    // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
    const lis = [];
    for (let i = 0; i < props.fruits.length; i++) {
        let t = props.fruits[i]; // 부모로부터 전달된 객체를 1개씩 추출
        // onChangeMode에 어떤 list가 호출되었는지 전달하기 위해서, '사용자 정의 속성'인 id를 저장한다.
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    name={t.title}
                    href={"/read/" + t.id}
                    onClick={(event) => {
                        event.preventDefault(); // <a></a>태그의 기본 동작 막기
                        props.onChangeMode(event.target.id, event.target.name); // props내의 onChangeMode에 전달된 id
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
            <h3>{props.body}</h3>
        </article>
    );
}

export default function SubApp() {
    const fruits = [
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
    ];
    return (
        <div>
            {/* onChangeMode는 원래 html 요소의 이벤트가 아니라 '사용자 정의 이벤트'이다 */}
            <Header
                title="REACT"
                onChangeMode={() => {
                    alert("Header");
                }}
            ></Header>
            {/* Nav내의 list들중에 누가 이벤트를 전달했는 가를 구분하기 위해 id를 매개변수로 받는다. */}
            <Nav
                fruits={fruits}
                onChangeMode={(id, name) => {
                    alert(id + " " + name);
                }}
            ></Nav>
            <Article title="Welcome" body="everyOne!"></Article>
            <Article title="How are you!" body="I'm fine Thanks!"></Article>
        </div>
    );
}
