// 부모가 자식 컴포넌트에 값을 전달할 때는 props를 사용한다.
function Header(props) {
    return (
        <header>
            <h1>
                <a href="/">{props.title}</a>
            </h1>
        </header>
    );
}

function Nav(props) {
    // props로부터 받은 데이터를 <li></li>로 만들어서 lis에 저장
    const lis = [];
    for (let i = 0; i < props.fruits.length; i++) {
        let t = props.fruits[i]; // 부모로부터 전달된 객체를 1개씩 추출
        lis.push(
            <li key={t.id}>
                <a href={"/read/" + t.id}>{t.title}</a>
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
            <Header title="REACT"></Header>
            <Nav fruits={fruits}></Nav>
            <Article title="Welcome" body="everyOne!"></Article>
            <Article title="How are you!" body="I'm fine Thanks!"></Article>
        </div>
    );
}
