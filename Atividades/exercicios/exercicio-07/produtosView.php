<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  
  <title>Produto</title>
 
</head>

<body>
  
<div >
  <table  id="tabela" class="table table-striped ">

    <thead>
        <tr >
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

  </div>
</table>
    <div>
  <div class="btn btn-outline-primary" >
  <a href="/dados/produtosViewInsert.php">Inserir</a>
  </div>
  </div>
</body>
</html>