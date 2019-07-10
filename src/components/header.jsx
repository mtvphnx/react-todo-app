import React from "react";

import './header.css';

const Header = ({toDo, done}) => {
    return (
        <div className="header d-flex">
            <h1>Мой список дел</h1>
            <h2>Осталось {toDo} из {done}</h2>
        </div>
    )
};

export default Header;