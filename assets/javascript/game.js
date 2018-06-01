var computerNumber = Math.floor(Math.random() * 51) + 50;
var wins = 0;
var losses= 0;
var mushroomVal = Math.floor(Math.random() * 12) + 1;
var flowerVal = Math.floor(Math.random() * 12) + 1;
var featherVal = Math.floor(Math.random() * 12) + 1;
var starVal = Math.floor(Math.random() * 12) + 1;
var totalScore = 0;


$(document).ready(function(){

    $(".button").click(function(event){
        var choice = event.target.id;

 
        if (choice === "mushroom"){
            totalScore += mushroomVal;
        }

        else if (choice === "flower") {
            totalScore += flowerVal;
        }

        else if (choice === "feather") {
            totalScore += featherVal;
        }

        else if (choice === "star") {
            totalScore += starVal;
        }

        if (totalScore === computerNumber) {
            wins++;
            totalScore = 0;
            computerNumber = Math.floor(Math.random() * 51) + 50;
            mushroomVal = Math.floor(Math.random() * 12) + 1;
            flowerVal = Math.floor(Math.random() * 12) + 1;
            featherVal = Math.floor(Math.random() * 12) + 1;
            starVal = Math.floor(Math.random() * 12) + 1;
            $(".wins").text(wins);
            $(".total-score").text(totalScore);
            $(".comp-numb").text(computerNumber);
                var winner = document.getElementById("winner");
                winner.play();
            $('.help').html("<p>Saved!</p>");
            // reset();
        } 
        
        else if (totalScore > computerNumber) {
            losses++;
            totalScore = 0;
            computerNumber = Math.floor(Math.random() * 51) + 50;
            mushroomVal = Math.floor(Math.random() * 12) + 1;
            flowerVal = Math.floor(Math.random() * 12) + 1;
            featherVal = Math.floor(Math.random() * 12) + 1;
            starVal = Math.floor(Math.random() * 12) + 1;
            $(".losses").text(losses);
            $(".total-score").text(totalScore);
            $(".comp-numb").text(computerNumber);
                var loser = document.getElementById("loser");
                loser.play();
            $('.help').html("<p>Trapped!</p>");
        }

        $(".total-score").text(totalScore);
        
    });

// var reset = function () {
//     totalScore = 0;
//     computerNumber =;


$(".comp-numb").text(computerNumber);

//finish if statement with else if's
//check to see if computer number is equal to totalscore
//wins++ or loss++ if over
//reset values after win or loss

});

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
