console.log("js file loaded");

$(document).on ("pagecreate", "#pageeight", function() {
 console.log("pagecreate - pageeight");

    
$("#NeverHaveIEver").on("click",function(){

    console.log("nextButton - tap");

    var rnd = random(16);

    console.log("random = " + rnd);

    
    if (rnd==0) {

$("#Statement3").text ("Watched porn");

}

else if(rnd==1){

$("#Statement3").text ("Had sex");

}
 else if (rnd==2) {

$("#Statement3").text ("Done drugs");

}
     else if (rnd==3) {

$("#Statement3").text ("Sent Nudes");

}
        else if (rnd==4) {

$("#Statement3").text ("Been Kissed");

}
        else if (rnd==5) {

$("#Statement3").text ("Being drunk at work");

}
        else if (rnd==6) {

$("#Statement3").text ("Eaten food that had fallen on the floor");

}
           else if (rnd==7) {

$("#Statement3").text ("Lied about your age");

}
           else if (rnd==8) {

$("#Statement3").text ("Broken something and hidden it");

}
           else if (rnd==9) {

$("#Statement3").text ("Thrown up on someone");

}
           else if (rnd==10) {

$("#Statement3").text ("Laughed so hard I peed my pants");

}
           else if (rnd==11) {

$("#Statement3").text ("Stolen money from someone");

}   
           else if (rnd==12) {

$("#Statement3").text ("Cheated on someone");

}   
    
          else if (rnd==13) {

$("#Statement3").text ("Kissed someone of the same sex");

}    
    
            else if (rnd==14) {

$("#Statement3").text ("Had a one night stand");

}  
    
            else if (rnd==15) {

$("#Statement3").text ("Had to run to save your life");

}  
             else if (rnd==15) {

$("#Statement3").text ("Stayed awake for more than 48 hours straight");

}    
});

function random(numberResponses){

return Math.round(Math.random() * numberResponses);
}
});