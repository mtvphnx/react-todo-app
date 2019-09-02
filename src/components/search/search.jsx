import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {
    state = {
        term: ''
    };

    onSearchChange = e => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    }
}
