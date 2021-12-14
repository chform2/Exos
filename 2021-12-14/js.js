// exo 1
function checkMaj(str){
    if(str.charAt(0) === str.charAt(0).toUpperCase()){
        console.log(`${str} => Première lettre en maj`);
    }else{
        console.log(`${str} => Première lettre en min`);
    }
}
checkMaj("Coucou hibou");
checkMaj("coucou loulou");

// exo 2
var creditCardN = "5133 7900 4200 2300";
creditCardN = creditCardN.replace(/\s/g, '');
regexCC = new RegExp(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/);
if(regexCC.test(creditCardN)){
    console.log("credit card number true");
}else{
    console.log("credit card number wrong");
}

// exo 3
var email = "toto@dupond.fr";
regexCC = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,20}))$/);
if(regexCC.test(email)){
    console.log("e-mail: valid");
}else{
    console.log("e-mail: wrong");
}

// exo 4
function isDate(str)
{
    regexp = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
  
    if (regexp.test(str)){
        return true;
    } else {
        return false;
    }
}
console.log(isDate("22/01/2019"));
console.log(isDate("22/01/1019"));

// exo 5
var str = "     lorem   ipsum machin machin     ";
console.log(str.replace(/^\s+|\s+$/g, ''));

// exo 6
var str = " lorem ipsum macjin machin machin".replace(/^\s+|\s+$/g, '');
console.log(`${str.split(" ").length} mots dans "${str}"`);

// exo 7
function testIP(str){
    const rtn = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
    console.log(`${str} is ${rtn}`)
}
testIP("198.32.2.3");
testIP("172.16.0.1");

// exo 8
var str = "United States";
const voyelles = new Array("a","e","i","o","u","y");
const counter = new Array();
voyelles.forEach(lettre => {
   counter[lettre] = str.split(lettre).length-1; 
});
console.log(counter);

// s3
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

console.log(`${student.name}, ${student.sclass}, ${student.rollno} `)
