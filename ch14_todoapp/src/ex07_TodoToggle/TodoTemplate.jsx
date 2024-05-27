import "./TodoTemplate.scss";

export default function TodoTemplate({ children }) {
    return (
        <div className="TodoTemplate">
            <div className="app-title">굉장히 엄청난 일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
}
