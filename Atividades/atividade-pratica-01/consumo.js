var qnt = [];
var km = document.getElementById('km');        
var litros = document.getElementById('litros');
var n = 0;




function dados(km, litros, media) {
    this.km = km;
    this.litros = litros;
    this.media = media;
}

function consum(){
    
        
        let media = (parseFloat(document.getElementById('km').value) / parseFloat(document.getElementById('litros').value));
        
        if (Validar(km) && Validar(litros)) {
           
          var tabela = document.createElement('tr');
          tabela.insertCell(0).innerHTML = litros.value;
          tabela.insertCell(1).innerHTML = km.value;
          tabela.insertCell(2).innerHTML = media;
      
          var tab = new dados(km.value, litros.value, media);
          qnt.push(tab);
          
      
          document.getElementById('media').appendChild(tabela);
          litros.value="";
        km.value = "";


        }
    }


    function Validar(campo) {
        let n = campo.value;
      
        if (n.length == 0 || isNaN(parseFloat(n))) {       
          campo.value = "";
          campo.focus();
          window.alert('Insira os valores corretamente');
          return false;
        } else 
        {
          return true;
        }
      }
      
      function resultado() {

        var totallitros=0;
        var totalkm = 0;   
               
      
        for(n = 0; n < qnt.length; n++){

            totalkm+= parseFloat(qnt[n].km);
            totallitros += parseFloat(qnt[n].litros);
            console.log(totallitros.value);
          
        }
            var mediakmlittros = (totalkm/ totallitros);       
      
          var medialittros= totallitros/ parseFloat(qnt.length);         
          var mediakm = totalkm/ parseFloat(qnt.length);
         
          
          
        
        var resulttabela = document.createElement('tr');
        resulttabela.insertCell(0).innerHTML = totallitros;
        resulttabela.insertCell(1).innerHTML = totalkm;
        resulttabela.insertCell(2).innerHTML = medialittros;
        resulttabela.insertCell(3).innerHTML = mediakm;
        resulttabela.insertCell(4).innerHTML = mediakmlittros;
      
        var ress = new resutab(totallitros, totalkm, mediakm, mediakmlittros, medialittros);
      
       qnt.push(ress);
        
      
        document.getElementById('resultado').appendChild(resulttabela);
        document.getElementById("consu").disabled = true
        document.getElementById("resultad").disabled = true


      }

      function resutab(totallitros, totalkm, mediakm, mediakmlittros, medialittros) {
        this.totallitros= totallitros;
        this.totalkm = totalkm;
        this.mmediakm = mediakm;
        this.mediakmlittros= mediakmlittros;
        this.mmedialittros = medialittros;
        
      
      }
    