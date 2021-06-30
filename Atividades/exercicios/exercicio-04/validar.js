

var form = document.getElementById("frmcadastro"); ;


	
if (form.addEventListener) {                   
    form.addEventListener("submit", validacadastro);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validacadastro);
}
function validacadastro(evt){
	var nome = document.getElementById('nome');
	var snome = document.getElementById('snnome');	
    var data = document.getElementById('data');
	var cpf = document.getElementById('cpf');
	var rg = document.getElementById('rg');
    var telefone = document.getElementById('telefone');
    var email = document.getElementById('email');
	var celular = document.getElementById('celular');
    var endereco = document.getElementById('endereco');
	var numero = document.getElementById('numero');

    	/* Validação do campo email */ 
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro =0; 
      	/* Validação do campo email */
 


/* Validação do campos*/ /*<span class='msgerro(erro) msg..(caixa)'></span>*/
camponome = document.querySelector('.msgnome');
if(nome.value == ""){
    camponome.innerHTML = "preencha o campo nome";
    camponome.style.display = 'block';
    contErro += 1;
}else{
    cnome.style.display = 'none';

}

camposnome = document.querySelector('.msgsnome');

if(snome.value == ""){
    camposnome.innerHTML = "preencha o campo Sobrenome";
    camposnome.style.display = 'block';
    contErro += 1;
}else{
    camponome.style.display = 'none';

}

campocpf = document.querySelector('.msgcpf');
if(cpf.value == ""){
    campocpf.innerHTML = "preencha o campo CPF";
    campocpf.style.display = 'block';
    contErro += 1;
}else{
    campocpf.style.display = 'none';


}

campodata = document.querySelector('.msgdata');
if(data.value == ""){
    campodata.innerHTML = "preencha a data";
    campodata.style.display = 'block';
    contErro += 1;
}else{
    campodata.style.display = 'none';

}

camporg = document.querySelector('.msgrg');
if(rg.value == ""){
    camporg.innerHTML = "preencha o RG";
   camporg.style.display = 'block';
    contErro += 1;
}else{
    camporg.style.display = 'none';

}campotelefone= document.querySelector('.msgtelefone');
if(telefone.value == ""){
    campotelefone.innerHTML = "preencha o telefone";
    campotelefone.style.display = 'block';
    contErro += 1;
}else{
   campotelefone.style.display = 'none';

}

campocelular = document.querySelector('.msgcelular');

if(celular.value == ""){
   campocelular.innerHTML = "preencha seu numero de Celular";
    campocelular.style.display = 'block';
    contErro += 1;
}else{
    campocelular.style.display = 'none';

}

campoendereco = document.querySelector('.msgendereco');

if(endereco.value == ""){
   campoendereco.innerHTML = "preencha o endereço d sua residencia";
    campoendereco.style.display = 'block';
    contErro += 1;
}else{
    campoendereco.style.display = 'none';

}

camponumero = document.querySelector('.msgcelular');

if(numero.value == ""){
   camponumero.innerHTML = "preencha o enumero de  sua residencia";
    camponumero.style.display = 'block';
    contErro += 1;
}else{
    camponumero.style.display = 'none';

}



/* Validação do campo email */ /*http://www.devwilliam.com.br/javascript/validar-formulario-usando-javascript*/
campoemail = document.querySelector('.msgemail');
if(email.value == ""){
    campoemail.innerHTML = "Favor preencher o E-mail";
    campoemail.style.display = 'block';
    contErro += 1;
}else if(filtro.test(email.value)){
    campoemail.style.display = 'none';
}else{
    campoemail.innerHTML = "Formato do E-mail inválido";
    campoemail.style.display = 'block';
    contErro += 1;

}
if (contErro > 0) {
    evt.preventDefult(); /*cancela a submição*/
    
}}
