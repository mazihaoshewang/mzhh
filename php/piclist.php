<?php
header('content-type:text/html;charset=utf-8');//设置字符编码
require "conn.php";

$result=$conn->query("select * from wphlb");//获取的记录集。

$arrdata=array();
for($i=0;$i<$result->num_rows;$i++){
    $arrdata[$i]=$result->fetch_assoc();//将数组给$arrdata的每一项
}

echo json_encode($arrdata);//以json形式输出二维数组


