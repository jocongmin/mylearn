var React=require('react');
var Header=React.createClass({
    render: function() {
        return (
            <div className="detail-header" id="detail-header">
                <div className="top-bar" id="top-bar">
                    <a href="javascript:history.go(-1)"><em className="bk"></em></a>
                    <span className="tit">提交订单</span>
                    <a href="index.html"><em className="hm"></em></a>
                    <em className="sr unsee"></em>
                </div>
                <section id="d-banner" className="banner">
                    <div className="box">
                        <img src="img/d-banner.png"/>
                    </div>
                </section>
                <div className="details">
                    <section className="pri-item flex">
                        <div className="pri flex-item">￥128</div>
                        <div className="had-buy-num flex-item">
                            1359人购买过
                        </div>
                    </section>
                    <section className="tit">
                        美肌系列
                    </section>
                    <section className="info">
                        <span>包邮</span>全场满100元享包邮
                    </section>
                    <section className="save">
                        <i></i>
                        <em></em>
                        <span>收藏</span>
                    </section>
                </div>
            </div>
        );
    }
});
module.exports=Header;


