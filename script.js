const operationString = document.getElementById("operation");
const result = document.getElementById("result");
const c = document.getElementById("c");
const deleteButton = document.getElementById("delete");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const multiple = document.getElementById("multiple");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const minus = document.getElementById("minus");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const plus = document.getElementById("plus");
const parantez = document.getElementById("parantez");
const number0 = document.getElementById("number0");
const point = document.getElementById("point");
const equal = document.getElementById("equal");

let stringResult = "";
let finalResult = 0;

c.addEventListener('click', e => {
    operationString.innerHTML = 0;
    result.innerHTML = 0;
    stringResult = "";
})

deleteButton.addEventListener('click', e => {
    if(operationString.innerHTML.length == 1 || operationString.innerHTML.length == 0){
        stringResult = "";
        operationString.innerHTML = "0";
        result.innerHTML = "0";
        return ;
    }
    operationString.innerHTML = operationString.innerHTML.substring(0, operationString.innerHTML.length - 1);
    stringResult = operationString.innerHTML;
    result.innerHTML = updateResult();
});

percent.addEventListener('click', e => {
    stringResult = stringResult + '%';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});

divide.addEventListener('click', e => {
    stringResult = stringResult + '÷';
    operationString.innerHTML = stringResult;
});

number7.addEventListener('click', e => {
    stringResult = stringResult + '7';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number8.addEventListener('click', e => {
    stringResult = stringResult + '8';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number9.addEventListener('click', e => {
    stringResult = stringResult + '9';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number0.addEventListener('click', e => {
    stringResult = stringResult + '0';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number1.addEventListener('click', e => {
    stringResult = stringResult + '1';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number2.addEventListener('click', e => {
    stringResult = stringResult + '2';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number3.addEventListener('click', e => {
    stringResult = stringResult + '3';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number4.addEventListener('click', e => {
    stringResult = stringResult + '4';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number5.addEventListener('click', e => {
    stringResult = stringResult + '5';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});
number6.addEventListener('click', e => {
    stringResult = stringResult + '6';
    operationString.innerHTML = stringResult;
    result.innerHTML = updateResult();
});

minus.addEventListener('click', e => {
    stringResult = stringResult + '-';
    operationString.innerHTML = stringResult;
});

plus.addEventListener('click', e => {
    stringResult = stringResult + '+';
    operationString.innerHTML = stringResult;
});

multiple.addEventListener('click', e => {
    stringResult = stringResult + '×';
    operationString.innerHTML = stringResult;
});

point.addEventListener('click', e => {
    stringResult = stringResult + '.';
    operationString.innerHTML = stringResult;
});

equal.addEventListener('click', e => {
    finalResult = updateResult();
    operationString.innerHTML = finalResult;
});






function updateResult(){
    let number1 = 0, number2 = 0, temp = "", tempOpertion = null, arr = new Array();
    // tokenize expression into numbers and operators
    for(let i = 0;i < stringResult.length;i++){
        temp = "";
        while(stringResult[i] != '+' && stringResult[i] != '-' && stringResult[i] != '×' && stringResult[i] != '÷'){
            temp += stringResult[i];
            i++;
            if(i >= stringResult.length) break;
        }
        arr.push(Number(temp));
        if(i >= stringResult.length) break;
        arr.push(stringResult[i]);
    }

    //calculate the result with arr
    for(let i = 1;i < arr.length - 1;i++){
        if(arr[i] == '×' || arr[i] == '÷'){
            number1 = unknownOperation(arr[i-1], arr[i+1], arr[i]);
            arr.splice(i-1, 2);
            arr[i-1] = number1;
        }
    }
    number1 = arr[0];
    for(let i = 0;i < arr.length-2;i+=2){
        
        number1 = unknownOperation(arr[i], arr[i+2], arr[i+1]);
        arr[i+2] = number1;
    }

    return number1;
}

function StringToInt(string){
    if(string[string.length - 1] == '%'){
        return Number(string.substring(0, string.length - 1)) / 100;
    }
    return Number(string);
}

function unknownOperation(num1, num2, operation){
    switch(operation){
        case '+':
            return num1 + num2;
        case '-':
            return num1-num2;
        case '÷':
            return num1/num2;
        case '×':
            return num1*num2;
    }
}