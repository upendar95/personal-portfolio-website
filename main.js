var upendar = [24,55,"web",false,22.2,null,]
console.log(typeof upendar);
var a = 10;
var b = 30;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//printing numbers from 10 to 1
for(let i=10; i>=1; i--){
    console.log(i);
}

//program to find factorial of any number
 function calcFcat(num){
     var factorial=1;
 for(let i=1; i<=num; i++){

     factorial=factorial*i;
}
  console.log(factorial);
 }
 calcFcat(5);
calcFcat(10);
calcFcat(6);

//sum of 20 natural numbers from 1 using functions
function sumOfNumbers(num){
    var sum=0;
    for(let i=num; i>=1; i--){
        sum=sum+i;
    }
    console.log(sum);
}
sumOfNumbers(20);
sumOfNumbers(35);
//operation on array
var upendar=[2,3,4,5];
//add operation
//form starting
var res1=upendar.push("1");
var res2=upendar.unshift("5");
console.log(res1,res2);



