import React, { Component } from 'react';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: 'Nguyen A',
                email: 'tiep@gmail'
            }
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.fields.name}</h1>
                <h1>{this.state.fields.email}</h1>
            </div>
        );
    }
}

export default Member;
