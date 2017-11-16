import React from 'react';

import './formTextarea.sass';

export default class Textarea extends React.Component {
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
        let { name, placeholder } = this.props;
        return  <textarea name={name}
                          className="form-textarea"
                          placeholder={placeholder}
                          onChange={this.handleChange} />

    }
}