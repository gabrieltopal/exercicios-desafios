function carregar() {
    var saudação = document.querySelector('div#saudação')
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        saudação.innerHTML = 'Bom dia!'
        img.src = '../midia/manhã.png'
        document.body.style.background = '#e2c18e'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        saudação.innerHTML = 'Boa tarde!'
        img.src = '../midia/tarde.png'
        document.body.style.background = '#f07d3c'
    } else {
        // BOA NOITE!
        saudação.innerHTML = 'Boa noite!'
        img.src = '../midia/noite.png'
        document.body.style.background = '#162f36'
    }
}