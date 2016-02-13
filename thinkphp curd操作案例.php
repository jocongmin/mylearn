<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    private $con;
    public function index(){
        $row=$this->test();
        $this->assign('row',$row);
        $this->display('./index');
    }
    public function connect_data_base(){   //连接数据库和表
        $this->con=mysqli_connect('localhost','root','root');
        mysqli_select_db($this->con,'article');
    }
    public function query_db($sql){ //进行查询功能的设置
        $this->connect_data_base();
        $query=mysqli_query($this->con,$sql);
        return $query;
    }
    public function test(){  //测试开发的数据库查询功能
        $sql='select * from article where id>10 and id<15';
        $query=$this->query_db($sql);
        while($result=mysqli_fetch_array($query)){
            $row[]=$result;
        }
        return $row;
    }
    public function mydb(){
        $m=M('article');   //初始化查询
        $sql='select * from article where id<10'; //原生的数据库查询语言
        $find=$m->query($sql);//直接用tp的query()方法可以进行原生的数据库语言的查询
        var_dump($find);
    }
    public function db_ch(){
        $m=M('article');
        $sql="update article set title='dbch-skdjfksdjfkdsj',content='sdlkfjsdkjfsdkjf' where id=2";
        //update table set item='value',item='value' where id=t;
        $state=$m->execute($sql);
        //更新和插入新的条目需要用execute()方法才能实现原生
        var_dump($state);
        $this->display('./mydb');
    }
    public function db_insert(){
        $m=M('article');
        $sql="insert into article (title,content) values ('insedksfjkdjfksdjfksdj','skdjfksjdfksdjfksdfsd')";
        //insert into table (item,item) values (value,value);
        $state=$m->execute($sql);
        //插入新的条目也需要execute 方法
        var_dump($state);
        $this->display('./mydb');
    }
    public function db_del(){
        $m=M('article');
        $sql='delete from article where id=10';
        $state=$m->execute($sql);
        //原生sql语言的删除也可以直接用tp 的execute方法来进行
        if($state){
            echo 'sdfsjdfsd';
        }else{
            echo 'fsdlfkjsdfkd';
        }
        $this->display('./mydb');
    }
    //总结是tp使用原生sql语言的话，需要用query（）方法和execute（）方法，其中execute可以用来增、删、改，query只能用来查询。
}
