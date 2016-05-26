var React =require('react');
var ReactDOM=require('react-dom');
var Lunbo=require('./index_jsx/Lunbo.js');
var Brand=require('./index_jsx/Brand.js');
var Banner=require('./index_jsx/Banner.js');
var List=require('./index_jsx/List.js');
var Nav=require('./comm/Nav.js');
var BackTop=require('./comm/BackTop.js');
var MoreLoad=require('./comm/MoreLoad.js');
ReactDOM.render(<Lunbo/>,document.getElementById('carousel'));
ReactDOM.render(<Brand/>,document.getElementById('index-brand'));
ReactDOM.render(<Banner/>,document.getElementById('index-banner'));
ReactDOM.render(<List/>,document.getElementById('index-pro-list'));
ReactDOM.render(<Nav/>,document.getElementById('nav-footer'));
ReactDOM.render(<BackTop/>,document.getElementById('back-top'));
ReactDOM.render(<MoreLoad/>,document.getElementById('i-more'));


