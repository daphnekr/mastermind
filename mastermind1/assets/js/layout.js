for(var row = 0; row < 12; row++){
    var row1 = document.createElement("div");
    row1.setAttribute("id", "row+"+row);
    for(var i = 0; i< 4; i++){
        var btn = document.createElement("button");
        btn.setAttribute("id", "button" + row + "-"+ i);
        btn.setAttribute("onclick", "red()");
        row1.appendChild(btn);
    }
    for(var c = 0; c< 4; c++){
        var checks = document.createElement("div");
        checks.setAttribute("id", "check" + row + "-"+ c);
        row1.appendChild(checks);
    }


    mastermind.appendChild(row1);
}
