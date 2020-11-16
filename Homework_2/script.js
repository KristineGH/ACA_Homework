// Ex 1

function moreThanNum(arr, num) {
    let result = [] ;
    for (let i = 0; i<arr.length; i++){
        if(arr[i] > num){
            result.push(arr[i]) ;   
        }
    }
    if (result.length === 0) {
        return 'Such values do not exist.';
    }
    return result ;
}

console.log(moreThanNum([10, 25, 16, -5, 30, 15, 24] , 16)) ;
console.log(moreThanNum([1, 1, 2, -3, 0, 8, 4, 0], 9)) ;

// Ex 2

function isEven(num1, num2) {  
    let result = [] ; 
    for (i = num1; i<=num2; i++){
        if (checkDigitsEven(i)){
            result.push(i) ;
        } 
    }
    if (result.length === 0) {
        return'Such numbers does not exist' ;
    }
    return result ;
}

function checkDigitsEven(num) {
    let nums = num.toString() ;
    for (let a = 0 ; a<nums.length; a++) {
        if (nums[a] % 2 !== 0) {
            return false;
        }
    }
    return true ;
}

console.log(isEven(19, 42)) ;


//Ex 3

function orderIsViolated (arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return i + 1 ;  
        }    
    }
    return -1;
}

console.log(orderIsViolated([2, 12, 15, 48, 64])) ;
console.log(orderIsViolated([-9, -4, -4, 3, 12, 4, 5])) ;

// Ex 4

function largestProduct (arr) {
    let result = Number.MIN_SAFE_INTEGER ;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] * arr[i + 1] > result) {
            result = arr[i] * arr[i + 1];
        }
    }
    return result ;
}

console.log(largestProduct([5, 7, 2, 9]));

//Ex 5

function missingNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    let min = arr[0] ;
    let max = arr[arr.length - 1];
    let result = [];

    for (let i=min; i<=max; i++ ) {          
        result.push(min);
        min += 1;
    }
    return result.length - arr.length ;  
}

console.log(missingNumbers([2, 5, 1, 9,7]));

// Ex 6

function sum(arr) {
    let result = [] ;
    for (let i = 0; i<arr.length; i++) {
        result.push(sumOf(arr[i])) ; 
    } 
    return result;
} 

function sumOf (arr1) {
    let res = 0 ;
    for (let j =0; j<arr1.length; j++){
        res+= arr1[j] ;
    }
    return res ;
}

console.log(sum([[3, 4, 5], [1,0,0], [4, 5, 4], [8, 8, -1]])) ;

// Ex 7

function multArrLength(arr) {
    let arrWithoutEvens = [];
    let result = [];
    for (let i=0; i<arr.length; i++) {
       if (arr[i] % 2 !== 0) {
            arrWithoutEvens.push(arr[i]);
        }
    }
    for (let j = 0; j <arrWithoutEvens.length; j++) {
        result.push(arrWithoutEvens[j] * arrWithoutEvens.length) ;
    }
    return result ;
}

console.log(multArrLength([5, 4, 78, 0, -3, 7])) ;













