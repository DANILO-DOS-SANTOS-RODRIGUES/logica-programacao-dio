//Operadores Relacionais 

// OR || necessita que apenas umas das condicoes seja verdadeira

//O personagem so pode sair se tiver sem chuva OU com guardaChuva;

let tempo = "chuva";
let item = "capa";
let podeSair = (tempo !== "chuva")||(item === "guarda chuva");

console.log(`O personagem pode sair? ${podeSair}`);