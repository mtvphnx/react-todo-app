import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

const TodoList = () => {
    return (
        <ul>
            <li>Выучить javascript</li>
            <li>Выучить react</li>
        </ul>
    );
}

const AppHeader = () => {
    return (
        <h1>Мое Todo приложение</h1>
    )
}

const SearchPanel = () => {
    return (
        <input placeholder="Поиск" />
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));