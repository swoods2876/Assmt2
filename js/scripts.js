var scores = [ 24, 32, 17, 89];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for(i = 0; i < arrayLength; i++){
	roundNumber =(i + 1);
	msg += 'round' + roundNumber + ':';
	msg += scores[i] + '<br/>';

}
document.getElementById('answer').innerHTML = msg; 

var score = 75;
var msg;

if (score >= 50){
	msg = 'congratulations';
	msg += 'Proceed to the next round.';

}
var el = document.getElementById ('answer2');
el.textContent = msg;


var favoriteThings = ["art", "photography", "sculpture", "installation art", "architecture"];
var arrayLength = favoriteThings.length;
var roundNum = 0;
var msg ='';
var i;

for(i = 0; i < 5; i++){
	roundNum =(i + 1);
	msg += 'My #' + roundNum  + ' Favorite thing is:' + favoriteThings[i] + ':' + '<br/>';

}
document.getElementById("answer2").innerHTML = msg; 


var text = "";
var newText = "buzz";
var newText2 = "fizz";
var newText3 = "fizzbuzz";
var i;
for (i = 0; i < 100; i++) 
{
	text +=  i + "<br>";
    if (i % 3 == 0 ) 
    text += i + newText  + "<br>";
    if (i % 5 == 0 ) 
    text += i + newText2 + "<br>";
    if (i % 5 == 0 & i % 3 == 0)
    text += i + newText3 + "<br>";
     
   
}
document.getElementById("answer3").innerHTML = text;

for (var ii=0; ii < 100; ii++)
{
    if (ii%10 == 0) console.log("");
}