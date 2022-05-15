function myEach(collection, callback) {
    for(let accessor in collection) {
        callback(collection[accessor])
    }
    return collection;
}

function myMap(collection, callback) {
    let modifiedArr = []
    for(let accessor in collection) {
        modifiedArr.push(callback(collection[accessor]))
    }
    return modifiedArr;
}

function myReduce(collection, callback, acc) {
    let copy = [...collection]
    acc = acc || copy.shift();
    for(let accessor in copy) {
       acc = callback(acc, copy[accessor], copy)
    }
    console.log('acc', acc)
    return acc
}

function myFind(collection, predicate) {
    for(let accessor in collection) {
        let element = collection[accessor]
        if(predicate(element)) {
            return element;
        }
    }
}

function myFilter(collection, predicate) {
    let selectedArr = [];
    for(let accessor in collection) {
        let element = collection[accessor]
        if(predicate(element)) {
            selectedArr.push(element)
        }
    }
    return selectedArr;
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(array, n = 1) {
    let count = 1;
    let arr = [];
    for(let accessor in array) {
        if(count <= n) {
            arr.push(array[accessor])
            count++
        }
    }
    return arr.length > 1 ? arr : arr[0]
}

function myLast(array, n = 1) {
    let startingIndex = array.length - n;
    return n > 1 ? array.slice(startingIndex, array.length) : array[startingIndex]
}

function myKeys(obj) {
    return Object.keys(obj)
}

function myValues(obj) {
    return Object.values(obj)
}