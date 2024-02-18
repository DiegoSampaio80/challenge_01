//Variáveis que receberão os valores dos textareas.
let mensagem = '';
let elemento = '';
let vogalA = "ai";
let vogalE = "enter";
let vogalI = "imes";
let vogalO = "ober";
let vogalU = "ufat";  
//Varáveis que receberão os elementos que serão manipulados.
const sectionEnterData = document.querySelector('#sectionEnterData');
const txtAreaCriptografar = document.querySelector('#txtAreaCriptografar');
const txtAreaDescriptografar = document.querySelector('#txtAreaDescriptografar');
const btnCriptografar = document.querySelector('#btnCriptografar');
const btnDescriptografar = document.querySelector('#btnDescriptografar');
const btnLimparDescriptografar = document.querySelector('#btnLimparDescriptografar');
const btnLimparCriptografar = document.querySelector('#btnLimparCriptografar');
const msgCriptografada = document.querySelector('#msgCriptografada');
const msgDescriptografada = document.querySelector('#msgDescriptografada');

//Adição de um "escutador" para quando o textarea for focado executar a limpeza e alteração dos campos e elementos.
txtAreaCriptografar.addEventListener('focus', ()=>{
    limparDados(txtAreaDescriptografar,btnDescriptografar, btnLimparDescriptografar,msgDescriptografada);
    areaSelecionada(txtAreaCriptografar, btnCriptografar, btnLimparCriptografar);    
});

txtAreaDescriptografar.addEventListener('focus', ()=>{
    limparDados(txtAreaCriptografar,btnCriptografar, btnLimparCriptografar,msgCriptografada);
    areaSelecionada(txtAreaDescriptografar, btnDescriptografar, btnLimparDescriptografar);
});

//Adição de um "escutador" para quando o button for clicado executar a limpeza e alteração dos campos e elementos.
btnLimparCriptografar.addEventListener('click', ()=>{
    limparDados(txtAreaCriptografar,btnCriptografar, btnLimparCriptografar,msgCriptografada);
    areaDesselecionada(txtAreaCriptografar,btnCriptografar, btnLimparCriptografar,msgCriptografada);
});

btnLimparDescriptografar.addEventListener('click', ()=>{
    limparDados(txtAreaDescriptografar,btnDescriptografar, btnLimparDescriptografar,msgDescriptografada);
    areaDesselecionada(txtAreaDescriptografar,btnDescriptografar, btnLimparDescriptografar,msgDescriptografada);
});

//Adição de um "escutador" para quando o textarea.
txtAreaCriptografar.addEventListener('input', (e) => {
    //Variável que amazena o valor do elemento alvo alterado
    let textoDigitado = e.target.value;
    //Variável que amazena o valor d a invocação da função remove Acentos
    let textoSemAcento = removerAcentos(textoDigitado);
    //O valor do elemento recebe o texto sem caracteres especiais.
    e.target.value = textoSemAcento;
});

txtAreaDescriptografar.addEventListener('input', (e) => {
    let textoDigitado = e.target.value;
    let textoSemAcento = removerAcentos(textoDigitado);
    e.target.value = textoSemAcento;
});

//Adição de um "escutador" ao button que executa a ação de armazenar o valor do textarea na varialvel mensagem.
btnDescriptografar.addEventListener('click', ()=>{
    mensagem = txtAreaDescriptografar.value;
});

btnCriptografar.addEventListener('click', ()=>{
    mensagem = txtAreaCriptografar.value;
});    

