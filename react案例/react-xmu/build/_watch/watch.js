
var store=require('../_store/store.js');
function watch(that) {
    store.subscribe( //更新监听
        function() {
            var s = store.getState();
            that.setState({s})
        }
    );
}
module.exports=watch;