import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {

    const todoDate = [
        { label: 'Изучить javascript', important: true },
        { label: 'Изучить react', important: false },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoDate} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));