import React from "react";

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '15px'
    };

    return (
        <input type="text" style={ searchStyle } placeholder="Поиск" />
    )
};

export default SearchPanel;