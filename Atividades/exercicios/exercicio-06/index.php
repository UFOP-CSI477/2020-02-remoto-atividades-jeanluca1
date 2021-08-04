<?php

require_once './connection.php';

$estado = $connection -> query("SELECT * FROM estados");

require_once './estado.php';
//CONEXAO PHP