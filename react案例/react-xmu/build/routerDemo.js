import React from 'react';
import ReactDOM from 'react-dom';
import { render, findDOMNode } from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
import { createHistory, createHashHistory, useBasename } from 'history';

// 此处用于添加根路径
var history = useBasename(createHashHistory)({
  queryKey: '_key',
  basename: '/blog-app',
});
var BlogApp=React.createClass({
  render:function(){
    return(
      <div>sdlkfjskfdj</div>
      )
  }
});
var SignIn=React.createClass({
  render:function(){
    return(
      <div>signIn</div>
      )
  }
});
var SignOut=React.createClass({
  render:function(){
    return(
      <div>signOut</div>
      )
  }
});
var Archives=React.createClass({
  render:function(){
    return(
      <div>sdlkfjskfdj</div>
      )
  }
});
var About=React.createClass({
  render:function(){
    return(
      <div>sdlkfjskfdj</div>
      )
  }
});
var Original=React.createClass({
  render:function(){
    return(
      <div>sdlkfjskfdj</div>
      )
  }
});

var Reproduce=React.createClass({
  render:function(){
    return(
      <div>sdlkfjskfdj</div>
      )
  }
});
ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={BlogApp}></Route>
    <Route path="/a" component={SignIn}></Route>
    <Route path="/b" component={SignOut}></Route>
  </Router>
), document.getElementById('box'));