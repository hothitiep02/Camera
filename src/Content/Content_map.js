import React, { Component } from 'react';
import ShowCard_map from "./ShowCard_map";
import { getData } from './data';

class Content_map extends Component {
    render() {
        const products = getData();
    
        const renderProducts = (type, title) => (
          <div id={type}>
            <h2>{title}</h2>
            <hr />
            {products
              .filter(product => product.type === type)
              .map((product, index) => (
                <ShowCard_map
                  key={index}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  sale={product.sale}
                />
              ))}
          </div>
        );
    
        return (
          <div>
            {renderProducts("giay", "SHOES")}
            {renderProducts("tui", "BAGS")}
          </div>
        );
      }
    }
    
export default Content_map;