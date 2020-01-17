var row = 0;
var colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'black'
]
var random1  = Math.floor(Math.random() * colors.length);
var random2 = Math.floor(Math.random() * colors.length);
var random3 = Math.floor(Math.random() * colors.length);
var random4 = Math.floor(Math.random() * colors.length);

var colorArray = [
    answer1 = colors[random1],
    answer2 = colors[random2],
    answer3 = colors[random3],
    answer4 = colors[random4]
]
var text = document.getElementsByTagName("p")[0];
var checkBtn = document.getElementById("check");
console.log(colorArray);

text.innerHTML = "Uitleg: Klik op de grote ronde buttons om de kleuren te veranderen. Voordat je naar de volgende button gaat moet je op de grote button 'next button' klikken. Als je bij de laatste bent klik je onderaan op 'check'";


function check(){
    text.innerHTML = "";
    for(column = 0; column < 4; column++){
        btn = document.getElementById("button"+row+"-"+column);
        btnValue = btn.value;
        checks = document.getElementById("check"+row+"-"+column);
        
        if(colorArray[column] === btnValue){
            checks.style.height = "30px";
            checks.style.width = "30px";
            checks.style.background = "red";
            checks.style.border = "2px solid #000000";
            checks.style.borderRadius = "40px"
        }
    }

    for(column = 0; column < 4; column++){

        if (colorArray.includes(btnValue)){
                checks.style.height = "30px";
                checks.style.width = "30px";
                checks.style.background = "white";
                checks.style.border = "2px solid #000000";
                checks.style.borderRadius = "40px"
        }

    }
        var checkColors = 0;

        for (column = 0 ; column < 4; column++){
            btn = document.getElementById('button'+row+'-'+column);
            btnValue = btn.value;
            if (colorArray[column] != btnValue){
                checkColors = 1;
            }
        }
        
        if(checkColors == 0){
            text.innerHTML = "Je hebt het kleurcode geraden! Gefeliciteerd. Speel opnieuw."
            checkBtn.innerHTML = "Speel opnieuw";
            checkBtn.setAttribute("onclick", "playAgain()");
            checkBtn.style.background = "rgb(128, 255, 96)";
        }

        if(checkColors == 1){
            row++;
        }
        console.log(row);
        if (row == 12){
            text.innerHTML = "Je hebt de kleurcode niet geraden. De juiste kleurcode was: "+ colorArray + ". Speel opnieuw."
            checkBtn.innerHTML = "Speel opnieuw";
            checkBtn.setAttribute("onclick", "playAgain()");
            checkBtn.style.background = "rgb(128, 255, 96)";
        }
        column = 0;
        
}
var column = 0;
function next(){
    console.log(document.getElementById("button"+row+"-"+column).value);
    column++;
    document.getElementById("button"+row+"-"+column).style.background = "rgb(119, 119, 119)";
}

function red(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "red";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "blue()"); 
    document.getElementById("button"+row+"-"+column).setAttribute("value", "red");
}
function blue(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "blue";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "green()"); 
    document.getElementById("button"+row+"-"+column).setAttribute("value", "blue");

}
function green(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "green";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "yellow()"); 
    document.getElementById("button"+row+"-"+column).value = "green";
}
function yellow(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "yellow";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "orange()"); 
    document.getElementById("button"+row+"-"+column).value = "yellow";
}
function orange(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "orange";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "black()"); 
    document.getElementById("button"+row+"-"+column).value = "orange";

}
function black(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "black";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "red()"); 
    document.getElementById("button"+row+"-"+column).value = "black";

}

function playAgain(){
    location.reload();
}
