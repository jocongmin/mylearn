var React=require('react');
var Center=React.createClass({
    render: function() {
        return (
            <div className="detail-center" id="detail-center">
                <section className="authority">
                    <ul className="flex">
                        <li className="zp flex-item"><em></em>正品保证</li>
                        <li className="th flex-item"><em></em>60天退货</li>
                        <li className="gf flex-item"><em></em>官方授权</li>
                        <li className="fh flex-item"><em></em>闪电发货</li>
                    </ul>
                </section>
                <section className="evaluate">
                    <a href="evaluate.html">
                        <div className="tit flex">
                            <span className="flex-item">全部评价(38)</span>
                            <em className="flex-item"><i></i></em>
                        </div>
                    </a>
                    <div className="pj-li" id="pj-li">
                        <div className="box flex">
                            <div className="head">
                                <img src="img/d-head.png"/>
                            </div>
                            <div className="pj flex-item">
                                <div className="name-time flex">
                                    <span className="name flex-item">
                                        摩尔
                                    </span>
                                    <span className="time flex-item">
                                        2016-05-09 20:19
                                    </span>
                                </div>
                                <div className="pj-word">
                                    应该是正品，质量非常好，不像是肯德基反馈数据大幅亏损的。好评～
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
module.exports=Center;



