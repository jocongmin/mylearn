require('../../scss/list_prolist.scss');
var React = require('react');
var $=require('../lib/jquery.min.js');
var store=require('../_store/store.js');
var watch=require('../_watch/watch.js');
var ProList = React.createClass({
    getInitialState: function() {
        var page=store.getState().list_action;
        if(page==5){
            store.dispatch({type:'stopLoad'})
        }
        return {
            data: [{
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: page
            }, {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            }, {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            }, {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            }, 
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },

            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },

            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '325'
            },
            {
                $link: 'detail.html',
                $imgsrc: 'img/list-pro2.jpg',
                $icon: '品牌精选',
                $tit: '葡萄籽靓晳系列 抗氧化护肤品 套装 淡化细纹补水',
                $pri: '1556'
            },
            ]
        }
    },
    componentDidMount:function(){
        watch(this);
        $(window).bind("scroll",function(){
            var wh=$(window).height()+$(window).scrollTop();
            var dh=$(document).height();
            if(wh>=dh){
                $('.more').trigger('click');
            }
        });
        var page=store.getState();
    },
    render: function() {
        var $data = this.state.data;
        var $list = $data.map(function(item) {
            return (<li>
                        <a href={item.$link}>
                            <div className="item-box">
                                <div className="pic">
                                    <em>{item.$icon}</em>
                                    <img src={item.$imgsrc}/>
                                </div>
                                <div className="tit">
                                    {item.$tit}
                                </div>
                                <div className="pri-buy">
                                    <span>
                                ￥{item.$pri}
                            </span>
                                    <em className="eon"></em>
                                    <i className="ion"></i>
                                </div>
                            </div>
                        </a>
                    </li>
            )
        });
        return ( <ul id='list-ul'>{$list}</ul>)
    }
});
module.exports = ProList;
