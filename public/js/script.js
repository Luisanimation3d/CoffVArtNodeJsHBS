const formularioLogin = document.querySelector('#loginBurdeos')

formularioLogin.addEventListener('submit', e =>{
    const validarEmail = /[a-zA-Z0-9\_\.]*@[a-zA-Z09]*\.[a-zA-Z]{3,}/
    e.preventDefault();
    const email = e.target.email.value
    const pass = e.target.pass.value
    try{
        if(email === '' || pass === ''){
            throw 'Todos los campos son obligatorios'
        }

        if(!validarEmail.test(email)){
            throw 'Formato de email invalido'
        }

        if(pass.length < 8){
            throw 'La clave debe tener mas de 8 digitos'
        }
        window.location = 'main'
    }catch(err){
        alert(err)
    }
})