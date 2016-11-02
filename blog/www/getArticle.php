<?php
	header("Content-Type:text/json");
    $articleId = $_GET['aid'];
    $articles  = array(
      array('id' => 1,'title' => 'title1', 'content' => "12316464")
    );
    echo json_encode($articles[intval($articleId) - 1]);	
?>