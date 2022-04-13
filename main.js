var upendar = [24,55,"web",false,22.2,null,]
console.log(typeof upendar);
var a = 10;
var b = 30;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//problems on loops
//write a program to find even or odd numberfrom iterating the number of array 
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
console.log(upendar);
//add operation
//form ending
upendar.push("6");
//form starting
upendar.unshift("1");
console.log(upendar);
//delete operation
//from end
upendar.pop("6")
console.log(upendar);
//from starting
upendar.shift("1");
console.log(upendar);
//find the lenth nof array using lenth operation
var arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
var arrayLength=arr.length;
console.log(arrayLength);
arr.pop(9);
var arrayLength=arr.length;
console.log(arrayLength); 
//slice method is used to remove values from array
//arrayName.slice(startIndex,endIndex) here endIndex means endIndex-1
let remove=arr.slice(2,6);
console.log(remove);
let removeValues=remove.length;
console.log(removeValues);

//splice method is also there it is used to remove and add values into array
/*splice method are 3 types
  it removes values from array from lert to right of your given number
  splice(startingIndex)
  splice(startingIndex , deleteCount)
  splice(startingIndex , deleteCount , values to add)
*/
var arr1=[0,1,2,3,4,5,6,7,8,9];
var arr2=arr1.filter((element)=>element<=2);
console.log(arr2);
var vfx=arr2.map((element)=>element*5)
console.log(vfx);
var arr3=arr2.fill()
console.log(arr3);
// var splicedValue=arr.splice(1);
// console.log(splicedValue);
//splice 3rd type
var splicedValue1=arr1.splice(5,5,10,2,5,6,8);
console.log(splicedValue1);
console.log(arr1)

//oject for ecommerce template
// var product={
//   "cloths":"mensAndWomen"
//   "footWears":{
//             "menFootSizes":[7,8,9,10];
//             "womenFootSizes":[5,6,7,8];
//    }
//    "images":{
//        "image1":upendar.png;
//        "image2":amish.png;

//    }

// }

// console.log(product.cloths);
// let tag=document.createElement("a");
// let attribute=document.createAttribute("href");
// tag.append("attribute");
// tag.re
// console.log(tag)


var res=document.querySelectorAll("");
delete res.innerHTML
console.log(res);
