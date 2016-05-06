var React = require('react');
var ReactDOM = require('react-dom');
var AMUIReact = require('amazeui-react');
var Modal=AMUIReact.Modal;//ama的标签需要在这里引入。
var ModalTrigger=AMUIReact.ModalTrigger;//所有ama的标签都要引入
var Button=AMUIReact.Button;
var modal = <Modal type="alert" title="Amaze UI">这一个 Alert 窗口。</Modal>;
var modalInstance = (
  <ModalTrigger modal={modal}>
    <Button amStyle='primary'>显示 Alert</Button>
  </ModalTrigger>
);
module.exports=modalInstance;