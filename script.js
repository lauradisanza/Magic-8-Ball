$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

 	$("#answer").hide();
   
 magic8Ball.askQuestion = function(question){
	 $("#8ball").effect( "shake" );
	 $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var randomAnswer = this.listOfAnswers[randomIndex];
	 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        $("#answer").text( randomAnswer );
 
        console.log(question);
        console.log(randomAnswer);
    };
 
    var onClick = function() {
	$("#answer").hide();
 
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);
 };
    $("#questionButton").click( onClick );
 
});