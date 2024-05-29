import FancyBorder from "./FancyBorder";

export default function WelcomDesc(props) {
    return (
        <FancyBorder color="red">
            {/* 아래 부분이 FancyBorder의 children으로 구성된다. */}
            <h1 className="Dialog-title">굉장해~!</h1>
            <p className="Dialog-message">엄청나!!</p>
            <p className="Dialog-description">엄청난것!!</p>
        </FancyBorder>
    );
}
