import React, { Component } from 'react';
import Sound from 'react-sound';
import logo from './logo.svg';
import './App.css';

var Hello = React.createClass({
  render: function() {
    return <div><h1 className="helloWorld">Hello, haters!</h1>
    <p>Hi!  My name is Davis.  I was born and raised just outside of Philadelphia and lived there until 2014, when I moved to Oakland,CA.</p></div>;
      }
});


export default Hello;
