let num = [5, 2, 3, 4, 7, 1, 9]

/*
console.log(`O vetor 'num' possui ${num.length} elementos.`)
console.log(`O primeiro elemento é o ${num[0]}!`)
console.log(`O último elemento é o ${num[num.length-1]}!`)

num.sort()
console.log('Agora vejamos como ficam posicionados os elementos depois de colocá-los em ordem crescente:')
for (var c = 0; c < num.length; c++) {
    console.log(`O elemento de índice ${c} é o ${num[c]}`)
}
*/

for(let c in num) {
    console.log(`O elemento de índice ${c} é o ${num[c]}`)
}