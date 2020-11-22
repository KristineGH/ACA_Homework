// Ex 1 

function separateOddAndEven(arr) {
    let result = [[], []] ;
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] % 2 === 0) {
            result[1].push(arr[i]) ;
        } else {
            result[0].push(arr[i]) ;
        }
    }
    return result ;
};

console.log(separateOddAndEven([45, 12, 3, 6, 17, 0])) ;
console.log(separateOddAndEven([1, 3, 5, 9])) ;

// Ex 2

function filterRange (arr, a, b) {
    let result = [] ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > a && arr[i] < b) {
            result.push(arr[i]) ;
        }
    }
    return result ;
}

console.log(filterRange([1, 10, 20, 30], 9, 23)) ;
console.log(filterRange([100, 200, 300], 9, 23)) ;

// Ex 3 

function findById (arr, num) {
    let result ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === num) {
            result = arr[i] ;
        }
    }
    if (result === undefined) {
        result = 'No Data' ;
    }
    return result ;
}

const frameworks = [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" }
];

console.log(findById(frameworks ,3)) ;
console.log(findById(frameworks ,13)) ;

// Ex 4

function generateObject (arr) {
    let result = arr.map(function(elem , i) {
        return  {
            title: elem,
            idx : i
        }
    })
    return result ;
};
const arr1 = ['Godfather', 'Whiplash', 'Social Network'] ;

console.log(generateObject(arr1)) ;

// Ex 5

function removesWordsWihtLetter (arr, letter) {
    let result = [] ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase()[0] !== letter) {
            result.push(arr[i]) ;
        }
    }
    return result ;
}
const arr2 = ['Godfather', 'Game of thrones','Social Network'];

console.log(removesWordsWihtLetter(arr2, 'g')) ;

// Ex 6

function repetsTheShortest (str1 , str2){
    let fullRepeatCount = 1 ;
    let charsLeft = 0 ;
    let stringToRepeat = '' ;
    if (str1.length < str2.length) {
        fullRepeatCount = Math.floor(str2.length / str1.length);
        charsLeft = str2.length % str1.length;
        stringToRepeat = str1;
    } else {
        fullRepeatCount = Math.floor(str1.length / str2.length);
        charsLeft = str1.length % str2.length;
        stringToRepeat = str2;
    }
    let result = '' ;
    for (let i = 0; i < fullRepeatCount; i++) {
        result += stringToRepeat ;

    }
    result += stringToRepeat.substr(0, charsLeft) ;
    return result ;
};

console.log(repetsTheShortest("ingenius", "forest")) ;
console.log(repetsTheShortest("clap", "skipping")) ;

