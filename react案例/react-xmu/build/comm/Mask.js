var React=require('react');
var store=require('../_store/store.js');
var watch=require('../_watch/watch.js');
var Mask=React.createClass({
    componentWillMount:function(){

    },
    componentDidMount:function(){
        watch(this);
    },
    hideAside:function(){
    	store.dispatch({ type: 'hideAside' });
    },
	render: function() {
		return (
			<div className="mask" id="mask" onClick={this.hideAside} style={{display:store.getState().list_action}}></div>
		);
	}
});
module.exports=Mask;

