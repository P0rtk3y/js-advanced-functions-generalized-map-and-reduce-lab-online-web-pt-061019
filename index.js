// Add your functions here
function map(arr, fn){
  let newArr = []
  arr.forEach(el => { 
    newArr.push(fn(el))
  })
  return newArr;
}