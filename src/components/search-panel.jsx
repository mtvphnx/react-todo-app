import React from 'react';

const SearchPanel = () => {
    const searchText = 'Поиск';

    return (
        <input 
        placeholder={ searchText } 
        className='search__input'/>
    )
}

export default SearchPanel;