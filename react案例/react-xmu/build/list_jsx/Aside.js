var React=require('react');
var store=require('../_store/store.js');
var watch=require('../_watch/watch.js');
require('../../scss/list_aside.scss');
var Aside=React.createClass({
    componentDidMount:function(){
        watch(this);
    },
    render: function() {
        return (
            <aside id="list-aside" className='' style={{display:store.getState().list_action}}>
                <div id='l-aside'>
                    <div className="change-brand clearfix">
                        <h3>选择品牌</h3>
                        <ul>
                            <li className="on">全部</li>
                            <li>韩非诗</li>
                            <li>韩非诗</li>
                            <li>韩非诗</li>
                            <li>云朵</li>
                            <li>云朵</li>
                        </ul>
                    </div>
                    <div className="list-way">
                        <h3>排序方式</h3>
                        <div className="ls-type">
                            <ul>
                                <li className="on">销量从高到低</li>
                                <li>价格从低到高</li>
                                <li>销量从高到低</li>
                                <li>评价从高到低</li>
                            </ul>
                            <div className="btn">
                                <span>确定</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
});
module.exports=Aside;


