<?php

    $dbfile = "./db/database.sqlite";
    
    $dbuser = "";
    $dbpassword = "";
    $dbhost = "";
    //CONEXAO BD
    $strConnection = "sqlite:" . $dbfile;

    $connection = new PDO($strConnection, $dbuser, $dbpassword);
