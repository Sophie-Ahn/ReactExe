import './App.css';
import React from 'react';

/*
jsx = js + xml
1) 자바스크립트의 확장 문법
2) js컴포넌트를 html태그 선언처럼 쉽게 만들 수 있도록 제공하는 문법
3) jsx -> React.createElement로 변환되어 컴포넌트가 된다.
4) 반드시 return 될 때 1개의 태그로 묶여서 반환되어야 한다.
*/

function App() {
    // return (
    //     <h1>
    //         hello react
    //     </h1>
    // );
    // return (
    //     <h1>리액트 안녕</h1>
    //     <h2>잘 동작하니?</h2>
    // )
    // return (
    //     <>
    //         <h1>리액트 안녕</h1>
    //         <h2>잘 동작하니?</h2>
    //     </>
    // )
    return (
        <React.Fragment>
            <h1>리액트 안녕</h1>
            <h2>잘 동작하니?</h2>
        </React.Fragment>
    )
}

export default App;
