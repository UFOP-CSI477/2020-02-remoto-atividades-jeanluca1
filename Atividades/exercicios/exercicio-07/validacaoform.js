function validarnome(campo) {
  let n = campo.value;
  if (n.length === 0) {
    window.alert("Escreva o nome corretamente")
    campo.value = "";
    campo.focus();
    return false;
  }
  
  return true;
}

function validarUm(campo) {
  let n = campo.value;

  if (n.length === 0 || n.length > 3) {
    window.alert("Escreva o campo corretamente");
    campo.value = "";
    campo.focus();
    return false;
  } else {
    
    return true;
  }
}


function cadastrar() {
  let um = document.getElementById('um');
  let nome = document.getElementById('nome');
 
 
  if (
    validarnome(nome) && validarUm(um))  {
    window.alert("Dados cadastrados");
  }
  
}

function voltar() {
  window.history.back()
}