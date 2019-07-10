import React from "react";

import TodoItem from './todo-item'

const TodoList = () => {
    return (
        <ul className='list'>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
        </ul>
    )
};

export default TodoList;