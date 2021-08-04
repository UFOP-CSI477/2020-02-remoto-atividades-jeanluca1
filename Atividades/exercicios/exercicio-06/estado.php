<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Estados</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>

<body>
        <table  id="tabela" class="table table-dark ">

        <thead>
            <tr >
                <th>ID</th>
                <th>Nome</th>
                <th>Siglas</th>
            </tr>
        </thead>

            <tbody>
                <?php
                while ($est = $estado->fetch()) {
                    echo "<tr>" .
                        "<td>" . $est["id"] . "</td> "
                        . "<td>" . $est["nome"] . "</td> "
                        . "<td>" . $est["sigla"] . "</td> "
                        . "</tr>";
                }
                ?>
            </tbody>
        </table>
</body>
</html>