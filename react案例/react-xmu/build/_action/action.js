var Redux = require('redux');
var reducers = {
    list_action: function(state = 0, action) { 
        if (action.type == 'closeTanc') {
            return 'none';
        }
        if (action.type == 'showTanc') {
            return 'block';
        }
        if (action.type == 'hideAside') {
            return 'none';
        }
        if (action.type == 'showAside') {
            return 'block';
        }
        if (action.type == 'loadMore') {
            return action.page;
        }
        if(action.type=='stopLoad'){
          return 10000;
        }else{
          return 0;
        }
    },
}
var rootReducer = Redux.combineReducers(reducers);
module.exports = rootReducer;
