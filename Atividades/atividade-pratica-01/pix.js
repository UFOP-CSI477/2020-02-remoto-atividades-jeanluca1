
var transacao=[];
var tipo = document.getElementById('tipo');
var valor = document.getElementById('valor');
var qnt = 0;

function baixarancos(){

    fetch("https://brasilapi.com.br/api/banks/v1")
    .then(response => response.json())
        .then(dados=> bancos(dados))
        .catch(error => console.error(error))
  }


  function bancos(dados){

    let banco = document.getElementById('banco');
    
  
    for (let index in dados){
      const {code, fullName} = dados[index];
  
      let option = document.createElement("option");
      option.innerHTML = fullName;
      option.value = code;
    
  
      banco.appendChild(option);
    }
  }
  

  

      function Tranf( tipo, valor) {
        this.valor = valor;
        this.tipo = tipo;
      }
      




      function novo() {

        
    
        if ( validabancos(banco) && validarPix(chaves)  && validar1(chavepix) && validatipo(tipo) &&validar2(valor)) {
            var tabela = document.createElement('tr');
            tabela.insertCell(0).innerHTML = tipo.value;
            tabela.insertCell(1).innerHTML = valor.value;
        
            var valores = new Tranf(tipo.value, valor.value);
            transacao.push(valores);
           
      
            document.getElementById('tabela').appendChild(tabela);

            valor.value="";
            chavepix.value = "";




          }
      }
    
    

      function valorat(valorat){
        this.valorat = valorat;
      }


    
      function resultado() {

        let valotranf = 0;
        let salordep = 0;
        let saldo= 0;
        
    
       for(qnt = 0; qnt < transacao.length; qnt++){

        if (transacao[qnt].tipo == 'Deposito'){
          salordep += parseFloat(transacao[qnt].valor);
       
       }else if(transacao[qnt].tipo== 'Tranferencia'){
        valotranf += parseFloat(transacao[qnt].valor);

       }

         
       }
    
            saldo = salordep- valotranf;
         
    
         var tabela2 = document.createElement('tr');
         tabela2.insertCell(0).innerHTML = saldo;
         
    
         var fim = new Saldo(saldo);
         transacao.push(fim);
     document.getElementById('resultado').appendChild(tabela2) ;

      document.getElementById("cadastro").disabled = true
      document.getElementById("corrigir").disabled = true
      document.getElementById("result").disabled = true


     }
        
     
    
     function Saldo (saldo){
        this.saldo = saldo;
      }
      function validar1(campo) {
        let n = campo.value;
        if (n.length === 0) {
          window.alert("insira a chave pix")  
          campo.value = "";
          campo.focus();    
          
          
          return false;
        }
        
        return true;
      }
    
    
      function validatipo() {
        let tipo = document.getElementById("tipo");
            if (tipo.value == "") {
              window.alert("selecione o tipo da operação");
              tipo.focus();
            }else{
              
              return true;
            }
      }
    
    
      function validar2(campo) {
        let n = campo.value;
        if (n.length === 0 || isNaN(parseFloat(n)))  {
          window.alert("insira o valor da transação")  
          campo.focus();    
          campo.value = "";
          
          return false;
        }
        
        return true;
      }
    
    
      
      
        function validabancos() {
          let banco = document.getElementById("banco");
              if (banco.value == "") {
                window.alert("selecione o banco");
                banco.focus();
              }else{
                
                return true;
              }
          }
    
    
          function validarPix() {
            let chaves = document.getElementById("chaves");
                if (chaves.value == "") {
                  window.alert("selecione o tipo da chave pix");
                  chaves.focus();
                }else{
                  
                  return true;
                }
            }
    