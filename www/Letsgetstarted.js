console.log("js file loaded");

$(document).on ("pagecreate", "#pagesix", function() {
 console.log("pagecreate - pagesix");

    
$("#nextButton").on("click",function(){

    console.log("nextButton - tap");

    var rnd = random(11);

    console.log("random = " + rnd);

    
    if (rnd==0) {

$("#Statement").text ("Drink with you left hand only, Drink 2 sips every time you/or someone points it out");

}

else if(rnd==1){

$("#Statement").text ("Swap drinks with the player to the right");

}
 else if (rnd==2) {

$("#Statement").text ("Guess everyone’s age, drink 3 sips if you get it wrong");

}
     else if (rnd==3) {

$("#Statement").text ("Drink 3 sips if you are wearing anything red");

}
        else if (rnd==4) {

$("#Statement").text ("Drink for every sibling you have");

}
        else if (rnd==5) {

$("#Statement").text ("Drink 2 sips if you are wearing anything blue");

}
        else if (rnd==6) {

$("#Statement").text ("Swap drinks with the player to the right");

}
           else if (rnd==7) {

$("#Statement").text ("Everytime someone makes a new drink, everyone take 2 sips");

}
           else if (rnd==8) {

$("#Statement").text ("If you own a cat Drink 5 sips");

}
           else if (rnd==9) {

$("#Statement").text ("Guess the player to your right degree");

}
           else if (rnd==10) {

$("#Statement").text ("Drink 3 sips if this is your first time playing, drink 6 if you have played this before");

}
});

function random(numberResponses){

return Math.round(Math.random() * numberResponses);
}
    
});