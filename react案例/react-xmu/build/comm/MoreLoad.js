var React=require('react');
var ReactDOM=require('react-dom');
var ProList=require('../list_jsx/ProList.js');
var watch=require('../_watch/watch.js')
var MoreLoad=React.createClass({
	componentDidMount:function(){
	},
	render: function() {
		return (
			<div className="more" onClick={this.props.loadmore}>
	            正在加载更多...
	        </div>
		);
	}
});
module.exports=MoreLoad;


