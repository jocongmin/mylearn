<?php
namespace Home\Controller;
use Think\Controller;
class WriteController extends Controller {
   public function index(){
   		$this->display('./write');
   }
   public function ajaxSub(){
   		$title=$_POST['title'];
   		$con=$_POST['con'];
   		$m=D('article');
   		$data['title']=$title;
   		$data['content']=$con;
   		$is=$m->add($data);
   		if($is){
   			echo '保存成功';
   		}else{
   			echo '保存失败';
   		}
   }
}
