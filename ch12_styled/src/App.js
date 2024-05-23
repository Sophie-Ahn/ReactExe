import Button from './ex01_non_styled/ReactButton'
import StyledButton from './ex02_styled/StyledButton';
// import SimpleButton from './ex03_styled/SimpleButton';
import SimpleButton from './ex04_styled/SimpleButton';
import LargeButton from './ex05_styled/LargeButton';
// import PrimaryButton from './ex06_styled/PrimaryButton';
// import PrimaryButton from './ex07_styled/PrimaryButton';
import PrimaryButton from './ex08_styled/PrimaryButton';
import SecondButton from './ex09_styled/SecondButton';
// import Blocks from './ex10_styled/Blocks';
// import Blocks from './ex11_styled/Blocks';
import Blocks from './ex12_styled/Blocks';

const blockItems = [
    {
        label: "굉장해 엄청나!",
        padding: "8rem",
        background: "url(https://cdn2.colley.kr/item_226179_1_2_title_2.jpeg)no-repeat center/contain",
    },
    {
        label: "굉장해.. 엄청나!",
        padding: "10rem",
        background: "url(https://i.namu.wiki/i/2ycvuiQFgYXvybGs0H4hjbp4Y5d8cMNbi9IOoK1iTGcvmnMyYi8pjeKf99fZGMKz2JhNoGGUJHux62h2-rAn9A.webp)no-repeat center/contain"
    },
    {
        label: "굉장해! 엄청나!",
        padding: "12rem",
        background: "url(https://media.bunjang.co.kr/product/221148536_3_1708130441_w360.jpg)no-repeat center/contain"
    },
];
function App() {
    return (
        <>
            {/* <Button>안녕하세요!</Button>
            <StyledButton>안녕하세요</StyledButton>
            <SimpleButton>굉장해 엄청나!</SimpleButton>
            <LargeButton>굉장해! 엄청나!</LargeButton>
            <PrimaryButton primary>굉장해!</PrimaryButton>
            <PrimaryButton>엄청나!</PrimaryButton>
            <SecondButton>(소근소근)굉장해..엄청나..</SecondButton>
            <SecondButton primary>(소근소근)굉장해..엄청나..</SecondButton>
            <Blocks />
            <Blocks flexStart row />
            <Blocks flexEnd row />
            <Blocks center row /> */}
            <Blocks items={blockItems} row center alignCenter />
        </>
    );
}

export default App;
