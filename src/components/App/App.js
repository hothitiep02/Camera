// import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../../Content/Content';
import Footer from '../../Footer/Footer';
import GetData from '../GetData';

function App() {
        return (
          <div id="container">
            <Header></Header>
            {/* this is content area */}
            <Content></Content>
            <GetData></GetData>
            {/* footer content */}
            <Footer></Footer>
           
          </div>
        );
      }
export default App;
