function sum(arr){
    let sumNumber = 0;
    for(let value of arr){
        if(value % 2 == 0){
            sumNumber += value;
        }
    }
    return sumNumber;
}
console.log(sum([1, 2, 3, 4, 5, 6]));


