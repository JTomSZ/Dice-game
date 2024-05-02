function carregar(){
    var d1 = document.querySelectorAll("img")[0];
    var d2 = document.querySelectorAll("img")[1];
    var title = document.querySelector("#title");
    var numeroAl1 = Math.floor((Math.random() * 6)) + 1;
    var numeroAl2 = Math.floor((Math.random() * 6)) + 1;
    var randomDiceImage1 = "./images/dice" + numeroAl1 + ".png";
    var randomDiceImage2 = "./images/dice" + numeroAl2 + ".png";
    console.log(numeroAl1);
    console.log(numeroAl2);   
    d1.src=randomDiceImage1;
    d2.src=randomDiceImage2;

    if(numeroAl1 > numeroAl2){
        title.innerHTML = "PLAYER 1 <br> GANHOU 🚩"
        
    }
    else if(numeroAl2 > numeroAl1){
        title.innerHTML = "PLAYER 2 <br> GANHOU 🚩"
        
    }
    else{
        title.innerHTML = "EMPATE! 😕"
    }
}