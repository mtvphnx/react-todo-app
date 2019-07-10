import React, { Component } from 'react';

import './status-filter.css';

export default class StatusFilter extends Component {
    render() {
        return (
            <div className='btn-group'>
                <button type='button' className='btn btn-info'>Все</button>
                <button type='button' className='btn btn-outline-secondary'>Активные</button>
                <button type='button' className='btn btn-outline-secondary'>Выполненные</button>
            </div>
        )
    }
}