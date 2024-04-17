//for
for (let contador = 0; contador < 4; contador++ ){
    console.log(contador);
}



let pontosDeVida = 0;
for(let i = 1; i <= 10; i++){
    pontosDeVida += 1;
    console.log(`Tomou pocao magica ${i}`);
}
console.log(`Vida total ${pontosDeVida}`);


let vida = 15;
for(let hp = 1; hp < 100; hp++){
    if(vida < 1000){
        vida += 30;
        console.log(`Usou pocao de cura ${vida}`)
    }
}