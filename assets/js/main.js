const showHiddenPass = (pass,eye) => {
    const input = document.getElementById(pass),
    icon =document.getElementById(eye)

    icon.addEventListener('click', ()=>{
        if(input.type === 'password'){
            input.type = 'text'
            icon.classList.add('fa-eye')
            icon.classList.remove('fa-eye-slash')
        }else{
            input.type = 'password'
            icon.classList.remove('fa-eye')
            icon.classList.add('fa-eye-slash')
        }
    })
}
showHiddenPass('pass','login-eye')