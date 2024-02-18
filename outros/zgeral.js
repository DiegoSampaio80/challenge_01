btnDescriptografar.addEventListener('click',()=>{
    //mensagem = inputMensagem.value;
    mensagem = 'ober tenterstenter maiimess renterail poberssimesventerl';

    for (let index = 0; index < mensagem.length; index++) {
        if (mensagem[index] == "a"){
            elemento += mensagem[index];
            index += vogalA.length - 1;
           
        } else if (mensagem[index] == "e"){
            elemento += mensagem[index];
            index += vogalE.length - 1;
           
        } else if (mensagem[index] == "i"){
            elemento += mensagem[index];
            index += vogalI.length - 1;
           
        } else if (mensagem[index] == "o"){
            elemento += mensagem[index];
            index += vogalO.length - 1;
           
        } else if (mensagem[index] == "ufat"){
            elemento += mensagem[index];
            index += vogalU.length - 1;
           
        } else {
            elemento += mensagem[index];
        } 
    }
    
    msgCriptografada.innerHTML = '';
    msgDescriptografada.innerHTML = elemento;
    mensagem = '';
    inputMensagem.value = '';
    inputMensagem.focus();
});


btnCriptografar.addEventListener('click',()=>{
    mensagem = inputMensagem.value;
    
    for (let index = 0; index < mensagem.length; index++) {

        let codigoCaracter = mensagem[index].charCodeAt(0);

        if(codigoCaracter >= 65 && codigoCaracter <= 90){
            elemento += mensagem[index];
        } else{
            if(mensagem[index] == "a"){
                elemento += "ai";
            } else if (mensagem[index] == "e") {
                elemento += "enter";
            } else if (mensagem[index] == "i") {
               elemento += "imes";
            }else if (mensagem[index] == "o") {
                elemento += "ober";
            }else if (mensagem[index] == "u") {
                elemento += "ufat";
            } else {
                elemento += mensagem[index];
            } 
        }
    }
    msgDescriptografada.innerHTML = '';
    msgCriptografada.innerHTML = elemento;
    elemento = '';
    inputMensagem.value = '';
    inputMensagem.focus();
});

let mensagem = '';
let elemento = '';
let sectionEnterData = document.querySelector('#sectionEnterData');
let txtAreaCriptografar = document.querySelector('#txtAreaCriptografar');
let txtAreaDescriptografar = document.querySelector('#txtAreaDescriptografar');
const btnCriptografar = document.querySelector('#btnCriptografar');
const btnDescriptografar = document.querySelector('#btnDescriptografar');
const msgCriptografada = document.querySelector('#msgCriptografada');
const msgDescriptografada = document.querySelector('#msgDescriptografada');

txtAreaCriptografar.addEventListener('focus', ()=>{
    txtAreaCriptografar.classList.remove('opacidade');
    btnCriptografar.classList.remove('opacidade');
    msgCriptografada.classList.remove('visivel');
    msgDescriptografada.classList.remove('visivel');
});


txtAreaDescriptografar.addEventListener('focus', ()=>{
    txtAreaDescriptografar.classList.remove('opacidade');
    btnDescriptografar.classList.remove('opacidade');
    msgDescriptografada.classList.remove('visivel');
    msgCriptografada.classList.remove('visivel');
});

txtAreaCriptografar.addEventListener('blur', ()=>{
    mensagem = txtAreaCriptografar.value;
    txtAreaCriptografar.value = '';
    txtAreaCriptografar.classList.add('opacidade');
    btnCriptografar.classList.add('opacidade');
});

txtAreaDescriptografar.addEventListener('blur', ()=>{
    mensagem = txtAreaDescriptografar.value;
    txtAreaDescriptografar.value = '';
    txtAreaDescriptografar.classList.add('opacidade');
    btnDescriptografar.classList.add('opacidade');
});

btnDescriptografar.addEventListener('blur', ()=>{
    limparDados();
});

btnCriptografar.addEventListener('blur', ()=>{
    limparDados();
});

txtAreaCriptografar.addEventListener('keydown',(e)=>{
    let teclaPressionada = e.key;
    if (/[áàâãéèêíìóòôõúùûç]/gi.test(teclaPressionada)) {
        e.preventDefault();
    }
});

txtAreaDescriptografar.addEventListener('keydown',(e)=>{
    let teclaPressionada = e.key;
    if (/[áàâãéèêíìóòôõúùûç]/gi.test(teclaPressionada)) {
        e.preventDefault();
    }
});
   
let vogalA = "ai";
let vogalE = "enter";
let vogalI = "imes";
let vogalO = "ober";
let vogalU = "ufat";      

btnDescriptografar.addEventListener('click',()=>{
    //mensagem = txtAreaDescriptografar.value;
    mensagem = mensagem;
    //mensagem = 'ober tenterstenter maiimess renterail poberssimesventerl';
    if(mensagem != ''){
        /* limparDados(msgDescriptografada);
        limparDados(msgCriptografada); */
        mensagem = mensagem.replaceAll('ai','a');
        mensagem = mensagem.replaceAll('enter','e');
        mensagem = mensagem.replaceAll('imes','i');
        mensagem = mensagem.replaceAll('ober','o');
        mensagem = mensagem.replaceAll('ufat','u');
        
        msgDescriptografada.innerHTML = mensagem;
        msgDescriptografada.classList.add('visivel');
    } else {
        alert('Mensagem inválida. Insera uma mensagem.')
    }
});

btnCriptografar.addEventListener('click',()=>{
    /* limparDados(msgDescriptografada);
    limparDados(msgCriptografada); */
    mensagem = mensagem;
    /* mensagem = txtAreaCriptografar.value; */
    
    for (let index = 0; index < mensagem.length; index++) {

        let codigoCaracter = mensagem[index].charCodeAt(0);

        if(codigoCaracter >= 65 && codigoCaracter <= 90){
            elemento += mensagem[index];
        } else {
            if(mensagem[index] == "a"){
                elemento += "ai";
            } else if (mensagem[index] == "e") {
                elemento += "enter";
            } else if (mensagem[index] == "i") {
            elemento += "imes";
            }else if (mensagem[index] == "o") {
                elemento += "ober";
            }else if (mensagem[index] == "u") {
                elemento += "ufat";
            } else {
                elemento += mensagem[index];
            } 
        }
    }
    msgCriptografada.innerHTML = mensagem;
    msgCriptografada.classList.add('visivel');
});

/*      btnCriptografar.addEventListener('click',()=>{
    mensagem = txtAreaCriptografar.value;
    //console.log(mensagem);
    if(mensagem != ''){
        limparDados(msgDescriptografada);
        limparDados(msgCriptografada);
        //mensagem = 'o teste mais real possivel';
        mensagem = mensagem.replaceAll('a','ai');
        mensagem = mensagem.replaceAll('e','enter');
        mensagem = mensagem.replaceAll('i','imes');
        mensagem = mensagem.replaceAll('o','ober');
        mensagem = mensagem.replaceAll('u','ufat');
        //msgDescriptografada.innerHTML = '';
        
        console.log(mensagem);
        msgCriptografada.innerHTML = mensagem;
        msgCriptografada.classList.add('visivel');

    } else {
        alert('Mensagem inválida. Insera uma mensagem.')
    }
}); */

const limparDados = () => {
    txtAreaCriptografar.classList.add('opacidade');
    txtAreaDescriptografar.classList.add('opacidade');

    btnCriptografar.classList.add('opacidade');
    btnDescriptografar.classList.add('opacidade');

    msgCriptografada.classList.remove('visivel');
    msgDescriptografada.classList.remove('visivel');

};