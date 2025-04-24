import React, { Component } from 'react';

export class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increase = () => {
        this.setState({ count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <h1>Gia tri: {this.state.count}</h1>
                <button onClick={this.increase}>tang</button>
            </div>
        );
    }
}

export default counter;