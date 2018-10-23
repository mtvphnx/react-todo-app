import React from 'react'
import { render } from 'react-dom';

function App() {
    return (
        <h1>Привет React!</h1>
    )
};

render(<App />, document.querySelector('#root'));