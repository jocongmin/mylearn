var React=require('react');
var ReactDOM=require('react-dom');
var Aside=require('./Aside.js');
var Mask=require('../comm/Mask.js');
var store=require('../_store/store.js');
require('../../scss/list_nav_list.scss');
var NavList=React.createClass({
    getInitialState:function(){
        return{
            test:'none'
        }
    },
    asideShow:function(){
        ReactDOM.render(<Aside/>,document.getElementById('l-aside'));
        ReactDOM.render(<Mask/>,document.getElementById('l-mask'));
        store.dispatch({type:'showAside'})
    },
    render: function() {
        var style={color:'red',fontWeight:'bold'}
        return (
            <div ref='nav' id="list-nav-list" className="nav clearfix" style={style}>
                <ul className="clearfix">
                    <li className="first">
                        <span className="on" onClick={this.asideShow}>筛选</span>
                    </li>
                    <div className="scroll">
                        <div className="box clearfix">
                            <li>
                                <span className="">全部</span>
                            </li>
                            <li>
                                <span className="">打底</span>
                            </li>
                            <li>
                                <span className="">面膜</span>
                            </li>
                            <li>
                                <span className="">美笔</span>
                            </li>
                            <li>
                                <span className="on">美笔</span>
                            </li>
                            <li>
                                <span className="">面膜</span>
                            </li>
                            <li>
                                <span className="">美笔</span>
                            </li>
                            <li>
                                <span className="">美笔</span>
                            </li>
                            <li>
                                <span className="">美笔</span>
                            </li>
                            <li>
                                <span className="">筛选</span>
                            </li>
                            <li>
                                <span className="">筛选</span>
                            </li>
                            <li>
                                <span className="">筛选</span>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
});
module.exports=NavList;


