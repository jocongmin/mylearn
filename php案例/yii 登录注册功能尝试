<?php

class LoginController extends Controller
{
    public function actionLogin()
    {
        $result = $this->sql();
        if ($result) {
            $result = 'suc';
        } else {
            $result = 'false';
        }
        $this->render('login', array(
            'result' => $result
        ));
    }

    public function sql()
    {
    if (isset($_POST['username']) && isset($_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $lasttime = date('y-m-d h:i:s', time());
            $sql = "insert into myuser (username,password,lasttime) values ('$username','$password','$lasttime')";
            $result = Yii::app()->db->createCommand($sql)->execute();//如果是增加进去数据库需要加execute方法
            var_dump($result);
            return $result;
        }
    }

    public function actionDenglu()
    {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $this->sql_denglu($username, $password);
        }
        $this->render('denglu');
    }

    public function sql_denglu($name, $psw)
    {
        $sql = "select * from myuser where username='$name' and password='$psw'";//查找用户名和密码是否存在
        $qry = Yii::app()->db->createCommand($sql);
        $result = $qry->queryAll();
        if ($result) {//判断是否跳转到相关页面
            $this->redirect(array('Sucdenlu'));
        } else {
            $this->redirect(array('Faldenlu'));
        }
    }

    public function actionSucdenlu()
    {
        $this->render('suc');
    }

    public function actionFaldenlu()
    {
        $this->render('fal');
    }
}

?>
