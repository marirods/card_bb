'use strict'

const discliplinas = [
    {nome: 'PPDM', icon: 'instagram.png', cor: 'orange'},
    {nome: 'PRO',  icon:  'web.png',  cor: 'salmon'},
    {nome: 'PWBE', icon:  'ios.png',  cor: 'pink'},
    {nome: 'PWFE', icon: 'whatsapp.png',  cor: 'plum'}
    
]


function criarMenu(discliplina) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${discliplina.icon}`
    novoSpan.textContent = discliplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${discliplina.cor}`
    lista.appendChild(novoItem)
}


discliplinas.forEach(criarMenu)

