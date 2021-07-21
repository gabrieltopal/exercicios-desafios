let amigo = {
    nome: 'Fernando Souza',
    sexo: 'M',
    peso: 95.4,
    engordar(p){
        console.log('Engordou!')
        this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
