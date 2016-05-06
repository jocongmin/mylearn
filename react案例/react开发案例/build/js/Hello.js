var React = require('./react.js');
var $=require('./jquery.min.js');
var MyComponent = React.createClass({
getInitialState: function() {
    return {
        zt:true
    }
},
aclick:function(){
	this.state.zt=false;
	var t=this.state.zt;
	if(t==false){
		var helloComp=this.refs.hello.getDOMNode();
		$(helloComp).addClass('two');
		$('.boxChild').addClass('two');
		var Duixian=require('./comp2.js');
		React.render(<Duixian/>,document.querySelector('.box2'));
	}
},
render: function() {
    return ( < div ref='hello' onClick={this.aclick} id='hello' className='one'> sdlkfjfsdj < /div>);
    }
}); 
module.exports = MyComponent;
