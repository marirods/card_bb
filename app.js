'use strict'

const maquiagens = [
    {nome: 'Blush', icon: 'blush.png', cor: 'orange'},
    {nome: 'Iluminador',  icon:  'iluminador.png',  cor: 'salmon'},
    {nome: 'Pinceis', icon:  'pinceis.png',  cor: 'purple'},
    {nome: 'Batom', icon: 'batom.png',  cor: 'brown'}
    
]


function criarMenu(maquiagem) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${maquiagem.icon}`
    novoSpan.textContent = maquiagem.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${maquiagem.cor}`
    lista.appendChild(novoItem)
}


maquiagens.forEach(criarMenu)

const maquiagens1 = [
    {img: 'batom.webp', title:'Mascavo Flush Stick Batom Bastão Peony - 6g', DESCRICAO: 'Batom em bastão com textura cremosa. Versátil e prático, traz aquele toque de pele naturalmente corada com acabamento glow. Enriquecido com óleo de macadâmia, camélia e esqualano vegetal', valor:'49,99'},
    {img: 'kit.webp', title:'Mascavo Trio Blush & Blend 3', DESCRICAO: '1 Mascavo ProBlender Original Esponja de Maquiagem, 1 Mascavo Flush Stick Blush Bastão Peony - 6g, 1 Mascavo Flush Stick Blush em Bastão Maple - 6g', valor:'189,46'},
    {img: 'iluminador.webp', title:'Mascavo Glow Stick Iluminador em Bastão Brûlèe ', DESCRICAO: 'Iluminador em bastão multiuso com textura cremosa e pérolas ultrafinas que refletem a luz, criando um efeito iluminado translúcido. Fórmula inovadora de alta qualidade, proporciona um brilho sutil e radiante', valor:'64,00'},
    {img: 'esponja.webp', title:'Mascavo ProBlender Original & Precision Sponge Set', DESCRICAO: '1 Mascavo ProBlender Esponja de maquiagem Original, 1 Mascavo ProBlender Esponja de maquiagem Precision', valor:'38,90'}
]

const imagemMake = document.createElement('img')

const descricaoMake = document.createElement('p')

imagemMake.src = `./img/${maquiagens.imagem}`

function criarCard(maquiagem){

    const cardsMaquiagem = document.getElementById('card')

    //espaço entre os cards (criar)
    const makewrapper = document.createElement('div')
    makewrapper.classList.add('makeWrapper')

    //estrutura card
    const makediv = document.createElement('div')
    makediv.classList.add('cardInfo')

    // imagem da make
    const imagemMake = document.createElement('img')
    imagemMake.src = `./img/${maquiagem.img}`
    imagemMake.alt = maquiagem.nome

    //div interna
    const maquiagemDiv = document.createElement('div')
    maquiagemDiv.classList.add('informacoes')

    //nome da maquiagem
    const nomeMake = document.createElement('h1')
    nomeMake.textContent = maquiagem.title

    //descricao maquiagem
    const descricaoMake = document.createElement('p')
    descricaoMake.textContent = maquiagem.DESCRICAO

    //preco e botao
    const precoDiv = document.createElement('div')
    precoDiv.classList.add('pb')


    const preco = document.createElement('span')
    preco.textContent = `R$${maquiagem.valor}`
    precoDiv.appendChild(preco)
    
    //botao 
    const botao = document.createElement('button')
    botao.classList.add('botao')
    botao.textContent = 'COMPRE AGORA'
    precoDiv.appendChild(botao)



   //nome e descricao na div interna
   maquiagemDiv.appendChild(nomeMake)
   maquiagemDiv.appendChild(descricaoMake)

    // imagem, a info, e o botao
    makediv.appendChild(imagemMake)
    makediv.appendChild(maquiagemDiv)
    makediv.appendChild(precoDiv)

    //espaço entre os cards
    makewrapper.appendChild(makediv)

    //container principal
    cardsMaquiagem.appendChild(makewrapper)

    // novosCards.appendChild(make)
    // novosCards.appendChild(titulo)
    // novosCards.appendChild(descricao)
    // cardsMaquiagem.appendChild(novosCards)

    
}

maquiagens1.forEach(criarCard)
// discliplinas.forEach(criarMenu)

