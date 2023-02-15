//ДЗ
// 1. Написать цикл for, который выводит в консоль числа от 75 до 89
for(let i = 75; i<=89; i++){
    console.log(i);
}

// 2. Написать цикл for, который выводит в консоль каждое третье число 
// в диапазоне от 80 до 12 (включительно)
for(let i = 80; i>=12; i-=3){
console.log(i);
}

// 3. Написать функцию, которая принимает два числа (основание и степень) 
// и возвращает основание, возведенное в степень
// const exponentiate=(num,degree )=>{
//     return num**degree;
// }
const exponentiate = (num, degree)=>{
    return num ** degree;
}
console.log(exponentiate(5,2));

// 4. Написать функцию, которая принимает число и возвращает 10% от этого
//  числ
// const calcRatio= (num)=> {
//     return num*0.1;
// }
const calcRatio= num => {return num *0.1;}
console.log(calcRatio(50));
