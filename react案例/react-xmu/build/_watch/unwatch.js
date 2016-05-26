
var store=require('../_store/store.js');
function unwatch(that) {
    store.unsubscribe( //更新监听
        function() {
            var s = store.getState();
            that.setState({s})
        }
    );
}
module.exports=watch;