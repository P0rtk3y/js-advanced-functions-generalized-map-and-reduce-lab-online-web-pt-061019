// Add your functions here
const map = function(arr, fn){
    let newArr = []
    for(const el of arr) {
        newArr.push(fn(el))
    }
    return newArr
}