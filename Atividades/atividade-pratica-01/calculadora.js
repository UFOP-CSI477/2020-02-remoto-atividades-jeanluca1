function calculo(operador,tecla){
   
  
    if (operador=='funcao'){
      if (tecla=='c') {
        document.getElementById('tela').value='' 
        document.getElementById("+").disabled = false
        document.getElementById("-").disabled = false
        document.getElementById("*").disabled = false
        document.getElementById("/").disabled = false
        document.getElementById(".").disabled = false
             
      }
  
      if (tecla=='/'|| tecla=='*'|| tecla=='-'|| tecla=='+') {
        
        
        
        document.getElementById('tela').value+=tecla
        document.getElementById("+").disabled = true
        document.getElementById("-").disabled = true
        document.getElementById("*").disabled = true
        document.getElementById("/").disabled = true
        document.getElementById(".").disabled = false
        
        
          
        
      }
      if (tecla==='.') {
        document.getElementById('tela').value+=tecla
        document.getElementById("+").disabled = true
        document.getElementById("-").disabled = true
        document.getElementById("*").disabled = true
        document.getElementById("/").disabled = true
        document.getElementById(".").disabled = true
  
  
        
      }
  
      if (tecla=='=') {
        var valortotal =eval(document.getElementById('tela').value)
          document.getElementById('tela').value=valortotal
  
  
  
        //console.log(eval(valortotal))
        
      }
      
  
    }
    else if(operador=='numero') {
      
      document.getElementById('tela').value+=tecla
      //console.log(operador,tecla)
  
  
      document.getElementById("+").disabled = false
        document.getElementById("-").disabled = false
        document.getElementById("*").disabled = false
        document.getElementById("/").disabled = false
       
  
    }  
    
    }