
	


function validarEmail() {

    var valorr = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if(!valorr.test(document.getElementById("email").value)){
    alert(' Sigite seu e-mail corretamente.');
    document.getElementById("email").focus();
    return false
    }else {
      
      return true;
    }
  }
  

function validarendereco() {
    let endereco = document.getElementById("endereco");
        if (endereco.value == "") {
          window.alert("Escreva o seu endereço");
          endereco.focus();
        }else{
          
          return true;
        }
    }

    function validarData(campo) {

        let n = campo.value;
         var dataAtual = new Date();
         var data= new Date(data);
       
         if (n.length === 0 || data<dataAtual) {
           window.alert("Por favor, uma data válida ");
            campo.value = "";
           campo.focus();
           return false;
         } else {
           
           return true;
         }
       }


function validarnumero() {
    let n = document.getElementById("numero").value;
  
    if (n.length == 0 || isNaN(parseFloat(n))) {       
        numero.value = "";
        numero.focus();
      window.alert('Insira o  numero da residencia');
      return false;
    } else 
    {
      return true;
    }
  }



function validarcel() {
    let n = document.getElementById("celular").value;
  
    if (n.length == 0 || isNaN(parseFloat(n))) {       
        celular.value = "";
        celular.focus();
      window.alert('Insira o seu celular corretamente');
      return false;
    } else 
    {
      return true;
    }
  }



function validartel() {
    let n = document.getElementById("telefone").value;
  
    if (n.length == 0 || isNaN(parseFloat(n))) {       
      telefone.value = "";
      telefone.focus();
      window.alert('Insira o seu telefone corretamente');
      return false;
    } else 
    {
      return true;
    }
  }





function validarrg() {
    let rg = document.getElementById("rg");
        if (rg.value == "") {
          window.alert("Escreva o seu RG");
          rg.focus();
        }else{
          
          return true;
        }
    }




	
function validarcpf() {
    let n = document.getElementById("cpf").value;
  
    if (n.length == 0 || isNaN(parseFloat(n))) {       
      cpf.value = "";
      cpf.focus();
      window.alert('Insira o seu cpf corretamente');
      return false;
    } else 
    {
      return true;
    }
  }

  function validarsnome() {
    let snome = document.getElementById("snome");
        if (snome.value == "") {
          window.alert("Escreva seu sobrenome");
          snome.focus();
        }else{
          
          return true;
        }
    }
    /*function validarnome() {
        let nome = document.getElementById("nome");
            if (nome.value == "") {
              window.alert("insira o seu nome");
              nome.focus();
            }else{
              
              return true;
            }
        }*/ //as duas validaçoes sao validas
    
        function validarnome(campo) {
            let nome = campo.value;
                if (nome.length == 0) {
                  window.alert("insira o seu nome");
                  campo.focus();
                }else{
                  
                  return true;
                }
            }
        




  function validacadastro(){

  if ( validarnome(nome) && validarsnome() && validarData(data) && validarcpf() && validarrg() && validartel() && validarcel()
         && validarEmail(email) && validarcpf() && validarendereco() && validarnumero() ) {
    
        


  }}

