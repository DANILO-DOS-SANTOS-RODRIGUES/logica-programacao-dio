// cuidados ao trabalhar com funções e funções com parametros

let nome = "";
var nomes //não é recomendado pois essa é uma variavel global que pode ser acessada em diversas partes do codigo.

/* esse name = "" é para colocar um valor default caso não atribua ium valor no escopo*/
function torrar(pao, valor, name = "Cliente"){//O valor opcional tem que ser o ultimo pois n pode haver um encontro duplo ",,"
    console.log(`A torrada é feita com pão ${pao}`);
    console.log(`Ela é um pedido feito por ${name}`);
    console.log(`O valor total é: ${valor}`)
    //console.log(name); assim como o pao só existe nessa função o name só existe em teste()
}

//uma variavel criada fora da função pode ser usada dentro mas uma criada dentro não pode ser usada fora
function testes(){
    nome = "Danilo";
    nomes = "Joser";
    let nameTeste = "Clodovildo";
    console.log(`Nome: ${nome}, ${nomes}, ${nameTeste}`);
    /*console.log(pao); isso da erro 
    pois pão é uma variavel que só existe no escopo de torrar() não podendo ser usada em outros lugares*/
}

torrar("Integral", "Victraunimo", 10.90);
testes();
console.log(` teste Nome: ${nome}, ${nomes}, ${nameTeste}`);