function sum(a, b){
return a + b;

}

console.log(sum(10,10));

function product(a, b){

    return a*b;
}

console.log(sum(12,12));

const bigProduct =  product(5353, 1000);
console.log(bigProduct);

setTimeout( function () {
console.log("Hey you rock!!!!");

}, 1000);

setTimeout( () => console.log("Hey you rock!!!!"), 1000);