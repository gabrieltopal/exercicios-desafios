function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano || ano - fAno.value > 100) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', '../midia/foto-crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '../midia/foto-jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '../midia/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', '../midia/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', '../midia/foto-crianca-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', '../midia/foto-jovem-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', '../midia/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', '../midia/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}