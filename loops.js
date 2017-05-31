var forLoop = function(arr){
  for (var i = 0; i < 25; i++){
    if (i == 0){
      arr.push("I am 1 strange loop.");
    }
    else {
      arr.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
    }
  }
  return arr;
}

function whileLoop(num){
  while (num > 0){
    console.log(num--);
  }
  return "done";
}

function doWhileLoop(arr){
  var maybeTrue = function() {
  return Math.random() >= 0.5
}
do {
    arr.pop();
  }
  while (arr.length > 0 && maybeTrue());
  return arr;
}
