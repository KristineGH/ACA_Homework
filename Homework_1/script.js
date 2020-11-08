// Ex 1

function printType (num) {
    if (num % 2 === 0) {
        return 'even' ;
    } else {
        return 'odd' ;
    }
}

console.log(printType(7)) ;

// Ex 2

function numsAverage (a, b, c, d, e) {
    return (a+b+c+d+e)/5
}

console.log(numsAverage(7, 52, -23, 9, -81)) ;

// Ex 3

function lastDigit (num) {
    let lastnum = num%10 ;
    if (lastnum === 0) {
        return num ;
    }
    let numberWithoutLastNum = (num - lastnum) / 10 ;
    
    return String(lastnum) + String(numberWithoutLastNum)  ;
}


console.log(lastDigit(120)) ;

// Ex 4

function check (num) {
    let isMultipleOf3 = (num % 3 === 0) ;
    let isMultipleOf5 = (num % 5 === 0) ;
    let isMultipleOf7 = (num % 7 === 0) ;

    if (isMultipleOf3 && isMultipleOf5 && isMultipleOf7) {
        return num + ' is a multiple of 3,5 and 7' ;
    } else if (isMultipleOf3 && isMultipleOf7) {
        return num + ' is a multiple of 3 and 7' ;
    } else if (isMultipleOf3 && isMultipleOf5) {
        return num + ' is a multiple of 3 and 5' ;
    } else if (isMultipleOf5 && isMultipleOf7) {
        return num + ' is a multiple of 3 and 5' ;
    } else if (isMultipleOf3){
        return num + ' is a multiple of 3' ;
    } else if (isMultipleOf5) {
        return num + ' is a multiple of 5' ;
    } else if (isMultipleOf7) {
        return num + ' is a multiple of 7' ;
    } 

    return num + ' is not a multiple of 3,5 or 7' ;
    
}

console.log(check(420)) ;

// Ex 5

function printStar (num, symb) {
    num = num*2 - 1
    let result = '' ;
    let space = '  ' ;
    for (let i=0; i<num; i++) {
        let row = '' ;
        for (let j = 0; j<num; j++) {
            if (i === j || i == num - j - 1) {
                row += symb ;
            } else {
                row += space ;
            }
        }
        result += row ;
        result += '\n' ;

    }

    return result ;
}

console.log(printStar(5, '* ')) ;

// Ex 6

function calculator (num1, symb, num2) {
    if (symb === '+') {
        return num1 + num2 ;
    } else if (symb === '-') {
        return num1 - num2
    } else if (symb === '*') {
        return num1 * num2 ;
    } else if (symb === '/' && num2 !== 0 ) {
        return num1 / num2 ;
    } else if (symb === '/' && num2 === 0) {
        return ` Can't devide by 0` ; 
    }
}

console.log(calculator(4, '*' , 2)) ;

// Ex 7

function validate (n, a, b) {
    if ( n > a && n < b && Number.isInteger(n) === true) {
        return true ;
    } else {
        return false ;
    }
}

console.log(validate(3.5 , 1, 6)) ; 

// Ex 8 

function hasKey (obj , key) {
    if (obj.hasOwnProperty(key) == true ) {
        return true ;
    } else {
        return false ;
    }
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d")) ;
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not")) ;

// Ex 9 


function add_suffix (suf) {
    return function (word) {
        return word + suf ;
    } 
}

let add_ly =  add_suffix('ly') ;
let add_less = add_suffix('less') ;

console.log(add_ly('hopeless')) ; 
