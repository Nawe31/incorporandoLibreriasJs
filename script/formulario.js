const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const boton = document.getElementById("boton")


form.addEventListener ("submit", e=>{
    e.preventDefault()
    let registro =  Swal.fire ({
      position: 'top-center',
      icon: 'success',
      title: 'Bienvenido',
      showConfirmButton: false,
      timer: 1500
    })
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    parrafo.innerHTML = ""



   if(nombre.value.length <6){
   warnings += `El nombre no es valido <br>`
   entrar = true
}

   if(!regexEmail.test(email.value)){
    warnings += `El email no es valido <br>`
    entrar = true

  }

  if(pass.value.length > 6){
    warnings += `El email no es valido <br>`
    entrar = true
  }

  if (entrar){
    parrafo.innerHTML = registro

  
  }
}) 

