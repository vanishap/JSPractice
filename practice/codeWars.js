function zero(){
  return 0;
}
function one() {
  return 1;
}
function two() {
  return 2;
}
function three() {
  return 3;
}
function four() {
  return 4;
}
function five() {
  return 5;
}
function six() {
  return 6;
}
function seven() {
  return 7;
}
function eight() {
  return 8;
}
function nine() {
  return 9;
}

function plus(n1,n2) {
  return n1+n2;
}
function minus(n1,n2) {
   return n1-n2;
}
function times(n1,n2) {
   return n1*n2;
}
function dividedBy(n1,n2) {
   return n1/n2;
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3

