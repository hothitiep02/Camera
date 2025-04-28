import React, { Component } from 'react';

class ShowCard_map extends Component {
    message = () => {
        alert("Thank you for your order!");
      };
    
      render() {
        const { name, img, price, sale } = this.props;
    
        return (
          <div className="product" style={{ display: "inline-block" }}>
            <div className="text">
              <div className="p-img">
                <img src={img} alt={name} width={150} height={150} />
                <div className="p-name">{name}</div>
              </div>
    
              {/* Hiển thị giá (nếu có giảm giá thì gạch giá cũ và hiện giá mới) */}
              <div className="price">
                {sale ? (
                  <>
                    <strike>{price}</strike> {sale}
                  </>
                ) : (
                  <>{price}</>
                )}
              </div>
    
              <div>
                <button onClick={this.message}>Order</button>
              </div>
            </div>
          </div>
        );
      }
    }
    

export default ShowCard_map;