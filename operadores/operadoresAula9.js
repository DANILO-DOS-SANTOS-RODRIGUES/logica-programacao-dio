//operadores logicos

// NOT ! Nega uma afirmacao, tambem eh possivel alterar o valor de uma variavel booleana 

let tempo = "chuva";
let horario = 8;

let resultado = tempo === "chuva"; // a pergunta aqui seria: o tempo eh chuva?
console.log(resultado);
console.log(!resultado);
console.log(!!resultado);

resultado = tempo !== "chuva"; // a pergunta aqui seria: o tempo nao eh chuva?
console.log(resultado);
console.log(!resultado);

console.log("-------------------------------------------------------------------------------");

resultado = (tempo !== "chuva") && (horario > 6);
console.log(resultado);

resultado = !((tempo !== "chuva") && (horario > 6));
console.log(resultado);