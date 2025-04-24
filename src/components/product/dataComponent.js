// import React, { Component } from 'react';
// import { fetchData } from '../Content/data';

// class dataComponent extends Component {
//     constructor(props) {
//         super(props); // phải gọi trước
//         const arr = fetchData();
//         this.state = {
//             arr: arr
//         };
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.arr.map((item, index) => (
//                     <div key={index}>
//                         <h2>{item.name}</h2>
//                         <img src={item.image} alt={item.name} width="150" />
//                         <h3>Loại: {item.loai}</h3>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default dataComponent;