var React=require('react');
var store=require('../_store/store.js');
var watch=require('../_watch/watch.js');
var Tanc=React.createClass({
    componentDidMount:function(){
        watch(this);
    },
    closeTanc:function(){
           store.dispatch({ type: 'closeTanc' });
    },
    render: function() {
        return (
            <section id="tc-choice" className="tc-choice" style={{display:store.getState()}}>
                <div className="pro flex">
                    <div className="pic">
                        <img src="img/d-tc-pro.png"/>
                    </div>
                    <div className="info flex-item">
                        <h3>美肌系列</h3>
                        <span>￥128</span>
                    </div>
                </div>
                <div className="special">
                    <div className="tit">规格</div>
                    <div className="spe">
                        <span className="on">200ml</span>
                        <span>200ml</span>
                        <span>200ml</span>
                    </div>
                </div>
                <div className="b-num flex">
                    <div className="tit flex-item">
                        购买数量
                    </div>
                    <div className="numc flex-item">
                        <em className="emless">-</em>
                        <input value="2" type="text"/>
                        <em className="emmore on">+</em>
                    </div>
                </div>
                <a href="change_seller.html">
                    <div className="sure">
                        确定
                    </div>
                </a>
                <div className="close" onClick={this.closeTanc}></div>
            </section>
        );
    }
});
module.exports=Tanc;



