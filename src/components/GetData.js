import React, { Component } from 'react';
import {fetchData} from '../Content/data';

class getData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          arr: fetchData()
        };
      }
    
      render() {
        return (
          <div>
            {this.state.arr.map((key, index) => (
              <div key={index}>
                <h2>{key.name}</h2>
                <h3>Loại: {key.loai}</h3>
              </div>
            ))}
          </div>
        );
      }
    }

export default getData;




