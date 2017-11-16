import React from 'react';

import './formInput.sass';

export default class FormInput extends React.Component {
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
        let { type, placeholder, name } = this.props;
        return (
            <input type={type}
                   value={this.state.value}
                   onChange={this.handleChange}
                   placeholder={placeholder}
                   className="form-input"
                   name={name} />
        )
    }
}

FormInput.defaultProps = {
    type: 'text'
}