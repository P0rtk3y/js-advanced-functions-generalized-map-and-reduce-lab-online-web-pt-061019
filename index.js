// Add your functions here
function map(arr, fn){
  let newArr = []
  arr.forEach(el => { 
    newArr.push(fn(el))
  })
  return newArr;
}

function reduce(arr, fn, startingPoint){
  let updateStart = (!!startingPoint) ? startingPoint : arr[0];
  
  let index = (!!startingPoint) ? 0 : 1;
  
   for (; i < arr.length; i++){
    t = func(arr[i], t)
  }
}