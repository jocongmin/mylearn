var Redux=require('redux');
var rootReducer=require('../_action/action.js');
var createStore=Redux.createStore;
var store = createStore(rootReducer);  //存储到store里面
module.exports=store;

