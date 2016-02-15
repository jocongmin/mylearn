public function actionPages()
    {
        $sql = "select * from myuser";//一下代码基本上直接复制即可，这里写入要分页的表的查询字段即可
        $criteria = new CDbCriteria();
        $result = Yii::app()->db->createCommand($sql)->query();
        $pages = new CPagination($result->rowCount);
        $pages->pageSize = 2; //分页数设置
        $pages->applyLimit($criteria);
        $result = Yii::app()->db->createCommand($sql . " LIMIT :offset,:limit");
        $result->bindValue(':offset', $pages->currentPage * $pages->pageSize);
        $result->bindValue(':limit', $pages->pageSize);
        $posts = $result->query();
        $this->render('../index', array(
            'posts' => $posts,
            'pages' => $pages,
        ));
    }
///////view
  <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php foreach ($posts as $row): ?>
    <?php
    echo $row['id'];
    echo "--";
    echo $row['password'];
    echo "--";
    echo $row['username'];
    echo "--";
    echo "<br>"
    ?>
<?php endforeach; ?>
<?php
//分页widget代码:
$this->widget('CLinkPager', array('pages' => $pages));
?>
</body>
</html>
