const display = document.querySelector('.display');
const numBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

let displayText = '0';
let firstValue = 0;
let secondValue = 0;
let operator = '';
let calcArr = [];
let displayArr = [];



display.textContent=displayText;


function add (a,b){

    return a+b;

}

function subtract (a,b){

    return a-b;
    
}

function multiply (a,b){

    return a*b;

}

function divide (a,b){

    return a/b;

}

function operate (operator, num1, num2){
    
    if (operator==='+'){

        return add(num1,num2);

    }
    else if (operator === '-'){

        return subtract(num1,num2);

    }
    else if (operator === 'x'){

        return multiply(num1,num2);

    }
    else if (operator === '/' && num2===0){

        return 'Can\'t divide by 0';
        
    }else if (operator === '/'){

        return divide(num1,num2);

    }

}



function reset(){
    displayText = '0';
    firstValue = 0;
    secondValue = 0;
    operator = '';
    calcArr = [];
    displayArr=[];
    display.textContent=displayText;
}


clearBtn.addEventListener('click', ()=>{
    
    reset();
    
})

numBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        displayArr.push(e.target.textContent);
        displayText = displayArr.join('');       
        display.textContent = displayText;
        console.log(displayArr);

        

    })
});

operatorBtns.forEach(btn=>{

    btn.addEventListener('click',(e)=>{
        if (displayArr.length===0){
            displayArr = calcArr;
        }else{
            calcArr.push(displayArr.join(''));
        }
        
        operator = btn.textContent;
        display.textContent = btn.textContent;
        calcArr.push(operator);
        displayArr = [];
        if (calcArr.length>=3){
            operator = calcArr[1];
            firstValue = parseFloat(calcArr[0]);
            secondValue = parseFloat(calcArr[2]);
            let value = operate(operator,firstValue,secondValue);
            display.textContent = value;
            calcArr.splice(0,3,value);
        }

        if (calcArr.includes(NaN)){
            display.textContent = 'Error'
        }

        if (calcArr.length===0||calcArr.includes(undefined)){
            display.textContent = 'Error';
        }
        
               
    })

});

equalsBtn.addEventListener('click', ()=>{
    if (calcArr.length!==0){
        calcArr.push(displayArr.join(''));
        displayArr = [];
        firstValue = parseFloat(calcArr[0]);
        operator = calcArr[1];
        secondValue = parseFloat(calcArr[2]);
        let value = operate(operator,firstValue,secondValue);
        calcArr = [value];

        if (calcArr.includes(undefined)){
            display.textContent = 'Error';
        }else{
            display.textContent=value;
        }
        

        if (calcArr.includes(NaN)){
            display.textContent = 'Error'
        }
    }
    

});



