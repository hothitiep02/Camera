// import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../../Content/Content';
import Footer from '../../Footer/Footer';
import GetData from '../GetData';
import Input from '../../Content/Input';
import GradeForm from '../../Content/GradeForm';
import MenuWithPayment from '../../Content/MenuWithPayment';
function App() {
        return (
          <div id="container">
            <Header></Header>
            {/* this is content area */}
            {/* <Content></Content>
            <GetData></GetData>
            <Input></Input> */}
            {/* <GradeForm></GradeForm> */}
            <MenuWithPayment></MenuWithPayment>
            {/* footer content */}
            <Footer></Footer>
         
          </div>
        );
      }
export default App;
