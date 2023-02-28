
const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

// Знайти суму та кількість позитивних елементів.


function positiveNum(element){
    return element > 0;
}
const positiveArr = array.filter(positiveNum)
console.log(positiveArr);
console.log (positiveArr.length)

function positiveSum(positiveArr){
    let sum = 0;
    for(let i = 0; i < positiveArr.length; i++){
        sum += positiveArr[i];
        }
    console.log(sum);
    }
    positiveSum(positiveArr);


// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
function evenNum (element){
    return element % 2 === 0;
}
const evenArr = positiveArr.filter(evenNum);
console.log(evenArr)
console.log(evenArr.length)

let sumEven=0;
for(i = 0; i<evenArr.length;i++ ){
    sumEven += evenArr[i];
}
console.log(sumEven)

// Знайти кількість непарних позитивних елементів.
// Знайти суму непарних позитивних елементів.
function notEvenNum (element){
    return element % 2 !==0;
}
const notEvenArr = positiveArr.filter(notEvenNum);
console.log(notEvenArr)
console.log(notEvenArr.length)

let notSumEven=0;
for(i = 0; i<notEvenArr.length;i++ ){
    notSumEven += notEvenArr[i];
}
console.log(notSumEven)


// Знайти добуток позитивних елементів.
function productPositive (positiveArr){
    let result = 1;
    for (let i = 0; i < positiveArr.length;i++) {
        result = result * positiveArr[i];
        }
        console.log (result);
}
productPositive(positiveArr);

// Знайти мінімальний елемент масиву та його порядковий номер.
let minEl = Math.min.apply(null, array);
console.log(minEl);
console.log(array.indexOf(minEl));


// Знайти максимальний елемент масиву та його порядковий номер.
let maxEl = Math.max.apply(null, array);
console.log(maxEl);
console.log(array.indexOf(maxEl));

// // Визначити кількість негативних елементів.
function negativeNum(element){return element<0;}
const negativeArr = array.filter(negativeNum)
console.log(negativeArr);

console.log (negativeArr.length)


// Знайти найбільший серед елементів масиву, ост альні обнулити.




