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

function getNumbers(arr){

    return arr
            .join('')
            .split(operator);

}


clearBtn.addEventListener('click', ()=>{
    
    displayText = '0';
    firstValue = 0;
    secondValue = 0;
    operator = '';
    calcArr = [];
    displayArr=[];
    display.textContent=displayText;

})

numBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        calcArr.push(e.target.textContent);
        displayArr.push(e.target.textContent);
        displayText = displayArr.join('');       
        display.textContent = displayText;
        console.log(calcArr);

    })
});

operatorBtns.forEach(btn=>{

    btn.addEventListener('click',(e)=>{

        operator = e.target.textContent;
        calcArr.push(e.target.textContent);
        display.textContent = e.target.textContent;
        displayArr = [];   
               
    })

});

equalsBtn.addEventListener('click', ()=>{

    console.log(calcArr);

    const numbers = getNumbers(calcArr);
    firstValue = parseInt(numbers[0]);
    secondValue = parseInt(numbers[1]);
    const value = operate(operator,firstValue,secondValue);
    display.textContent = value;
    calcArr = [value];



});



