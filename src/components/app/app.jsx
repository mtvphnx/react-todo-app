import React from 'react';

import Header from '../header';
import TodoList from '../todo-list';
import Search from '../search';
import StatusFilter from '../status-filter';

import './app.css';

const App = () => {
    const todoData = [
        { label: 'Выучить javascript', important: false, id: 1 },
        { label: 'Выучить react', important: true, id: 2 },
        { label: 'Выучить node', important: false, id: 3 },
        { label: 'Слетать в космос', important: false, id: 4 },
        { label: 'Захватить весь мир!', important: true, id: 5 }
    ];

    return (
        <div className='app'>
            <Header toDo={1} done={3} />

            <div className='panel d-flex'>
                <Search/>
                <StatusFilter/>
            </div>

            <TodoList data={ todoData }
            onDeleted={ (id) => console.log(id) } />
        </div>
    )
};

export default App;