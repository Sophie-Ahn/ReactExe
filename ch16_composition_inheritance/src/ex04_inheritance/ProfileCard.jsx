import Card from "./Card";

export default function ProfileCard(props) {
    return (
        <>
            <Card title="원더랜드" backgroundColor="#f4a093">
                <p>안녕하세요!</p>
                <p>굉장해! 엄청나 입니다!</p>
            </Card>
            <Card title="트럼프카드" backgroundColor="#f0edb4">
                <p>트럼프 카드를 쓰는 방법</p>
                <p>일단 트럼프카드를 산다 (약 17,000원)</p>
                <p>아래 그림처럼 행동을 취하고 다음을 말한다.</p>
                <h1
                    style={{
                        color: "#06811a",
                        fontWeight: "bold",
                        fontSize: "60px",
                    }}
                >
                    굉장해 엄청나!!!
                </h1>
                <img
                    src="https://media.bunjang.co.kr/product/221148536_3_1708130441_w360.jpg"
                    alt="굉장해 엄청나"
                />
            </Card>
        </>
    );
}