//Adição de um "escutador" ao button que executa a ação de descriptografar a mensagem.
btnDescriptografar.addEventListener('click',()=>{
    //Invocação da função que faz a limpeza dos campos e a alteração dos estados e estilos dos elementos.
    limparDados(txtAreaCriptografar, btnCriptografar, btnLimparCriptografar, msgDescriptografada);
    //Condicional que verificar se a mensagem não está vazia.
    if(mensagem != ''){
        //Verifica se a mensagem tem a palavra específica e substitui por uma letra.
        mensagem = mensagem.replaceAll('ai','a');
        mensagem = mensagem.replaceAll('enter','e');
        mensagem = mensagem.replaceAll('imes','i');
        mensagem = mensagem.replaceAll('ober','o');
        mensagem = mensagem.replaceAll('ufat','u');
        //Paragrafo que apresenta o texto convertido recebe o valor da da mensagem.
        msgDescriptografada.innerHTML = mensagem;
        //Paragrafo que apresenta o texto convertido recebe a classe "visivel" para aparecer na tela.
        msgDescriptografada.classList.add('visivel');
    } else {
        //Condicional que dispara um alerta para o ususário quando a mensagem está vazia.
        alert('Campo de mensagem não pode está vazio. Insira uma mensagem antes de clicar no botão.')
    }
});

//Adição de um "escutador" ao button que executa a ação de descriptografar a mensagem.
btnCriptografar.addEventListener('click',()=>{
     //Invocação da função que faz a limpeza dos campos e a alteração dos estados e estilos dos elementos.
    limparDados(txtAreaDescriptografar, btnDescriptografar, btnLimparDescriptografar, msgCriptografada);
    //Condicional que verificar se a mensagem não está vazia.
    if(mensagem != ''){
        //Laço de repitção para percorrer a mensagem, baseado em seu tamanho.
        for (let index = 0; index < mensagem.length; index++) {
            //Variável armazena o código unicode da letra.
            let codigoCaracter = mensagem[index].charCodeAt(0);
            //Condicional que verificar se é uma letra maiúscula.
            if(codigoCaracter >= 65 && codigoCaracter <= 90){
                //Adiciona a letra maiúscula sem alterações a variável "elemento".
                elemento += mensagem[index];
            } else {
                //Condicional a letra e substitui pela sílaba correpondente.
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
                    //Caso não encontre correspondências insera a própria letra.
                    elemento += mensagem[index];
                } 
            }
        }
        //Paragrafo que apresenta o texto convertido recebe o valor da da mensagem.
        msgCriptografada.innerHTML = elemento;
        //Paragrafo que apresenta o texto convertido recebe a classe "visivel" para aparecer na tela.
        msgCriptografada.classList.add('visivel');
    } else {
        //Condicional que dispara um alerta para o ususário quando a mensagem está vazia.
        alert('Campo de mensagem não pode está vazio. Insira uma mensagem antes de clicar no botão.')
    }
    
});
//Função que recebe quatro parâmetros que sofreão limpeza dos valores e alterações de estado e estilo.
const limparDados = (area = '', btnAcao ='', btnLimpar='', msgAcao ='') => {
    msgAcao.classList.remove('visivel');
    elemento = '';
    msgAcao.value = '';
    area.value = '';
    area.classList.add('opacidade');
    btnAcao.classList.add('opacidade');
    btnLimpar.classList.add('opacidade');
    btnAcao.classList.remove('btnHover');
    msgAcao.classList.remove('visivel');
    btnLimpar.classList.remove('btnHover');
};

//Função que executa as alterações de estado e estilo quando escutador do textarea é focado ou clicado.
const areaSelecionada = (area, btnAcao, btnlimpar) =>{
    area.classList.remove('opacidade');
    btnAcao.classList.remove('opacidade');
    btnlimpar.classList.remove('opacidade');
    btnAcao.classList.add('btnHover');
    btnlimpar.classList.add('btnHover');
};

//Função que executa as alterações de estado e estilo quando escutador do button "Limpar" clicado.
const areaDesselecionada = (area, btnAcao, btnlimpar) =>{
    area.classList.add('opacidade');
    btnAcao.classList.add('opacidade');
    btnlimpar.classList.add('opacidade');
    btnAcao.classList.remove('btnHover');
    btnlimpar.classList.remove('btnHover');
};

/* Função que recebe um texto como parâmetro, traz a letra para forma normal - separando o acento -, e 
   substitui o acento por nada. */
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
