console.log("js file loaded");

$(document).on ("pagecreate", "#pagenine", function() {
 console.log("pagecreate - pagenine");

    
$("#TeamChallenge").on("click",function(){

    console.log("nextButton - tap");

    var rnd = random(12);

    console.log("random = " + rnd);

    
    if (rnd==0) {

$("#Statement4").text ("Name as many Marvel characters");

}

else if(rnd==1){

$("#Statement4").text ("Name as many Disney characters");

}
 else if (rnd==2) {

$("#Statement4").text ("Charades: Name the film: Castaway");

}
     else if (rnd==3) {

$("#Statement4").text ("Name the film: “ life is like a box of chocolates");

}
        else if (rnd==4) {

$("#Statement4").text ("Charades: Name the film: Frozen");

}
        else if (rnd==5) {

$("#Statement4").text ("Charades: Name the TV show: “Big bang theory");

}
        else if (rnd==6) {

$("#Statement4").text ("Charades: Name the TV show: Doctor who");

}
           else if (rnd==7) {

$("#Statement4").text ("Charades: Name the TV show: Game of thrones");

}
           else if (rnd==8) {

$("#Statement4").text ("Chardes:1 person Guess the animal-dog");

}
           else if (rnd==9) {

$("#Statement4").text ("Charades:1 person  Guess the animal-elephant");

}
           else if (rnd==10) {

$("#Statement4").text ("Charades:1 person Guess the animal-armadillo ");

}
           else if (rnd==11) {

$("#Statement4").text ("Take a selfie with two or more friends");

}   
   
});

function random(numberResponses){

return Math.round(Math.random() * numberResponses);
}
});