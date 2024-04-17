//Operadores relacionais

let cpfBloqueado = "123.456.789-01";
let cpfUsuario = "123.456.789-02";

let ehCpfBloqueado = cpfUsuario === cpfBloqueado;

console.log(`O usuario esta barrado? ${ehCpfBloqueado}`);

console. log(`-------------------------------------------------------------------`);

let codigoTicket = "123456";
let ticketUsuario = "123456";

let usuarioPermitido = codigoTicket === ticketUsuario;

if(usuarioPermitido == true){
    console.log(`Bem vindo, acesso liberado`);
}else{
    console.log(`Ticket invalido, acesso negado`);
}
