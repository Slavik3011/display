import React from 'react';

import './input.sass';

export default class Input extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { type, name, placeholder } = this.props;
        return <input className="input" type={type} name={name} value={this.state.value} placeholder={placeholder} onChange={this.handleChange}/>
    }
}