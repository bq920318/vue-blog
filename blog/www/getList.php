<?php
    $data = array(
      array(
        array('id' => 1, 'title' => 'title 1', 'content' => 'content 1', 'pubtime' => '2020-11-11 11:11:11'),
        array('id' => 2, 'title' => 'title 2', 'content' => 'content 2', 'pubtime' => '2020-11-11 11:11:11')  
      )
    );
    $pageno = $_GET['pageno'];
   header('Content-Type:text/json');
   echo json_encode($data[0]);