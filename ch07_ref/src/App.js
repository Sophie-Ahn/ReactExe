import React, { Component } from 'react';
// import ValidationSample from './ex02_validation/ValidationSample';
// import ValidationSample2 from './ex03_validation_ref/ValidationSample';
// import ValidationSample3 from './ex04_validation_createRef/ValidationSample';
import Scroll from './ex05_component_ref/ScrollBox';

// function App() {
//     return (
//         <>
//             <ValidationSample />
//             <ValidationSample2 />
//             <ValidationSample3 />
//         </>
//     )
// }

class App extends Component {
    render() {
        return (
            <div>
                <Scroll />
            </div>
        )
    }
}

export default App;
