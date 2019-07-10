import React from 'react';

import './status-filter.css'

const StatusFilter = () => {
    return (
        <div className='btn-group'>
            <button type='button' className='btn btn-info'>Все</button>
            <button type='button' className='btn btn-outline-secondary'>Активные</button>
            <button type='button' className='btn btn-outline-secondary'>Выполненные</button>
        </div>
    )
};

export default StatusFilter;