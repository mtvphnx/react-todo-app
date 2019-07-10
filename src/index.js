import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import TodoList from './components/todo-list';
import Search from './components/search';
import StatusFilter from './components/status-filter';

import './index.css';

const App = () => {
    const todoData = [
        { label: 'Выучить javascript', important: false, id: 1 },
        { label: 'Выучить react', important: true, id: 2 },
        { label: 'Выучить node', important: false, id: 3 }
    ];

    return (
        <div className='app'>
            <Header toDo={1} done={3} />

            <div className='panel d-flex'>
                <Search/>
                <StatusFilter/>
            </div>

            <TodoList data={ todoData }/>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));