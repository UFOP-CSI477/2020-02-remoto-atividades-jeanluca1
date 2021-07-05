var nome = document.getElementById('nome');
var numero= 0;
var tempo = document.getElementById('tempo');


var pilotos = [];

function ordenar(temp, temp1) {
    return (temp.tempo - temp1.tempo);
  }

function novopiloto() {
    
      
    if (numero <6) {
      if (validar(nome) && validar2(tempo))
       {
        numero ++;
        var tabela = document.createElement('tr');
        tabela.insertCell(0).innerHTML = numero;
        tabela.insertCell(1).innerHTML = nome.value;
        tabela.insertCell(2).innerHTML = tempo.value;
  
        var corridas = new Corrida(numero, nome.value, tempo.value);
       pilotos.push(corridas);
  
        document.getElementById('inicio').appendChild(tabela);
       
  
        
        tempo.value="";
        nome.value = "";}
                
    }   
        
        if (numero=== 6) 
        {
      window.alert('Maximo de participantes alcançado');
      document.getElementById("cadastro").disabled = true
      document.getElementById("corrigir").disabled = true
        
      return false;
            }

}

  function Corrida(largada, nome, tempo)
   {
    this.nome = nome;
    this.largada = largada;
    this.tempo = tempo;
  }

  function validar(campo) {
    let n = campo.value;
    if (n.length == 0) {
      window.alert(" Insira o nome!");
      campo.value = "";
      campo.focus();
      return false;
    } else {      
      return true;
    }
  }
  function validar2(campo) {
    let n = campo.value;
    if (n.length == 0 || isNaN(parseFloat(n))) {
      window.alert(" Insira o tempo em segundos!");
      campo.value = "";
      campo.focus();
      return false;
    } else {      
      return true;
    }
  }

function resultFinal() {


    if(pilotos.length> 0){
  
      pilotos.sort(ordenar);
      
      var n = pilotos[0].tempo;
  
      for(let i = 0; i< pilotos.length; i++){

        var lista = document.createElement('tr');

        
        lista.insertCell(0).innerHTML = i+1;
        lista.insertCell(1).innerHTML = pilotos[i].largada;
        lista.insertCell(2).innerHTML = pilotos[i].nome;    
        lista.insertCell(3).innerHTML = pilotos[i].tempo;
        

        
        if(pilotos[i].tempo!=n){
            lista.insertCell(4).innerHTML = "..."
          } 
          else 
            {
            lista.insertCell(4).innerHTML = "vencedor"
          }
  
          document.getElementById('resultado').appendChild(lista);
  
          document.getElementById("result").disabled = true
          document.getElementById("cadastro").disabled = true
          document.getElementById("corrigir").disabled = true

      }
      
    }
       
  }
  

