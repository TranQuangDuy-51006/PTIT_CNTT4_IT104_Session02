function checkEndString(str, strEnd){
    if(str.endsWith(strEnd)){
        return true;
    }
    return false;
}

console.log(checkEndString("Hello, World!", "Hello"));
console.log(checkEndString("Hi there!", "there!"));
