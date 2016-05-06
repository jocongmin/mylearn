var React=require('./js/react.js');
class Test extends React.Component{
	constructor(tbc) {
	  super(tbc); //这里必须要写入这个，这是es6的语法糖
	  let self=this;
	  this.state = {  //state在这里写才有效，测试发现在getInitialState写无效,具体再看
	  	tname:"dslfkjsdfkj"
	  };
	  this.props={
	  	name:'sdfjskjfksdj'
	  };
	  this.getInitialState();
	  this.getDefaultProps();
	  this.render();
	};
	getDefaultProps(){
		return{
			name:'dsflkjsdkfjsd'
		}
	};
	getInitialState(){
		return{
			time:'sdfkljsdkfj'
		}
	};
	tclick(){
		console.log(this.getDefaultProps());
	};
	render(){
		return(
			<div onClick={this.tclick} data-abm={this.state.time}>dsfskdjfskdjf</div>
			)
	}
}
var test=new Test();
React.render(<Test/>,document.querySelector('.box'));
var TestTwo=React.createClass({
	getInitialState:function(){
		return{
			tone:'sdlkfjskdljfjsd',
			check:false
		}
	},
	getDefaultProps:function(){
		return{
			ttwo:'sdlfkjsdlkfj'
		}
	},
	componentDidMount:function(){
		var el=this.refs.test2.getDOMNode();
		el.style.color='red';
	},
	oclick:function(){
		this.setState.tone='6546545465';
		console.log(this.state.tone);
		console.log(this.props.dataTt)
	},
	checkOn:function(){
		if(this.state.check==true){
			this.setState({check:false}); //setState可以用来设置state的值，相应的view也会自动刷新
		}else{
			this.setState({check:true});
		}
		console.log(this.state.check);
	},
	shouldComponentUpdate:function(){
		return true;
	},
	render:function(){
		return(
			<div ref='test2' data-tt={this.state.tone} onClick={this.oclick} id={this.props.ttwo}>
				<input onClick={this.checkOn} data-check={this.state.check} checked={this.state.check} type='checkbox'/>
			</div>
			)
	}
});
React.render(<TestTwo/>,document.querySelector('.box2'))




