
var i = 1;
function returnMe(content, j = i){
    content = "<br><h1>exo "+ j +":</h1><br> "+content;
    document.querySelector("body").innerHTML += content;
    i++;
}

var monTbl = [2, 7, 4, 5, 9];
returnMe(monTbl.sort());


var monTbl = [5, 9, 1];
returnMe(monTbl.sort().reverse());


var monTbl = [5,7,9];
monTbl.push(8);
returnMe(monTbl.sort());

var monTbl = [1, 8, 7, 10];
monTbl.splice(1, 0, 5);
returnMe(monTbl);
returnMe(monTbl.sort(), i-1);


var monTbl = [3,-7,2];
for(k=0; k<monTbl.length; k++){
    if(monTbl[k]<0){
        returnMe(monTbl[k]+" is negative.");
    }
}

returnMe("check out: alert box.");
var monTbl = [0, -1, 4];
alert("Exo"+i+": " +monTbl.sort().reverse());

var monTbl = [-5, -2, -6, 0, -1];
returnMe("the max value is: "+Math.max.apply(Math,monTbl));

var monTbl = new Array();
for(l=0; l<=15; l++){
    if(l%2){
        monTbl.push(l+"is odd");
    }else{
        monTbl.push(l+" is even");
    }
}
returnMe("<br>"+monTbl.join("<br>"));





