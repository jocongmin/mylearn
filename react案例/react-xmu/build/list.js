var React =require('react');
var ReactDOM=require('react-dom');
var BannerPro=require('./list_jsx/BannerPro.js');
var NavList=require('./list_jsx/NavList.js');
var ProList=require('./list_jsx/ProList.js');
var Nav=require('./comm/Nav.js');
var BackTop=require('./comm/BackTop.js');
var MoreLoad=require('./comm/MoreLoad.js');
var $=require('./lib/jquery.min.js');
require('../scss/_reset.scss');
require('../scss/list.scss');
var store=require('./_store/store.js');
var loadmore=function(){
	var pageState=store.getState().list_action;
	console.log(pageState,'pageState')
	if(pageState>=10000){
		$('.more').html('没有更多了...');
	}else if(pageState<10000){
		var $ul=document.getElementById('list-ul');
		var $div=document.createElement('div');
		$ul.appendChild($div);
		ReactDOM.render(<ProList/>,$div);
		var $page;
		var $newPage=store.getState().list_action;
		console.log($newPage,'$newpage')
		if($newPage==undefined){
			$page=0;
		}else{
			$page=$newPage+1;
		}
		store.dispatch({type:'loadMore',page:$page});
	}
}

ReactDOM.render(<BannerPro/>,document.getElementById('list-banner-pro'));
ReactDOM.render(<NavList/>,document.getElementById('l-nav-list'));
ReactDOM.render(<ProList/>,document.getElementById('list-prolist'));
ReactDOM.render(<Nav/>,document.getElementById('nav-footer'));
ReactDOM.render(<BackTop/>,document.getElementById('l-backtop'));
ReactDOM.render(<MoreLoad loadmore={loadmore}/>,document.getElementById('l-loadmore'));




