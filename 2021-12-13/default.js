// exo 11
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

cToF(60);
fToC(45);

//exo 12
console.log(window.location.href);

// exo 13
var var_name = 'maVar';
var str = "hello 555";
this[var_name] = str;
console.log(`maVar give: ${maVar}`);

//exo 14
var myFileName = "toto.jpg";
var explode = myFileName.split(".").reverse();
console.log(`the extension of '${myFileName}' is ${explode[0]}`);

// exo 15
const input = prompt("Enter a number");
if(input < 13){
    console.log(`${13-parseInt(input)}`)
}else{
    console.log(`double: ${Math.abs(parseInt((13-input))*2)}`)
}

// exo 16
var arr = new Array("1","2","3","4","5");
console.log(`${arr[1]}, ${arr[arr.length-2]}`);

// exo 17
function is_perfect(number){
var temp = 0;
for(var i=1;i<=number/2;i++)
    {
        if(number%i === 0){
            temp += i;
        }
    }

    if(temp === number && temp !== 0)
    {
        console.log(`${number} is a perfect number.`);
    }else{
        console.log(`${number} is not a perfect number.`);
    }   
} 
is_perfect(28); 

// exo 18
const num = prompt('Write a JavaScript function to compute the factors of a positive integer.\n Enter a positivie number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

// exo 19
function coincoin(amount, coins){
    if (amount === 0){
        return [];
    }else{
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(coincoin(left, coins) );
        }else{
            coins.shift();
            return coincoin(amount, coins);
        }
    }
} 
console.log("Pièces: "+coincoin(46, [25, 10, 5, 2,1]));

// exo 20
const valueN = prompt("N:");
const valueB = prompt("B:");
const valueR = Math.pow(valueN, valueB);
console.log(`${valueN} ^ ${valueB} = ${valueR}`);
