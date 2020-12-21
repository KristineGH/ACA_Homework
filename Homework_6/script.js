// Ex 1
/**
 * 
 * @param {String} str 
 * @param {[]} arr 
 */
function findSublist(str, arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (check(str, arr[i]) && str.length === arr[i].length){
            result.push(arr[i]);
        }
    }
    return result;
}

/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 */
function check(str1, str2){
    for(let i = 0; i < str2.length; i++ ){
        if(str1.indexOf(str2[i]) === -1){
            return false;
        }
    }
    return true;
}
//console.log(check('asd', 'ad'));

console.log(findSublist('listen', ["enlists", "google", "inlets", "banana"]));
console.log(findSublist( 'pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']));

// Ex 2
/**
 * 
 * @param {String} str 
 * @param {Number} len 
 */
function contiguousSubstrings(str, len, res=[], j=0){
    if (str.length < len ){
        return 'Error';
    }
    if(str.length === len){
        res.push(str);
        return res;
    }
    for (let i = 0; i<str.length; i++){
        let newStr = str.slice(0,3);
        let rest = str.slice(j);
        res.push(newStr);
        return contiguousSubstrings(rest,len,res, j+1);
    }
    return res;
}
console.log(contiguousSubstrings('495215',3));

// Ex 3
function shuffleArray(arr) {
    var initialIndex = arr.length;
    let tempValue;
    let randomIndex;
    while (0 !== initialIndex) {
        randomIndex = Math.floor(Math.random() * initialIndex);
        initialIndex -= 1;
        tempValue = arr[initialIndex];
        arr[initialIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
    }
    return arr;
} 

let nums = [1, 2, 3, 4, 5];
console.log(shuffleArray(nums)); 

// Ex 4
function concatArrays(...args){
    let result = [];
    for (let i = 0; i < args.length; i ++){
        result.push(...args[i]);
    }
    return result;
}

console.log(concatArrays([1, 2], [2, 3], [3, 4]));
console.log(concatArrays(['1', 'hello'], [[1, 2], 2]))

// Ex 5
// Filter
function filter(arr, filterFunc) {    
    let newFilteredArray = [];           
    for(let i = 0; i< arr.length; i++) {       
        let clbFn = filterFunc(arr[i], i, arr);            
        if(clbFn){
            newFilteredArray.push(arr[i]); 
        }                   
    }    
    return newFilteredArray;
}
console.log(filter([1, 2, 5, 4], num => num % 2 === 0));

// Map
function myMap (arr, val){
    let newArray =[];
    for (let i = 0; i<arr.length; i++){
        newArray.push(val(arr[i]))
    }
    return newArray;
}
let res = myMap([1,2,3], index => index*2 );
console.log(res);

// Reduce
function reduce(arr, reducer, initialValue) {   
    let accumulator = initialValue === undefined ? 0 : initialValue            
    for(let i = 0; i < arr.length; i++) {       
        accumulator = reducer(accumulator, arr[i], i, arr);    
    }
    return accumulator; 
}


// ForEach
function froEach (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }

}
froEach(['a', 'b', 'c'], function(item, index, arr){
    console.log(item, index, arr);
})

// Ex 6

function user (obj){
    let getName = obj.name;
    let balance = obj.balance
    let deposit = function (amount){
        return balance =amount + obj.balance
    }
    let resetPassword = function(newP, oldP){
        if(oldP === obj.password){
            return newP;
        } else {
            return 'Access denied'
        }
    }
    let getBalance = function(password){
        if(password === obj.password){
            return obj.balance
        } else {
            return 'Access denied'
        }
    }
    return {
        getName,
        deposit,
        resetPassword,
        getBalance
    }
}

let userObj = {
    name: 'John',
    password: 'itsnotyourbusiness',
    balance: 100
}
let {getName, deposit, resetPassword,getBalance} = user(userObj);
console.log(getName);
console.log(deposit(150));
console.log(resetPassword('kkk1', 'itsnotyourbusiness'));
console.log(getBalance('itsnotyourbusiness'));

