import React, { Component } from 'react';
import RightContent from './RightContent';
import LeftContent from './LeftContent';
class Content extends Component {
    render() {
        return (
            <div id="content">
              <LeftContent></LeftContent>
              <RightContent></RightContent>
              </div>
        );
    }
}

export default Content;