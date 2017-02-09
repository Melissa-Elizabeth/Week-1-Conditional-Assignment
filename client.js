var someNumbers = function(x, y) {
  var firstInt = parseInt(x);  // I wanted to parseInt to make sure whatever parameter was passing through would be seen as a number.
  var secondInt = parseInt(y);

if (firstInt > secondInt)  //I used the firstInt and secondInt instead of x and y because I wanted the parseInt versions of x and y.
 return("The first number was bigger!");
else if (firstInt < secondInt)
 return("The second number was bigger!");
else
 return("The numbers are the same!");

};
console.log(someNumbers(3,2));
console.log(someNumbers(2,7));
console.log(someNumbers(7,7));
console.log(someNumbers('86.7 taco', 92));
