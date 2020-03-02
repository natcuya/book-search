import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className='pages_filter'>
                Print Type:
                <select 
                    id='print_type'
                    name='print_type'
                    onChange={e => this.props.updatePrintType(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Book'>Book</option>
                </select>
                Book Type:
                <select
                    id='book_type'
                    name='book_type'
                    onChange={e => this.props.updateBookType(e.target.value)}
                    >
                    <option value='None'>None</option>
                    <option value='eBook'>eBook</option>
                </select>
            </div>
        );
    }
};

export default Filter;