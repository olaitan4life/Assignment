var enterButton =document.getElementById('enterButton');
var againButton = document.getElementById('againbutton');
var output = document.getElementById('outputText');

var randomNumber = Math.ceil(Math.random()*1);
  
 function checkNumber(){
    var input = document.getElementById('userInput').value;
    if (input == randomNumber){
        output.innerHTML= "Congratulation " + ", "+ "it is " +  randomNumber +" ,"  + " so move to next stage" ," " + "1 point"
        output.style.color ="green";
    }
   
    
    else if (input < randomNumber == input == 3){
        output.innerHTML =" welcome to next stage"
    

    }
    
    else if (input == randomNumber && input > 2){
        output.innerHTML =" Yaaah!"
    }
  
    
    else if ( input == randomNumber && input == 3 ){
        output.innerHTML = " ";
     }
      else if (input == 3){
       output.innerHTML = "";
    }
    else if(isNaN(input)){
        output.innerHTML = "Is not a number";
    }
    else{
        output.innerHTML = "guest another,between 1 to 2"

      
    }
   
 } 
 enterButton.addEventListener('click',checkNumber);

 
