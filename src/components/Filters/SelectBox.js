import React, { Component } from 'react'

class SelectBox extends Component {
    render() {
        const { value, options, onChange } = this.props;
        
        return (
            <div>
                <h2>ВАЛЮТА</h2>
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    {
                        options.map(option =>
                            <option value={option} key={option}>
                                {option}
                            </option>
                        )
                    }
                </select>
            </div>
        )
    }
}

export default SelectBox;