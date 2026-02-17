// 1. Create variables with different data types available in JS and print their data types along with each variable name in the console.

var name = "shivanand";
var age = 24;
var phone = 8618581627n;
var collage=null;
var email;
var result = 10-"char";
var isEligibleForVote = true;
let array=[1,2,3,4];
let obj={
    name:"shivu",
    age:24,
    email:"shiva@gmail.com"
}

console.log(`1. name: ${name},  datatype:`, typeof name);
console.log(`2. age: ${age},  datatype:`, typeof age);
console.log(`3. phone: ${phone},  datatype:`, typeof phone);
console.log(`4. collage: ${collage},  datatype:`, typeof collage);
console.log(`5. email: ${email},  datatype:`, typeof email);
console.log(`6. result: ${result},  datatype:`, typeof result);
console.log(`7. isEligibleForVote: ${isEligibleForVote},  datatype:`, typeof isEligibleForVote);
console.log(`8. array: ${array},  datatype:`, typeof array);
console.log("9. object:", obj, " datatype:", typeof obj);

function sum(a=10, b=20){
    console.log(`sum of a+b is ${a+b} datatype is:`, typeof sum)
}
sum()

// 2. Write a JS program to show an alert message on the loading of the website.

 alert("Welcome! Website loaded successfully.");

// 3. ["1", "2", "3", "4", "5", "6", "7"]
//  A. Remove number "6" from the array and console the length of the array.

let  arrA = ["1", "2", "3", "4", "5", "6", "7"]
console.log("before delete '6' array length is: ", arrA.length)
for(let i=0; i<arrA.length; i++){
    if(arrA[i]==="6"){
        arrA.splice(i, 1);
    }
}

console.log("after delete '6' array length is: ", arrA.length)

//B. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.

let arrB = ["1", "2", "3", "4", "5", "6", "7"]
for(let items of arrB){
    var values = Number(items);
    console.log(`${values} datatype: `,typeof values)
}

//C. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 
var arrC =["1", "2", "3", "4", "5", "6", "7"]
arrC.pop();
arrC.pop();
arrC.pop();
console.log("after remove last three items: ",arrC)
arrC.unshift("two");
arrC.unshift("one");
console.log("after add 'one' and 'two' to the beginning of the array: ",arrC)

//D. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)

var arrD =["1", "2", "3", "4", "5", "6", "7"]
var str="";
for(let items of arrD){
    str=str+items;
}
console.log("string concatenation of all items of the array: ",str)

var sum=0;
for(let items of arrD){
    var values = Number(items);
    sum=sum+values;
}
console.log("sum of all the items: ",sum)

// E. Filter out item "3" from the array and console the array (use array method)

let arrE =["1", "2", "3", "4", "5", "6", "7"]
var filteredArray = arrE.filter((items)=>{
    return items!="3"
})
console.log("filtered Array: ",filteredArray)

// F. Iterate the array and console the item, when item is either "3", "6" or "7"

var arrF =["1", "2", "3", "4", "5", "6", "7"]

for(let items of arrF){
    if(items==="3" || items==="6" || items==="7"){
        console.log(items)
    }
}

// G. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
var arrF =["1", "2", "3", "4", "5", "6", "7"]
let arrG = [1, 2, "3", 4, 5, 6,"7"];

for(let i=0; i<arrF.length; i++){
    for(let j=0; j<arrG.length; j++){
        if(arrF[i]===arrG[[j]]){
            console.log(arrF[i])
        }
    }
}

// H. [0,2,3,7,5,6,8] iterates the array and multiplies each item by its index value and console the result only if result is greater than 40.

let arrH = [0,2,3,7,5,6,8];
var mul=0
for(let i=0; i<arrH.length; i++){
    mul=arrH[i]*i;
    if(mul>40){
        console.log(`item ${arrH[i]} * index ${i} : `,mul)
    }
}

// I. Create two arrays with five items each and merge the array into a single array and then console it.

let firstArray = [0,2,3,7,5,6,8];
let secondArray = [1, 2, "3", 4, 5, 6,"7"];
let resultArray=[]
resultArray=firstArray.concat(secondArray);
console.log("merge the array",resultArray)


//  4. Create an array of 3 objects called users. Each object should have id, name, and email.

let users =[ {id:1,
              name:"shivanand",
               email:"lshivanand@gmail.com"},
            { id: 2,
             name: "Anita",
            email: "anita@example.com"},
             {id: 3,
             name: "Vikram",
             email: "vikram@example.com"}
            ];

   //A. Create a new array that only contains the email strings. 
   
   let emails=[]
   for(let i=0; i<users.length; i++){
    emails[i] = users[i].email
   }

   console.log("user emails are",emails)

   //B. Add a new property isAdmin: true to only the first user in the array using the spread operator.

  const updatedUsers = [
  { ...users[0], isAdmin: true },
  ...users.slice(1)
];

console.log(updatedUsers);

//    5. [0, "hello", "", NaN, 42, undefined, false, "JS", "hello", "42"]

//    A. Remove the falsy values from the array.

 
   let falsyValueArray = [0, "hello", "", NaN, 42, undefined, false, "JS", "hello", "42"];
let results = falsyValueArray.filter(Boolean);
console.log(results);

// B. Remove the duplicates and console the unique array.

var arr=[0, "hello", "", NaN, 42, undefined, false, "JS", "hello", "42"];
let unique=[]
for(let i=0; i<arr.length; i++){
    if(!(unique.includes(arr[i]))){
   unique.push(arr[i])
    }
}

 console.log(unique)


//   6. "Javascript is a programming language".
//   Convert it into an array of words, reverse the order of the words, and join them back into a single string separated by hyphens.

let string = "Javascript is a programming language";
var stringArray = string.split(" ");
console.log(stringArray)
var reverseArrya = stringArray.reverse();
console.log(reverseArrya)
var single_string = reverseArrya.join("-");
console.log(single_string)

//     7. Given an array of prices: [19.99, 5.50, 24.00, 0.99].
 //   A. Add a 10% tax to each price.

 let prices = [19.99, 5.50, 24.00, 0.99];
 let taxPrices = []
for(let i=0; i<prices.length; i++){
   tax = (10/100)*prices[i];
   taxPrices[i]=tax+prices[i];
}
console.log("Before adding 10% tax: ",prices)

 console.log("after adding 10% tax: ",taxPrices)

 // B. Then get the total sum.
var sum=0;
 for(let i=0; i<taxPrices.length; i++){
     sum=sum+taxPrices[i];
 }
 console.log("total sum of tax array: ",sum)


//     C. Console the output (ensure the final total is rounded to the nearest whole number)

console.log("final total is rounded: ",Math.round(sum))
