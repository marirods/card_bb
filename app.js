'use strict'

const discliplinas = [
    {nome: 'PPDM', icon: 'instagram.png'},
    {nome: 'PRO',  icon:  'web.png'},
    {nome: 'PWBE', icon:  'ios.png'},
    {nome: 'PWFE', icon: 'whatsapp.png'}
    
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

    lista.appendChild(novoItem)
}


discliplinas.forEach(criarMenu)

