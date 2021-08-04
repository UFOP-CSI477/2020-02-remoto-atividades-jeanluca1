<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
 
   <title> Localidades e Produtos</title>
</head>

<body>
  
<div>
  <table  id="tabela" class="table table-bordered ">

  <div>
  <h1>Estados</h1>
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Sigla</th>
        </tr>
    </thead>

  <tbody>
    <?php
      while ($e = $estados->fetch()) {
        echo "<tr>" .
        "<td>" . $e["id"] . "</td> "
        . "<td>" . $e["nome"] . "</td> "
        . "<td>" . $e["sigla"] . "</td> "
        . "</tr>";
      }
      ?>
    </tbody>
</table>
</div>

<div>
  
<h1>Produto:</h1>

<table  id="tabela" class="table table-bordered ">
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Tipo de Medida</th>
        </tr>
    </thead>

  <tbody>
    <?php
      while ($e = $produtos->fetch()) {
        echo "<tr>" .
        "<td>" . $e["id"] . "</td> "
        . "<td>" . $e["nome"] . "</td> "
        . "<td>" . $e["um"] . "</td> "
        . "</tr>";
        }
        ?>
    </tbody>
</table>
</div>
  </div>
</body>
</html>