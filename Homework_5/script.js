// Ex 1
function isIsogram(str){
    let arrayFromStr = Array.from(str.toLowerCase());
    let result = [];
    for (let i = 0; i < arrayFromStr.length; i++){
        if(result.indexOf(arrayFromStr[i]) === -1){
            result.push(arrayFromStr[i]);
        } else{
            return false;
        }
    }
    return true;
}

console.log(isIsogram('Machine'));
console.log(isIsogram('Area'));

// Ex 2
function digitsAreOdd(num, i = 0){
    let stringFromNum = String(num);
    if (i > stringFromNum.length - 1){
        return (Boolean(stringFromNum[i] % 2));
    }
    if (stringFromNum[i] % 2 !== 0){
        digitsAreOdd(num, i + 1);
    } else {
        return false;
    }
    return true;
}

console.log(digitsAreOdd(4211133));
console.log(digitsAreOdd(7791));
console.log(digitsAreOdd(5));

// Ex 3

/**
 * 
 * @param {[]} arr 
 * @param {[]} result 
 */
function flattensArray(arr, result = []){
    arr.forEach(function(elem){
        if(Array.isArray(elem)){
            flattensArray(elem,result);
        } else{
            result.push(elem);
        }
    })
    return result;
}

console.log(flattensArray([1, [3, 4, [1, 2]], 10]));
console.log(flattensArray([14, [1, [[[3, []]], 1], 0]]));

// Ex 4
function sumDigits(num){
    let result = 0;
    let numToArray = Array.from(num.toString()).map(Number);
    numToArray.forEach(function(elem){
        return result += elem;
    });
    if(String(result).length > 1){
        return sumDigits(result);     
    }
    return result;

}
console.log(sumDigits(999));
console.log(sumDigits(51));

// Ex 5
function binarySearch(arr, value, left = 0, right = arr.length - 1){

    let middle = Math.floor((left + right)/2);
    if(value === arr[middle]){
        return middle;
    }
    if(arr[middle] > value){
        return binarySearch(arr, value, left, middle - 1);
    } else {
        return binarySearch(arr, value, middle + 1, right);
    }
} 

console.log(binarySearch([5, 7, 9, 10, 11, 14, 18, 17], 14));