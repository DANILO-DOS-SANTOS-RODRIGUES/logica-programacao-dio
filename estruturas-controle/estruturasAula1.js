//IF, ELSE IF, ELSE 

let possuiOvos = true;
let itensComprados =[];

if (possuiOvos){
    itensComprados = [
        ["leite", "1L"],
        ["farinha de trigo", "1Kg"],
        ["chocolate", "2x400g"],
        ["fermento", "1un"]
    ];
    console.log(`Itens comprados: ${itensComprados}`);
}else{
    itensComprados = [
        ["Ovos", "12un"],
        ["leite", "1L"],
        ["farinha de trigo", "1Kg"],
        ["chocolate", "2x400g"],
        ["fermento", "1un"]
    ];
    console.log(`Itens comprados: ${itensComprados}`);
}

let nivelDeFome = 1;

if(nivelDeFome === 1){
    console.log("Pouca Fome")
}else if(nivelDeFome === 2){
    console.log("Muita Fome")
}else{
    console.log("Voce esta morrendo de fome");
}