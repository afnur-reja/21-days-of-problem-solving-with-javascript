// 1. Print Numbers from 1 to n
const n = parseInt(prompt("Enter a Number : "));
for (let i = 1; i <= n; i++){
    console.log(i)
} 


// 2. Print Numbers from N to 1 without changing the loop condition of above question
const num = 10
for (let i = 1; i <= num; i++){
    console.log(num - i + 1)
}


// 3. Print All Even Numbers from 1 to N
const n1 = 10;
for (let i = 1; i <= n1; i++){
    if(i % 2 == 0) {
        renderOutput(i)
    }
}


// 4. Sum of First N Natural Numbers
const n2 = 5;
let sum = 0;
for (let i = 1; i <= n2; i++){
    sum += i;
}
renderOutput(sum)


// 5. Product (Factorial) of N
const n3 = 5;
let product = 1;
for (let i = 1; i <= n3; i++){
    product *= i;
}
renderOutput(product)


// 6. Sum of All Even Numbers up to N
const n4 = 10;
let sumOfNatu = 0;
for (let i = 1; i <= n4; i++){
    if(i%2 == 0){
        sumOfNatu += i;
    }
}
renderOutput(sumOfNatu)


// 7. Print Squares of Numbers from 1 to N
const n5 = 5;
for (let i = 1; i <= n5; i++){
    renderOutput(i * i)
}



//HOMWORK PROBLEMS