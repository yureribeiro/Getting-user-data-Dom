const form = document.getElementById('form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  //pegando valores preenchidos no form
  const inputName = document.getElementById('name').value
  const inputAge = document.getElementById('age').value
  const inputConfirm = document.getElementById('confirmAge').value

  //confirmando idade
  if(inputAge !== inputConfirm) {
    alert ('Sua idade não confirma')
  } else {
    alert ('Registrado com sucesso')
      //criar lista com dados preenchidos
 function addUser() {
  const ul = document.getElementById('dados')

  const newName = document.createElement('li')
    newName.className = 'nomeUser'
    newName.innerText = `Nome: ${inputName}`

  const newAge = document.createElement('li')
    newAge.className = 'idadeUser'
    newAge.innerText = `Idade: ${inputAge}`

  const newConfirm = document.createElement('li')
    newConfirm.className = 'confirmUser'
    newConfirm.innerText = `Confirma Idade: ${inputConfirm}`

    ul.appendChild(newName)
    ul.appendChild(newAge)
    ul.appendChild(newConfirm)
  }
  }
 
 addUser()
})
   