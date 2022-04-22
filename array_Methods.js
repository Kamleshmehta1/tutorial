let arr = [1, 2, 3, 4, 5, 6]
let arr1 = [7, 8, 9, 10, 11]
// -------------------------------------------------------------------------------------------------------------------
// arr.concat(arr1)  // concats arr + arr1 and returns a new concated array

//-------------------------------------------------------------------------------------------------------------------


// console.log(arr.constructor); // returns the fucntion that created Array prototype

// -------------------------------------------------------------------------------------------------------------------


// console.log(arr.copyWithin(3, 0, arr.length)); // returns the changed Array

// -------------------------------------------------------------------------------------------------------------------


// let obj = {
//     "firstName": "kamlesh",
//     "lastName": "mehta"
// }

// console.log(Object.entries(obj)); // returns an array with the key value pairs

// -------------------------------------------------------------------------------------------------------------------

// let main = arr.every((element) => {
//     return element > 7;
// })

// console.log(main); // returns false when one element is not satisfied and return true if all the elemnt are satisfying the condition

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.fill("LOL",0,4)); // an array of filled arrays

// -------------------------------------------------------------------------------------------------------------------

// let filteredArray = arr.filter((element) => {
//     return element < 2
// })

// console.log(filteredArray); //returns the filtered array

// -------------------------------------------------------------------------------------------------------------------

// let final = arr.find((element) => {
//     return element > 2
// })
// console.log(final);

// -------------------------------------------------------------------------------------------------------------------

// let final = arr.findIndex((element) => {
//     return element > 2;
// })

// console.log(final);

// -------------------------------------------------------------------------------------------------------------------

// arr.forEach((element, index) => {
//     console.log(element);
// })

// -------------------------------------------------------------------------------------------------------------------

// let str = "kamleshmehta"

// let final = Array.from(str)
// console.log(final); //returns all the elemntss an array

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.includes(1)); // returns true or false if element is satisfied/unsatisfied

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.indexOf(6, 4)); // returns the index of the element (element,start from index)

// -------------------------------------------------------------------------------------------------------------------

// console.log(Array.isArray(arr)); // checks if array is array or not and returns true / false

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.join("")); // return the array elemnts in sting format

// -------------------------------------------------------------------------------------------------------------------
// let str = ""
// for (let x of Object.keys(arr)) {
//     str = str + " " + x;
// }

// console.log(str); // converts output in string format

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.length);

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.lastIndexOf(1));  //returns the last elemnt index of the matched on

// -------------------------------------------------------------------------------------------------------------------

// let final = arr.map((element) => {
//     return element * 2;
// })
// console.log(final); // returns the modified array 

// -------------------------------------------------------------------------------------------------------------------

// arr.pop() // removes the element from the last of the array and returns the removed item

// -------------------------------------------------------------------------------------------------------------------

// arr.push() // adds the element from the last of the array and returns the new length of the modified array

// -------------------------------------------------------------------------------------------------------------------

// let final = arr.reduce((total, element) => {
//     return total = total + element
// })
// console.log(final); // adds the element to the total

// -------------------------------------------------------------------------------------------------------------------

// let final = arr.reduceRight((total, element) => {
//     return total = total + element
// })
// console.log(final); // iterate the array from right to the left elemnts of the array

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.reverse()); //returns the reversed array

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.shift(1)); // removes the elemnt from the beginning of the array

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.unshift(1)); // adds the element at the beginning of the array

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.slice(0,2)); // returns the slices elemnts as from o to < 2;

// -------------------------------------------------------------------------------------------------------------------

// let final = arr.some((element) => {
//     return element > 5;
// })

// console.log(final); // checks if any of the array elemnt staisfy the condition and return true / false according to it

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.sort()); // returns the sorted array

// -------------------------------------------------------------------------------------------------------------------

// let arr3 = [1, 3, 4, 5]

// arr3.splice(1, 0, 2)
// console.log(arr3);  //(at where to add, how many to remove , what to add)

// -------------------------------------------------------------------------------------------------------------------

// console.log(arr.valueOf()); // returns the array itself

// -------------------------------------------------------------------------------------------------------------------

// var arrStr = ["Kamlesh", "Sonal", "Mehta"]
// Array.prototype.myStr = function() {
//     for (let i = 0; i < this.length; i++) {
//         this[i] = this[i].toUpperCase()
//     }
// }

// arrStr.myStr()
// console.log(arrStr);
// this is how the array prototype is used creating new method