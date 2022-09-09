const form = document.getElementById('form')
const username = document.getElementById('username')
const CPF = document.getElementById('CPF')
const telefone = document.getElementById('telefone')
const enviar = document.getElementById('enviar')
 
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()

})

function checkInputs(){
    const usernameValue = username.value.trim()
    const CPFValue = CPF.value.trim()
    const telefoneValue = telefone.value.trim()
    const enviarValue = enviar.value.trim()

    if(usernameValue ===''){
        //mostra o erro
        // adicionando a classe ERROr
        errorValidação(username, 'Preencha esse campo!!')
    }

}

function errorValidação(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
}