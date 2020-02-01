// Add your functions here
function map(arr, fn){
  let newArr = []
  forEach(el => { 
    newArr.push(fn(el))
    return newArr;
  }
}