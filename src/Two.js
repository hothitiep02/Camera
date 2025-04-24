// var Two = function () {
//     return (<div>
//         <h1>こんにちは</h1>
//         </div>);
//   };

  // //Dinh nghia component dung ham don gian 
  // function One () {
  //   return {
      
  //   }
  // }
  // //Dinh nghia component bang khai bao ten ham
  // var Two = function () {
  //   return (<div>
  //       <h1>こんにちは</h1>
  //       </div>);
  // };
  // //Dinh nghia component bang khai bao arrow function
  // var Three = () => (
  //   <div></div>
  // ); 

// function One() {
//   return <div>Chao ban</div>
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }
  // //Dinh nghia component bang Class
//   class Four extends Component {
//     render(){
//       return (
//         <div>
//           <button>Day la vi du Class</button>
//         </div>
//       );
//     }
//   }
function Two(props) {
  return (
    <div>
       <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img src={props.linkanh} height="200px" width="200px" class="img"></img>
        <p>san pham</p>
        <p>gia san pham</p>
       </div>
    </div>
  )
}
  export default Two;
