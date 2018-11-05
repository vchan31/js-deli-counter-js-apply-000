function takeANumber(katzDeliLine) {
var number = 1;
var list = [];
list.push(number);
return 'Welcome, Youre number is ' + number
  }


function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length < 1) {return('There is nobody waiting to be served!');
   } 
let first = katzDeliLine.shift();
return ('Currently serving ' + first + '.');


}

var line = [];
 function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}