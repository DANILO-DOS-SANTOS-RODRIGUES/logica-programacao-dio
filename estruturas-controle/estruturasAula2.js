//estruturas de decisao swich-case /break/default 

let fruta = "abacate";

switch (fruta){
    case "laranja":
        console.log("Suco de laranja");
    break

    case "banana":
    case "abacate":
        console.log(`Vitamina de ${fruta}`);
    break

    case "maca":
        console.log("suco de maca");
    break

    default:
        console.log("Suco Generico");
        //console.log(`suco de ${fruta}`);
}

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log(day);
      break;
    case 1:
      day = "Monday";
      console.log(day);
      break;
    case 2:
       day = "Tuesday";
       console.log(day);
      break;
    case 3:
      day = "Wednesday";
      console.log(day);
      break;
    case 4:
      day = "Thursday";
      console.log(day);
      break;
    case 5:
      day = "Friday";
      console.log(day);
      break;
    case 6:
      day = "Saturday";
      console.log(day);
  }