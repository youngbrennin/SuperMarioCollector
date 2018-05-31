var computerNumber = Math.floor(Math.random() * 51) + 50;
var wins = 0;
var losses= 0;
var mushroomVal = Math.floor(Math.random() * 20) + 1;
var flowerVal = Math.floor(Math.random() * 20) + 1;
var featherVal = Math.floor(Math.random() * 20) + 1;
var starVal = Math.floor(Math.random() * 20) + 1;
var totalScore = 0;

$(document).ready(function(){
    
    $(".button").click(function(event){
        var choice = event.target.id

        if (choice === "mushroom"){
            totalScore += mushroomVal
        }



        $(".total-score").text(totalScore);
        
    });
$(".comp-numb").text(computerNumber);

//finish if statement with else if's
//check to see if computer number is equal to totalscore
//wins++ or loss++ if over
//reset values after win or loss


})

