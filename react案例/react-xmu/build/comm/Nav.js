require('../../scss/_nav.scss');
var React=require('react');
var Nav=React.createClass({
	render: function() {
		return (
			<ul>
	            <li className="index">
	                <a href="index.html"><em className=""></em>
	                <br/> 主页</a>
	            </li>
	            <li className="ident">
	                <a href="list.html">
	                    <em className="on"></em>
	                    <br/> 分类</a>
	            </li>
	            <li className="buycar">
	                <a href="buy_car.html">
	                    <em><i>2</i></em>
	                    <br/> 购物车</a>
	            </li>
	            <li className="me">
	                <a href="personal.html">
	                    <em></em>
	                    <br/> 我的</a>
	            </li>
	        </ul>
		);
	}
});
module.exports=Nav;