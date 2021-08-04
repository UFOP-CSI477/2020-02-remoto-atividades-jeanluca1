<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <title>Formulário POST </title>
</head>

<body>

<div>
    <p>Dados cadastrados:</p>
  </div>

<?php
      $nome = $_POST['nome'];
      $snome = $_POST['snome'];
      $endereco = $_POST['endereco'];
      $rg = $_POST['rg'];
      $cpf = $_POST['cpf'];
      $nascimento = $_POST['data'];
      $complemento = $_POST['complemento'];
      $telefone = $_POST['telefone'];
      $email = $_POST['email'];

      
    ?>

    <div>

        <?php
        echo "Nome: $nome <br/>
              Sobrenome: $snome <br/>  
        Endereço: $endereco <br/>
        RG: $rg <br/>
        CPF: $cpf <br/>
        Data de Nascimento: $data <br/>
        complemento: $complemento <br/>
        Telefone: $telefone <br/>
        E-mail: $email <br/>";
  ?>

    <div >
        <a href="index.php" class="btn btn-outline-primary">Voltar</a>
    </div>


</body>
</html>


