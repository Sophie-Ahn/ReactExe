import { Routes, Route, NavLink } from "react-router-dom";

export default function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <NavLink to="/topics/1">굉장해!</NavLink>
                </li>
                <li>
                    <NavLink to="/topics/2">엄청나!</NavLink>
                </li>
                <li>
                    <NavLink to="/topics/3">굉장해! 엄청나!</NavLink>
                </li>
            </ul>
            <Routes>
                <Route
                    path="/1"
                    element={
                        <img src="https://media.bunjang.co.kr/product/221148536_3_1708130441_w360.jpg" />
                    }
                ></Route>
                <Route
                    path="/2"
                    element={
                        <img src="https://media.bunjang.co.kr/product/221148536_4_1708130441_w360.jpg" />
                    }
                ></Route>
                <Route
                    path="/3"
                    element={
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFwRGakHc6T_hTfOIfp749sQ7dUDW9i5vcP5aQAVxidVU8S_omOed4iz8DkZQ5uW8qKA&usqp=CAU" />
                    }
                ></Route>
            </Routes>
        </div>
    );
}
