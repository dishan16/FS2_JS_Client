try{
var square = function(number) { return number * number; };
var x = square(4);
var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

function addition (c, d){
    return c + d;
}
} catch(err){
    console.log("error occurred");
}