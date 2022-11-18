function menu() {
    const botaoMenu = document.querySelector('.botao--menu')
    const menu = document.querySelector('.sair--inativo')

    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('sair--ativo')
    })
}