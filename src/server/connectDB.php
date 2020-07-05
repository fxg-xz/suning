<?php
$db = mysqli_connect("127.0.0.1", "snsx", "123456", "suningshengxian");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}
?>