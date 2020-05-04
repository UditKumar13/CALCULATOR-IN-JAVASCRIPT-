// this is my first code in the javascript , i am feeling excited and happy 
const defaultResult =0; 
let currentResult = defaultResult;
let logEnteries=[];//array
//my first js function with parameter
function add_num(num1, num2){
    const result= num1+num2;
    return result;
}
// taking input from input text(string), convert it into integer
function getUserNumberInput(){
    return parseInt(usrInput.value);
}
// to write output on screen 
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription); //from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    //object for tracking
    const logEntry={
        operation:operationIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEnteries.push(logEntry);
    console.log(logEnteries);

}
// second function for the addition where the input is given by user on website 
//parseINT is to convert a string into integer type
function add(){
    const enteredNumber =getUserNumberInput();
    const initialCurerntResult=currentResult;
    currentResult += enteredNumber ;
    createAndWriteOutput('+',initialCurerntResult,enteredNumber);
    writeToLog('ADD',initialCurerntResult,enteredNumber,currentResult);
}

function subtract(){
    const enteredNumber =getUserNumberInput();
    const initialCurerntResult=currentResult;
    currentResult-= enteredNumber ;
    createAndWriteOutput('-',initialCurerntResult,enteredNumber);
    writeToLog('Subtract',initialCurerntResult,enteredNumber,currentResult);
}

function multiply(){
    const enteredNumber =getUserNumberInput();
    const initialCurerntResult=currentResult;
    currentResult *= enteredNumber ;
    createAndWriteOutput('*',initialCurerntResult,enteredNumber);
    writeToLog('Multiply',initialCurerntResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber =getUserNumberInput();
    const initialCurerntResult=currentResult;
    currentResult /= enteredNumber ;
    createAndWriteOutput('/',initialCurerntResult,enteredNumber);
    writeToLog('Divide',initialCurerntResult,enteredNumber,currentResult);
}
//event listener function has two parameters 1)string 2)functon name 
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

// for showing the calculation 
//let calculationDescription = '(' + defaultResult + ' +10)*3/2-1';
let calculationDescription = `( ${defaultResult} +10)*3/2-1`;

//for showing an error 
let errorMessage = 'An error\n'
                        + 'occured!';
