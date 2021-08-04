<?php

require '../vendor/autoload.php';

use App\Models\Cidade;
use App\Models\Estado;
use App\Models\Produto;
use App\Database\Connection;
use App\Database\AdapterSQLite;

$connection = new Connection(new AdapterSQLite());

$connection->getAdapter()->open();

$estados = $connection->getAdapter()->getEstados();
$cidades = $connection->getAdapter()->getCidades();
$produtos = $connection->getAdapter()->getProdutos();

require '../View.php';
