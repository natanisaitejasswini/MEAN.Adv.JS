function fib(){
  var num1 = 0;
  var num2 = 1;
  function nacci(){
    console.log(num2);
    var sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    return this;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"