<?php 
namespace Home\Controller;
use Think\Controller;
class NewsController extends Controller {
	public function index(){
		$this->display('./news');
	}
	public function newsin(){
		$title=$_POST['title'];
		$author=$_POST['author'];
		$content=$_POST['content'];
		if($title==null||$author==null||$content==null){
			$successif='请填入所有数据，再上传！';
			$this->assign('successif',$successif);
			$this->display('./news');
			return;
		}
		$model=M('article');
		$data['title']=$title;
		$data['author']=$author;
		$data['content']=$content;
		$hasif=$model->where("title='$title'")->select();
		if($hasif){
			$successif='已经有类似文章了';
			$this->assign('successif',$successif);
		}else{
			$state=$model->add($data);
			if($state){
				$successif='成功写入';
				$this->assign('successif',$successif);
			}else{
				$successif='写入失败';
				$this->assign('successif',$successif);
			}
		}
		$this->display('./news');
	}
	public function article(){
		/*$search=$_POST['which_title'];*/
		$search=$_POST['which'];
		var_dump($which);
		$model=M('article');
		$all=$model->select();  //这样写代表选取表中的所有数据
		$this->assign('all',$all);
		$article=$model->where("title='$search'")->select();
		$title=$article[0]['title'];
		$author=$article[0]['author'];
		$content=$article[0]['content'];
		$this->ajaxReturn($title);
		/*$this->assign('title',$title);
		$this->assign('author',$author);
		$this->assign('content',$content);*/
		$this->display('./article');
	}
}



///////////////////////////////////////
<?php
namespace Home\Controller;
use Think\Controller;
class NgtoController extends Controller {
	public function ngview(){
		$this->display('./ngto');
	}
	public function nghttp(){
		$data=$_GET['username'];
		echo $data;
	}
}
//////////////////////////////////////////////////////////////
<?php
namespace Home\Controller;
use Think\Controller;
class ProductController extends Controller {
	public function prohtml(){
		$name='sdlkfjdskfj';
		$this->assign('name',$name);
		$this->display('./products');
	}
}
//////////////////////////
<?php
namespace Home\Controller;
use Think\Controller;
class SqlController extends Controller {
	public function sql_demo(){
		$m=M('userinfo');
		$data['firstname']="zhou";
		$data['lastname']="ming";
		$data['tel']="125654455";
		$state=$m->add($data);
		if($state){
			echo "success";
		}else{
			echo "error";
		}
	}
	public function demo(){

	}
}
/////////////////////////////////
<?php
namespace Home\Controller;
use Think\Controller;
class WenjianController extends Controller {
	public function wenjian(){
		$this->display("./wenjian");
	}
	public function upload(){
	    $upload = new \Think\Upload();// 实例化上传类
	    $upload->maxSize   =     3145728 ;// 设置附件上传大小
	    $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
	    $upload->rootPath  =     './Public/'; // 设置附件上传根目录
	    $upload->savePath  =     './img/'; // 设置附件上传（子）目录
	    // 上传文件 
	    $info   =   $upload->upload();
	    if(!$info) {// 上传错误提示错误信息
	        $this->error($upload->getError());
	    }else{// 上传成功
	   		echo($info["photo"]["savename"]);   //这个可以用来获取文件的保存名；
	   		echo($info["photo"]["savepath"]);   //这个可以用来获取文件的保存路径；
	    }
	}
}
//////////////////////////////////////////////////////////
