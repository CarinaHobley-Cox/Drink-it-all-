console.log("js file loaded");

$(document).on ("pagecreate", "#pageseven", function() {
 console.log("pagecreate - pageseven");

    
$("#CrazyNight").on("click",function(){

    console.log("nextButton - tap");

    var rnd = random(11);

    console.log("random = " + rnd);

    
    if (rnd==0) {

$("#Statement2").text ("Drink 2 sips if you’re the youngest here");

}

else if(rnd==1){

$("#Statement2").text ("All men drink 3 sips");

}
 else if (rnd==2) {

$("#Statement2").text ("All ladies drink 3 sips");

}
     else if (rnd==3) {

$("#Statement2").text ("Oldest player down your drink");

}
        else if (rnd==4) {

$("#Statement2").text ("Youngest player gives out 4 sips to who ever");

}
        else if (rnd==5) {

$("#Statement2").text ("Drink 5 sips if you have brown eyes");

}
        else if (rnd==6) {

$("#Statement2").text ("Drink sips if you have brown hair");

}
           else if (rnd==7) {

$("#Statement2").text ("Give out 6 sips if you are wearing anything black");

}
           else if (rnd==8) {

$("#Statement2").text ("Recent person to have a poo give out 10 sips");

}
           else if (rnd==9) {

$("#Statement2").text ("Drink 5 sips if you are not wearing many clothes");

}
           else if (rnd==10) {

$("#Statement2").text ("Everyone down your drink");

}
});

function random(numberResponses){

return Math.round(Math.random() * numberResponses);
}
});