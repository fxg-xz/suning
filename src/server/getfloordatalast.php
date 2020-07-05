<?php
# 01-先连接数据库
// $db = mysqli_connect("127.0.0.1","snsx","123456","suningshengxian");

// # 02-查询获取数据库所有的数据
// $sql3 = "SELECT * FROM floor";

// $result3 = mysqli_query($db,$sql3);
// # 03-把数据库中的获取所有数据转换为JSON返回
// $datalast = mysqli_fetch_all($result3,MYSQLI_ASSOC);
// echo json_encode($datalast,true);
echo file_get_contents("floor.json");

?>