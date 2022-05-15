const display = document.querySelector('.display');
const numBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');


let firstValue = '';
let secondValue = '';
let operator = '';

display.textContent='0';


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

    display.textContent = '0';
    firstValue = '';
    secondValue = '';
    operator = '';
    calcArr = [];
    
}


clearBtn.addEventListener('click', ()=>{
    
    reset();
    
})

numBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        secondValue += e.target.textContent;
        display.textContent = secondValue;
    
    })
});

operatorBtns.forEach(btn=>{

    btn.addEventListener('click',(e)=>{

        if(firstValue != '' && secondValue != ''){
            
            firstValue = parseFloat(firstValue);
            secondValue = parseFloat(secondValue);
            let value = operate(operator,firstValue,secondValue);
            display.textContent = value;
            firstValue = value;
            secondValue = '';
            operator = e.target.textContent;
            display.textContent += ' ' + operator;

        }
        else{
            
            operator = e.target.textContent;
            firstValue = secondValue;
            display.textContent += ' ' + operator;
            secondValue = '';   

        }
        
        
    })

});

equalsBtn.addEventListener('click', ()=>{

    if(firstValue != '' && secondValue != ''){

        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        let value = operate(operator,firstValue,secondValue);
        display.textContent = value;
        
    }
   

});

decimalBtn.addEventListener('click', ()=>{

    if (!secondValue.includes('.')){
        secondValue += '.';
        display.textContent = secondValue;
    }

})

