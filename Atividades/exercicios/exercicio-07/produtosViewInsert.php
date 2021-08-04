<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
 
  <title>Cadastro de produtos</title>
  
</head>
<body>
  <div>
      <p>Cadastro de Produtos:</p>

  </div>
  <div>
  <form action="produtosControllerInsert.php" method="post">

  <div>
        
        <div>
      <label for="nome">Nome:</label>
      <input type="text" name="nome" id="nome" placeholder="Informe os dados do produto">
    </div>

    <div>
      <label for="um">Unidade de medida</label>
      <input type="text" name="um" id="um" placeholder="Informe unidade de medida: Quilo-Kg, Peça-Pç, Litro-Lt" >
    </div>
  
    <div >
    <input type="submit" class="btn btn-outline-primary" value="Inserir" onclick="cadastrar()">
    </div>
  
  <script src="./validacaoform.js"></script>
  </form>

</body>
</html>

