
function myfunc(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[1];


image1.setAttribute("src", randomImageSource); 



var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber2 + ".png"; 

var randomImageSource = "images/" + randomDiceImage; 

var image2 = document.querySelectorAll("img")[2];


image2.setAttribute("src", randomImageSource); 






if (randomNumber1 > randomNumber2){

    let  parent = document.getElementById('win');
    let children = parent.querySelector('p').innerHTML="Player 1 won ";

}
else if(randomNumber2> randomNumber1) {
    let  parent = document.getElementById('win');
    let children = parent.querySelector('p').innerHTML="Player 2 won ";
}
else{
    let  parent = document.getElementById('win');
    let children = parent.querySelector('p').innerHTML=" DRAW!";
}

}




