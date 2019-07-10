import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search';

const App = () => {
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));