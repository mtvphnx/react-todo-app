import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Выучить javascript</li>
            <li>Выучить react</li>
        </ul>
    )
};

const AppHeader = () => {
    return (
        <h1>Мой список дел</h1>
    )
};

const SearchPanel = () => {
    return (
        <input type="text" placeholder="Поиск" />
    )
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
};


ReactDOM.render(<App/>, document.querySelector('#root'));