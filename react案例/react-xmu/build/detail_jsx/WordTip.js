var React=require('react');
var store=require('../_store/store.js');
var WordTip=React.createClass({
	getInitialState:function(){
		var t=store.getState();
		return{
			show:'block',
		}
	},
	componentDidMount:function(){
		var that=this;
		store.subscribe(             //更新监听
		  function(){
		    var s=store.getState();
		    that.setState({show:s});
		  }
		);
	},
    render: function() {
    	var t=store.getState();
        return (
           <div className="word-tip" style={{display:this.state.show}}></div>
        );
    }
});
module.exports=WordTip;





