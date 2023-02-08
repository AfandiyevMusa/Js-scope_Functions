"use strict";

//#region  ClassTask

// let numbers = [2, 3, 4, 5, 6, "hello", 8, 9 ,10, "30"];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);   
// }

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] == 8){
//         break;
//     }
//     else{
//         console.log(numbers[i]);
//     }
// }

// for (let i = 0; i < numbers.length; i++) {    
//     if(!isNaN(numbers[i])){
//         if (numbers[i] % 2 == 0){
//             console.log(numbers[i]);
//         }
//     }
// }

// for (let i = 0; i < numbers.length; i++) {    
//     if(!isNaN(numbers[i]) && typeof numbers[i] === "number"){
//         if (numbers[i] % 2 == 0){
//             console.log(numbers[i]);
//         }
//     }
// }

// try {
//     let isMarried = true;
//     if (isMarried) {
//         let res = "Married";
//     }
//     console.log(res);
// } catch (error) {
//     console.log(error.message);
// } finally{
//     console.log("Welcome!!!");
// }

// let fullName = prompt("Enter fullName: ");
// while(fullName.trim() == ""){
//     fullName = prompt("Enter fullName again: ");
// }
// let email = prompt("Enter you email: ");
// while(email.trim() == ""){
//     email = prompt("Enter email again: ");
// }
// let isExist = false;
// for (let i = 0; i < email.length; i++) {
//     if (email[i] == "@") {
//         isExist = true;
//         break;
//     }
// }
// while (!isExist) {
//     email = prompt("Enter your email again: ");
// }
// if (isExist) {
//     let isMarried = confirm("Are you married?");
//     if(!isMarried){
//         alert("Evli olmadigina gore qeydiyyat ola bilmersiniz!")
//     }else{
//         let result = `Full name: ${fullName}, Email: ${email}, Evlidir: ${isMarried ? "Evlidir" : "Subaydir"}`
//         alert(result);
//     }
// } else {
//     email = prompt("add your email again");
// }

// function showInfo(){
//     console.log("Hello World!");
// }
// showInfo();

// let name = "Musa";
// let surname = "Afandiyev";
// function showFullName(name, surname) {
//     return name + " " + surname;
// }
// console.log(showFullName(name, surname));

// function sumOfNums(a, b, c) {
//     return a + b + c;
// }
// console.log(sumOfNums(2, 3, 4));

// function sumOfNums() {
//     console.log(arguments[0]);
// }
// sumOfNums(2, 3, 4);

// function showAll() {
//     console.log(this);
// }
// showAll();

// let obj = {
//     name: "Musa",
//     surname: "Afandiyev",
//     getData: function() {
//         console.log(this);
//     }
// }
// obj.getData();


// let obj = {
//     name: "Musa",
//     surname: "Afandiyev",
//     getData: showAll()
// }
// obj.getData;

// let nums = [1,2,3,4,5,6,7,8,9];
// function showNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// showNums(nums);

// let nums = [1,2,3,4,5,6,7,8,9];
// function showNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == 8){
//             console.log(arr[i]);
//             // return;
//             break;
//         }
//     }
//     console.log("Hello World!");
// }
// showNums(nums);

// let showMail = () => {
//     console.log(arguments);
// }
// showMail(1,2,3,4,5);

// function show() {
//     console.log(arguments)
// }
// show(1,2,3,4,5);

//#endregion

//#region Task_1
// function checkNum(number) {
//     if(number % 3 == 0 && number % 7 == 0 && number != 0){
//         console.log("Reqem hem 3e hem de 7e bolunendir!");
//     }else{
//         console.log("Reqem ya 3e, ya 7e, ya da her ikisine bolunmur!");
//     }
// }
// checkNum(21);
//#endregion

//#region Task_2
// function calculateFactorial(number) {
//     let res = 1;
//     if(number >= 0){
//         for(let i = 1; i <= number; i++){
//             res *= i;
//         }
//         console.log(res);
//     }else{
//         alert("Daxil edilen reqem menfidir!");
//     }
// }
// calculateFactorial(5);
//#endregion

//#region Task_3
// let arr = [1,2,3,4,-6];

// function calculatePowSum(arr) {
//     let res = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             res += Math.pow(arr[i], 2); 
//         }
//     }
//     console.log(res);
// }
// calculatePowSum(arr);
//#endregion

//#region Task_4
// let email = "cavid@code.edu.az"; 
// let password = 12345;

// function checkInfo(email, password) {
//     if(email == "cavid@code.edu.az" && password == 12345){
//         alert("Girish olundu");
//     }else{
//         alert("Mail ve yaxud password sehvdir");
//     }
// }
// checkInfo(email, password);
//#endregion

//#region Task_5
// let arr = [1,2,3,4,-6,-5,9];

// function calculateSumOfOdd(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 != 0){
//             sum += arr[i]; 
//         }
//     }
//     console.log(sum);
// }
// calculateSumOfOdd(arr);
//#endregion

//#region Task_6
// let arr = [1,2,3,4,-6,-5,9,10];

// function calculateCountOfEven(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             count++; 
//         }
//     }
//     console.log(count);
// }
// calculateCountOfEven(arr);
//#endregion