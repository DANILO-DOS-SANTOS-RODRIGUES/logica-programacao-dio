/** trabalhando com funcoes ou matrizes temos duas coisa que podemos utilizar, 
 metodos(acoes que podemos usar ex timePokemon.pop())
 e as propriedades(mostra as caracteristicas da matriz ex timePokemon.length)*/
let timePokemon = [
    ["Pikachu", "M", 2],
    ["Charmander", "F", 3],
    ["Bulbasaur", "M", 9]
]
timePokemon.push(["Kadabra", "F", 3]);

console.log(`O pokemon ${timePokemon[2][0]} eh do sexo ${timePokemon[2][1]} e esta no nivel ${timePokemon[2][2]}`);
alert(timePokemon[1][0]);
console.log(timePokemon);
