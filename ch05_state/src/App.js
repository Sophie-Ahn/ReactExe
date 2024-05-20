import Counter from './ex01_class_state/Counter';
import Counter2 from './ex02_class_multistate/Counter';
import Counter3 from './ex03_class_continuous_call/Counter';
import Counter4 from './ex04_class_continuois_call/Counter';
import Counter5 from './ex05_class_later_state/Counter';
import Say from './ex06_function_state/Stay';
import Say1 from './ex07_function_multistate/Stay';

function App() {
    return (
        <>
            <Counter />
            <Counter2 />
            <Counter3 />
            <Counter4 />
            <Counter5 />
            <Say />
            <Say1 />
        </>
    );
}

export default App;
