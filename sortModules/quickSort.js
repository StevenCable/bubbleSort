//need variables to store left right and pivot

let array = [5,3,4,8,9];

let quickSort = (function(arr){
  let leftArr = [];
  let rightArr = [];

  if(arr.length === 0){
    console.log('eureka!', arr);
    return arr;
  }

  let pivot = arr[0]; 
  for (var i = 1; i < arr.length; i++) {
    console.log("pivot: ", pivot);
    if(arr[i]< pivot){
      leftArr.push(arr[i]);
      console.log('leftArr: ', leftArr);
    }else{
      rightArr.push(arr[i]);
      console.log('rightArr: ', rightArr);
    }
  }
  let whatever = quickSort(leftArr).concat(pivot, quickSort(rightArr));
  console.log("sorted Array: ", whatever);
  return whatever;


});

quickSort(array);