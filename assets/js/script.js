// ! Declaração de variaveis
// tipagem por inferencia
// var nome; // Padrão antigo, evitem usar (variavel de escopo global)
//  variaveis de escopo local
// let resultado; // Let it change -> (variavel que pode mudar de valor)
// const nome = 'Thiago'; // Constant -> (variavel que não vai mudar de valor)

// function dataAtual() {
//   alert(Date())
// }

// ! Gets de elementos da tela
// const perfil = document.getElementById('perfil') -> pega pelo ID perfil
// const perfil = document.getElementsByClassName('perfil') -> pega pela classe
// const perfil = document.getElementsByName('name') -> pega pelo atributo name
// const perfil = document.getElementsByTagName('name') -> pega pela tag
// const perfil = document.querySelector('.perfil')

const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

const mapa = document.querySelector('#mapa')


function validaNome() {
  let txtNome = document.querySelector("#txtNome")

  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome muito curto'
    txtNome.style.color = 'red'
    nomeOk = false
  } else {
    txtNome.innerHTML = 'Nome ok'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaEmail2() {
  // criação do padrão de email, vai aceitar caracteres + @ + caracteres + . + 2 ou 3 caracteres pra finalizar
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  // o if será feito de uma forma diferente, verificando se o que a pessoa digitou condiz com o padrão do e-mail (match)
  // caso de certo, e-mail válido, senão, e-mail inválido
  if(email.value.match(regex)) {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
  }
}

function validaMensagem() {
  let txtMensagem = document.querySelector('#txtMensagem')

  if(mensagem.value.length >= 10) {
    txtMensagem.innerHTML = 'Mensagem muito grande, da até preguiça de ler'
    txtMensagem.style.color = 'red'
    mensagemOk = false
  } else {
    txtMensagem.innerHTML = 'Mensagem ok'
    txtMensagem.style.color = 'green'
    mensagemOk = true
  }
}

function enviarForm() {
  if(nomeOk === true && emailOk === true && mensagemOk === true) {
    alert(nome.value + ', obrigado pelo contato, aguarde nosso retorno.')
  } else {
    alert('Por favor, preencha todos os campos corretamente.')
  }
}

function mapaZoom() {
  mapa.style.aspectRatio = '16/11'
}

function mapaNormal() {
  mapa.style.aspectRatio = '16/9'
}