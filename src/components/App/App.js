// import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../../Content/Content';
import Footer from '../../Footer/Footer';
import Two from '../../Two';
import { Component } from 'react';

function App() {
        return (
          <div id="container">
            <Header></Header>
            {/* this is content area */}
            <Content></Content>
            {/* footer content */}
            <Footer></Footer>
          </div>
        );
      }
export default App;
