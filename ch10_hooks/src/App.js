import Counter from './ex01_useState/Counter';
import NameInfo from './ex02_useState/NameInfo';
import NameInfo2 from './ex03_useEffect/NameInfo';
import Info from './ex04_useEffect/Info';
import Info2 from './ex05_useEffect/Info';
import Info3 from './ex06_useEffect/Info';
import Info4 from './ex07_useEffect/Info';
import ParentInfo from './ex08_useEffect/ParentInfo';
import Counter1 from './ex09_useReducer/Counter';
import Info5 from './ex10_useReducer/Info';
import Average from './ex11_useMemo/Average';
import Average2 from './ex12_useMemo/Average';
import Average3 from './ex13_useCallback/Average';
import Average4 from './ex14_useRef/Average';
import MyComponent from './ex15_useRef/MyComponent';
import Sample from './ex15_useRef/RefSample';
import CustomInfo from './ex16_useCustomHook/Info';
import CustomSpec from './ex16_useCustomHook/Spec';

function App() {
    return (
        <>
            <Counter />
            <NameInfo />
            <NameInfo2 />
            <Info />
            <Info2 />
            <Info3 />
            <Info4 />
            <ParentInfo />
            <Counter1 />
            <Info5 />
            <Average />
            <Average2 />
            <Average3 />
            <Average4 />
            <MyComponent />
            <Sample />
            <CustomInfo />
            <CustomSpec />
        </>
    )
}

export default App;
