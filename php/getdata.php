<?php
require("conn.php");
if (isset($_GET['sid'])) {
    $sid = $_GET['sid'];
    // echo $sid;
    // die;
    $result = $conn->query("select * from wphlb where sid=$sid");
    echo json_encode($result->fetch_assoc());
}

