let nomeJogador = prompt("Informe o nome do jogador");
let partidas = parseInt(prompt("Informe a quandidade de partidas que jogou"))
let partidasGanhas = parseInt(prompt("Informe quantas partida o heroi ganhou"));
let xpJogador = 0;
let jogatorTemXp ;
let rankJogador = "";

while (partidas >= partidasGanhas) {
    xpJogador = xpJogador + 200;
    console.log(xpJogador);
    partidasGanhas++;
}


if(xpJogador != 0){
    jogatorTemXp = true;
}

switch (jogatorTemXp) {
    case (xpJogador <= 1000):
        rankJogador = "Ferro";
        break;
    case (xpJogador <= 2000):
        rankJogador = "Bronze";
        break;
    case (xpJogador <= 3000):
        rankJogador = "Prata";
        break;
    case (xpJogador <= 4000):
        rankJogador = "Ouro";
        break;
    case(xpJogador <= 5000):
        rankJogador = "Platina";
        break;
    case(xpJogador <= 6000):
        rankJogador = "Ascendente";
        break;
    case(xpJogador <= 7000):
        rankJogador = "Imortal";
        break;
    case(xpJogador >= 8000):
        rankJogador = "Radiante";
        break;

    default:
        break;
}

alert(`O Heroi de nome ${nomeJogador} está no ranking de ${rankJogador} e possui ${xpJogador} xp`);