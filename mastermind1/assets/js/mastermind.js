var row = 0;
var color = document.g
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
console.log(colorArray);



function check(){
    var btn;
    for(i=0; i<4; i++){
        btn = document.getElementById("letter"+row+"-"+i);

        if(colorArray[0] === btn.value){
            checks.style.height = "30px";
            checks.style.width = "30px";
            checks.style.background = "black";
            checks.style.border = "2px solid #000000";
            checks.style.borderRadius = "40px"

        }
    }
    for(column = 0; column < 4; column++){
        checks = document.getElementById("check"+row+"-"+column);
        checks.style.height = "30px";
        checks.style.width = "30px";
        checks.style.background = "grey";
        checks.style.border = "2px solid #000000";
        checks.style.borderRadius = "40px"
    }
    row++;
    var column = 0;
}
var column = 0;
function next(){
    column++;
}

function red(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "red";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "blue()"); 
    document.getElementById("button"+row+"-"+column).value = "red";
}
function blue(){

    document.getElementById("button"+row+"-"+column).style.backgroundColor = "blue";  
    document.getElementById("button"+row+"-"+column).setAttribute("onclick", "green()"); 
    document.getElementById("button"+row+"-"+column).value = "blue";

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
