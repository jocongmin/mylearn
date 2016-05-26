var React =require('react');
var ReactDOM=require('react-dom');
var Redux=require('redux');
var Header=require('./detail_jsx/Header.js');
var Center=require('./detail_jsx/Center.js');
var Btn=require('./detail_jsx/Btn.js');

ReactDOM.render(<Header/>,document.getElementById('d-header'));
ReactDOM.render(<Center/>,document.getElementById('d-center'));
ReactDOM.render(<Btn/>,document.getElementById('d-btn'));



