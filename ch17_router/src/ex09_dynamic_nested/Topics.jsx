import { Routes, Route, NavLink } from "react-router-dom";

import Topic from "./Topic";

const contents = [
    {
        id: 1,
        title: "굉장해!",
        description: (
            <img
                src="https://media.bunjang.co.kr/product/221148536_3_1708130441_w360.jpg"
                alt="굉장해"
            />
        ),
    },
    {
        id: 2,
        title: "엄청나!",
        description: (
            <img
                src="https://media.bunjang.co.kr/product/221148536_4_1708130441_w360.jpg"
                alt="엄청나!"
            />
        ),
    },
    {
        id: 3,
        title: "굉장해! 엄청나!",
        description: (
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFwRGakHc6T_hTfOIfp749sQ7dUDW9i5vcP5aQAVxidVU8S_omOed4iz8DkZQ5uW8qKA&usqp=CAU"
                alt="굉장해! 엄청나!"
            />
        ),
    },
];

export default function Topics() {
    let lis = [];
    for (let i = 0; i < contents.length; i++) {
        lis.push(
            <li key={contents[i].id}>
                <NavLink to={"/topics/" + contents[i].id}>
                    {contents[i].title}
                </NavLink>
            </li>
        );
    }

    return (
        <div>
            <h2>Topics</h2>
            <ul>{lis}</ul>
            <Routes>
                {/* topic_id라는 이름으로 <Topic/>에서 ㅓ내어 쓸 수 있도록 하겠다. */}
                <Route
                    path="/:topics_id"
                    element={<Topic contents={contents} />}
                ></Route>
            </Routes>
        </div>
    );
}
