require('../../scss/list_banner_pro.scss');
var React=require('react');
var BannerPro=React.createClass({
    render: function() {
        return (
            <a href='detail.html'>
                <div id='l-banner'>
                    <div className="pic">
                        <em className="em">
                        明星爆款
                        </em>
                        <img src="img/list-pro.jpg" />
                    </div>
                    <div className="info">
                        <div className="mouth">
                            <em></em>
                            <span>口碑产品</span>
                            <em></em>
                        </div>
                        <div className="tit">
                            韩菲诗焕颜洗颜泥女补水保湿 深层清洁洁面乳100g
                        </div>
                        <div className="pri">
                            ￥235.00
                        </div>
                    </div>
                </div>
            </a>
        );
    }
});
module.exports=BannerPro;

