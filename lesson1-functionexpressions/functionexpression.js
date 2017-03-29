// normal function statement

function sayHai(){
  console.log('hi');
}

sayHai();

// function expression


var sayBye = function(){
console.log('bye');
};

sayBye();

// function as parameter to another fucntion

function callFunction(fun){
  fun();
}

callFunction(sayBye);
