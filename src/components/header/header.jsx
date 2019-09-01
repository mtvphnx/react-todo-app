import React from "react";

import './header.css';

const Header = ({toDo, done}) => {
    return (
        <div className="header d-flex">
            <h1>Мой список дел</h1>
            <h2>Выполнено: {done}, осталось: {toDo}</h2>
        </div>
    )
};

export default Header;