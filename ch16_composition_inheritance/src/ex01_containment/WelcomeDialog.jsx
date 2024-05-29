import FancyBorder from "./FancyBorder";

/*
Containment(포함)
해당 컴포넌트의 children속성을 이용해서
여러가지 다양한 구성을 포함시킬 수 있다.
*/

export default function WelcomeDialog(props) {
    return (
        <FancyBorder color="blue">
            {/* 아래 부분이 FancyBorder의 children으로 구성된다. */}
            <h1 className="Dialog-title">어서오세요~!</h1>
            <p className="Dialog-message">굉장해! 엄청나입니다!</p>
        </FancyBorder>
    );
}
