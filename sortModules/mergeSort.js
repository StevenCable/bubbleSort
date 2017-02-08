let merge = ( function mergeSort(arr){
  if(arr.length <=1){
    return arr;
  }

  let middle = Math.floor((array.length/2));
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle, array.length);
  let sortedArr = merge(mergeSort(leftArr), mergeSort(rightArr));
  return sortedArr;


  function merge(left,right){
    let sorted = [];

    while(left.length && right.length){
      if(left[0] >right[0]){
        sorted.push(right[0]);
        right.shift();
      }else{
        sorted.push(left[0]);
        left.shift();
      }
    }
    while(right.length){
      sorted.push(right[0]);
      right.shift();
    }
    while(left.length){
      sorted.push(left[0]);
      left.shift();
    }
    return sorted;

  }

});

// let lA = [3,5,3,7,9];
// let rA = [11,2,4,8,6];
// mergeSort()