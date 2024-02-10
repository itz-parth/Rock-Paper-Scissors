
const opt = ["Rock", "Paper", "Scissors"];
let result = "";
let plrWin = 0;
let compWin = 0;
let compDisplay = document.getElementById('compWin');
let plrDisplay = document.getElementById('plrWin');

function play(playerOpt){
    let compOpt = opt[Math.floor(Math.random() * 3)];
    if(playerOpt == compOpt){
        result = "Its a Tie!"
    }else{
        switch(playerOpt){
            case "Rock":
                result = (compOpt=='Scissors' && (plrWin++, "YOU WIN!")) || (++compWin, "YOU LOSE!");
                break;
            case "Paper":
                result = (compOpt=='Rock' && (++plrWin, "YOU WIN!")) || (++compWin, "YOU LOSE!");
                break;
            case "Scissors":
                result = (compOpt=='Paper' && (++plrWin, "YOU WIN!")) || (++compWin, "YOU LOSE!");
                break;
        }
    }
    document.getElementById('plrDisplay').innerHTML = playerOpt;
    document.getElementById('compDisplay').innerHTML = compOpt;
    document.getElementById('resultDisplay').innerHTML = result;

    plrDisplay.innerHTML = plrWin;
    compDisplay.innerHTML = compWin;


    if(plrWin>=10 || compWin>=10){
        reset()
    }

    console.log(result);
}

function reset(){
    plrWin = 0;
    compWin = 0;
    plrDisplay.innerHTML = plrWin;
    compDisplay.innerHTML = compWin;
    document.getElementById('plrDisplay').innerHTML = " ";
    document.getElementById('compDisplay').innerHTML = " ";
    document.getElementById('resultDisplay').innerHTML = " "
}
