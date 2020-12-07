// Ex 1
function removeFirstElement (arr, i = 0){
    if (arr.length <= 1){
        return [] ;
    }
    if (i === arr.length - 1){
        arr.pop() ;
        return arr ;
    }
    arr[i] = arr[i + 1];
    return removeFirstElement(arr, i + 1);
}

console.log(removeFirstElement([6, 78, 'n', 0, 1]));

// Ex 2
function convert (obj){
    let result = {} ;
    for(let keys in obj){
        if (result.hasOwnProperty(obj[keys])){
            let value =  Array.from(result[obj[keys]]);
            value.push(keys);
            result[obj[keys]] = value;
        } else {
            result[obj[keys]] = keys;
        }
    }
    return result;
}

console.log(convert({ a: '1', b: '2', c: '2', d: '2' }));

// Ex 3
function sortArray(arr){
    let result = [];
    for (let i = 0; i< arr.length; i++){
        if(arr[i].readStatus){
            result.push(arr[i])
        } 
    }

   result.sort((a,b) => (a.percent < b.percent) ? 1 :  -1 );
    return result;
}

let myArr = [
    { book: 'Catcher in the Rye&quot', readStatus: true, percent: 40},
    { book: 'Animal Farm', readStatus: true, percent: 20},
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The Fall&quot', readStatus: true, percent: 50 },
    { book: 'White Nights&quot', readStatus: false, percent: 60 } ,
    { book: 'After Dark', readStatus: true, percent: 70 }
];
console.log(sortArray(myArr));

// Ex 4
function rotateArray (arr, N){
    if (N === 0){
        return arr;
    } 

    if(N > 0)
    {
        let firstElem = arr[0]
        arr.shift();
        arr.push(firstElem);
        N--;

    }
    else
    {
        let lastElem = arr[arr.length - 1]; 
        arr.pop();
        arr.unshift(lastElem); 
        N++;       
    }
    return rotateArray (arr, N);
}

console.log(rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

// Ex 5

function buildTree(arr, parent) {
    let result = [];
    for(let i in arr) {
        if(arr[i].parent == parent) {
            let children = buildTree(arr, arr[i].id);

            if(children.length) {
                arr[i].children = children;
            }
            result.push(arr[i]);
        }
    }
    return result;
}

var treeNodes = [
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6}
]
console.log(buildTree(treeNodes));

// Ex 6


// Ex 7

function Person (name, surname, year){
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.map = function (value, key, obj){
        for (let keys in this){
            value = this[keys];
            key = keys;
            obj = this;;
        }
    } 
}

let me = new Person('Kristine', 'Gharibyan', 1999);
