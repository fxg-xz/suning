<?php
header("Content-Type: text/html;charset=utf-8");
# 01-先连接数据库
$db = mysqli_connect("127.0.0.1","snsx","123456","suningshengxian");

# 获取参数
$username=$_REQUEST["username"];
$phone= $_REQUEST["phone"];
$password=$_REQUEST["password"];

# 02-查询获取数据库的数据是否存在用户
$sql_select = "select username from user where username = '$username'";

mysqli_query($db,'SET NAMES UTF8');

$ret = mysqli_query($db,$sql_select);

$row = mysqli_fetch_array($ret); 				

if($row!=null){

    echo "error";

}else{
    $sql_insert = "insert into user(username,password,phone) values('$username','$password','$username')";
    //插入数据
    $ret2 = mysqli_query($db,$sql_insert);
    if($ret2==true){
        echo "success";
    }else{
        echo "fail";
    }   
}  

?>