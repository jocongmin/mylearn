<?php

/**
 * SiteController is the default controller to handle user requests.
 */
class TestController extends CController
{
    public function actionIndex()
    {
        $this->updates();
        $this->render('../test');
    }

    public function finds()
    {
        $con = Yii::app()->db;
        $sql = "select * from article where id<15";
        $result = $con->createCommand($sql)->query();
        foreach ($result as $row) {
            echo $row['title'];
            echo "<br>";
            echo $row['content'];
            echo "<br>";
        }
    }

    public function updates()
    {
        $con = Yii::app()->db;
        $sql = "update article set title='64465dfdnihao-ksjdfkjdsf',content='sdflkjsdkfjds' where id=40";
        $suc = $con->createCommand($sql)->query();
        if ($suc) {
            echo 'success';
        } else {
            echo 'false';
        }
    }

}

/////////////////////////
<?php

/**
 * SiteController is the default controller to handle user requests.
 */
class SiteController extends CController
{
    /**
     * Index action is the default action in a controller.
     */
    public function actionIndex()
    {
        $data = 'sdlkfjskdfjskd';
        $connection = Yii::app()->db;
        $sql = "select * from article where id<10";
        $rows = $connection->createCommand($sql)->query();
        foreach ($rows as $k => $v) {
            echo $v['title'];
            echo "<br>";
        }

        $model = new LoginForm;
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
            if ($model->validate() &&
                $model->validateVerifyCode($this->createAction('captcha')->getVerifyCode()) &&
                $model->login()
            ) {
                $this->redirect(CController::createUrl('default/index'));
            }

        }

        return $this->render('../site', array('data' => $data, 'name' => 'timesdflkjsdfkjsdfkj'));
    }

    public function actionUrl_test()
    {
        if (isset($_GET['name'])) {
            $name = $_GET['name'];
        } else {
            $name = 'null';
        }
        echo $name;
    }

    public function actionSave()
    {
        Yii::app()->session['tst'] = 'slkdjfskdjfksdjf';
        echo Yii::app()->session['tst'];//这里可以读取得到，因为已经存储变量在session里了。
        unset(Yii::app()->session['tst']);
        echo Yii::app()->session['tst'];//这里将读取不到
    }

    public function actionPage()
    {
        $criteria = new CDbCriteria();     //new cdbcriteria数据库<br>$criteria->id = 'id ASC';           //排序规则
        $count = Exchange::model()->count($criteria);
        $pager = new CPagination($count);
        $pager->pageSize = 30;
        $pager->applyLimit($criteria);
        $categoryInfo = Category::model()->findAll($criteria); //根据条件查询
    }

    public function actions()
    {
        return array(
            // 启用验证码组件
            'captcha' => array(
                'class' => 'CCaptchaAction',
                'backColor' => 0xFFFFFF,
                'maxLength' => 4,       // 最多生成几个字符
                'minLength' => 4,       // 最少生成几个字符
                'fixedVerifyCode' => substr(md5(time()), 11, 4), //每次都刷新验证码
            ),
        );
    }

    public function accessRules()
    {
        return array(
            array('allow',
                'actions' => array('captcha'),
                'users' => array('*'),
            ),
        );
    }

    public function actionLogin()
    {
        $model = new LoginForm;
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
            if ($model->validate() &&
                $model->validateVerifyCode($this->createAction('captcha')->getVerifyCode()) &&
                $model->login()
            ) {
                $this->redirect(CController::createUrl('default/index'));
            }

        }
        $this->render('login', array('model' => $model));
    }
}
//////////////////验证码
<?php

/**
 * SiteController is the default controller to handle user requests.
 */
class LoginController extends CController
{
    public function actions()  //这里用来配置验证码img里面的参数设置
    {
        return array(
            // captcha action renders the CAPTCHA image displayed on the contact page
            'captcha' => array(
                'class' => 'CCaptchaAction',
                'backColor' => 0xFFFFFF,
                'maxLength' => '5',       // 最多生成几个字符
                'minLength' => '4',       // 最少生成几个字符
                'height' => '40',
                'width' => '230',
            ),
        );

    }

    public function accessRules()   //这里设置验证码规则，也是必有的action
    {
        return array(
            array('allow',
                'actions' => array('captcha'),
                'users' => array('*'),
            ),
        );
    }

    public function actionLogin()
    {
        $model = new LoginForm;
        $img_code = $this->createAction('captcha')->getVerifyCode();//这里获取前端页面图片验证码里面的值
        if (isset($_POST['codes'])) {
            $codes = $_POST['codes'];//这里获取验证码文本框里面的值
            if ($codes === $img_code) { //判断值是否相等，如果相等就是验证码正确，如果不相等就是验证码错误。
                echo 'right';
            } else {
                echo 'false';
            }
        }
        $this->render('../login', array('model' => $model));
    }

}
