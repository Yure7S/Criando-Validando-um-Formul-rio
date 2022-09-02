// Eventos

// Selecionando os elementos
const buton = document.querySelector('#formulario .buton');
const email = document.querySelector('#formulario .username');
const senha = document.querySelector('#formulario .password'); 
const firstitem = document.querySelector('#itens');
const ulist = document.querySelector('.usuarios #ulist');
const confsenha = document.querySelector('#formulario .confsenha');
const contentalert = document.querySelector('#formulario #contentalert')
const alertpass = document.querySelector('#formulario .alertpass')
const dellelement = document.querySelector('#ulist li i')

// Criando evento para o butão do formulário
buton.addEventListener('click', function(e) {
    e.preventDefault(); // Resetando a função do "submit"

    checkupInputs()
})

// Deletando elementos
dellelement.addEventListener('click', function(){

})


// Validação
function checkupInputs(){

    // Atribuindo os valores inseridos no input
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const confsenhaValue = confsenha.value.trim();

    // Criando validação de formulário
    if(emailValue === "" || senhaValue === ""){
        contentalert.style.display = "initial"; // Mostrando mensagem de erro

    } else if(confsenhaValue != senhaValue){ // Igualando senhas
        contentalert.style.display = "none";
        alertpass.style.display = "initial";
        confsenha.classList = "alertimput";

    } else {
        contentalert.style.display = "none";
        alertpass.style.display = "none";
        confsenha.classList = "resetinput";

        // Adicionando usuário a lista
        // Criando "span" para li
        const spanemail = document.createElement('span');
        spanemail.textContent = `E-mail: ${emailValue}`;

        const spansenha = document.createElement('span');
        spansenha.textContent = `Senha: ${senhaValue}`;

        // Criando botão delete
        let trash = document.createElement('i');
        trash.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        trash.classList = "delete";

        // Criando a "li" para listar o usuário
        const li = document.createElement('li');
        li.appendChild(spanemail); // Atrubuindo o conteúdo da li com o método appendChild
        li.appendChild(spansenha);
        li.appendChild(trash);

        // O Método ".appendChild" serve para adicionar um elemento dentro de outro
        ulist.appendChild(li); // Inserindo a "li" dentro da "ul"

        // Limpando os inputs
        email.value = "";
        senha.value = "";
        confsenha.value = "";
    }
}

