const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const CPF = document.getElementById('CPF')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
 
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()

})

function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const CPFValue = CPF.value.trim()
    const telefoneValue = telefone.value.trim()
    const mensagemValue = mensagem.value.trim()

    if(usernameValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidacao(username, 'Preencha esse campo!!')
    } else {
        successValidacao(username)
    }

    if(emailValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidacao(email, 'Preencha esse campo!!')
    } else {
        successValidacao(email)
    }

    if(CPFValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidacao(CPF, 'Preencha esse campo!!')
    } else {
        successValidacao(CPF)
    }

    if(telefoneValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidacao(telefone, 'Preencha esse campo!!')
    } else {
        successValidacao(telefone)
    }

    if(emailValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidacao(email, 'Preencha esse campo!!')
    } else {
        successValidacao(email)
    }
    
    if(mensagemValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidacao(mensagem, 'Preencha esse campo!!')
    } else {
        successValidacao(mensagem)
    }

}

function errorValidacao(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}
function successValidacao(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}
