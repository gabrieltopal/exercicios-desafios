
function calcular() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let msg = document.querySelector('div#msg')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        msg.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            msg.innerHTML = `<p>Altere o passo! Considerando passo = 1.</p>`
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
            msg.innerHTML += ` ${c} &#x1F449;`
            } 
        }   else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
            msg.innerHTML += ` ${c} &#x1F449;`
            }
        }   
    msg.innerHTML += `&#x1F3C1;`
    }
}
