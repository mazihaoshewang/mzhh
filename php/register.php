<?php

require "connz.php";

//检测用户名
if(isset($_GET['checkname'])){
    $username=$_GET['checkname'];
    
    //通过查询方式来测试是否存在用户名。
    $result=$conn->query("select * from usertable where username='$username'");

    if($result->fetch_assoc()){//存在
        echo true;//1
    }else{//不存在
        echo false;//空隙
    }

}




//前端用户点击了submit按钮。接收前端传入表单的值。
if(isset($_POST['submit'])){
    $name=$_POST['username'];
    $pass=sha1($_POST['password']);//加密
    $email=$_POST['email'];
    //添加数据库
    $conn->query("insert usertable values(null,'$name','$pass','$email',NOW())");

    //php的跳转
    header('location:http://10.31.157.50/xm/src/SigninD.html');
}