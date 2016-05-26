var React=require('react');
var Banner=React.createClass({
	render: function() {
		return (
			<div id='i-banner'>
				<div className="box">
	                <a href="list.html">
	                    <img src="img/index-banner.png" />
	                </a>
	            </div>
	            <div className="box">
	                <a href="list.html">
	                    <img src="img/index-banner.png" />
	                </a>
	            </div>
	            <div className="box">
	                <a href="list.html">
	                    <img src="img/index-banner.png" />
	                </a>
	            </div>
            </div>
		);
	}
});
module.exports=Banner;