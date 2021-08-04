<?php

$dbfile = "./db/database.sqlite";

$dbuser = "";
$dbpassword = "";
$dbhost = "";

$strConnection = "sqlite:" .$dbfile;
//SQLITE

$connection = new PDO($strConnection, $dbuser, $dbpassword);