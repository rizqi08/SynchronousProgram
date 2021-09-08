
var inputNums = document.getElementById("input-number");
var ganjilDisplay = document.getElementById("ganjil");
var genapDisplay = document.getElementById("genap");

function ganjil(number) {
  if(number % 2 != 0){
    return true;
  }
  return false;
}

function genap(number) {
  if(number % 2 == 0){
    return true;
  }
  return false;
}

function synchronous(){


  for(var i = 1; i<=inputNums.value; i++){
    if(ganjil(i)) {
      ganjilDisplay.innerText += i + ' , '
    }
  }

  for(var i = 1; i<=inputNums.value; i++){
    if(genap(i)) {
      genapDisplay.innerText += i + ' , '
    }
  }
}

function asynchronous(){

// GANJIL
let i = 1;
setInterval(() => {
  if (i <= inputNums.value) { 
    if (ganjil(i)) {
      ganjilDisplay.innerText += i + ' , '
    }

  }
  i++;
}, 500);

// GENAP
let j = 2;
setInterval(() => {
  if (j <= inputNums.value) {
    if (genap(j)) {
      genapDisplay.innerText += j + ' , '
    }

  }
  j++;
}, 200);
}
