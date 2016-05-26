var React=require('react');
var ReactDOM=require('react-dom');
var Tanc=require('./Tanc.js');
var Mask=require('../comm/Mask.js');
var WordTip=require('./WordTip.js');
var store=require('../_store/store.js');
var Btn=React.createClass({
    tancShow:function(){
        ReactDOM.render(<Tanc/>,document.getElementById('d-tanc'));
        ReactDOM.render(<Mask/>,document.getElementById('d-mask'));
        store.dispatch({ type: 'showTanc' });
    },
    render: function() {
        return (
            <section id="buy-btn" className="buy-btn flex">
                <div className="add flex-item" onClick={this.tancShow}>
                    加入购物车
                </div>
                <div className="fast-buy flex-item" href="buy_car.html" onClick={this.tancShow}>
                    立即购买
                </div>
                <a href="buy_car.html">
                    <div className="car-num">
                        <em></em>
                        <i>1</i>
                    </div>
                </a>
            </section>
        );
    }
});
module.exports=Btn;




