let insertionSort = (function insertionSort(array){
  for (var i = 0; i < array.length; i++) {
    var holder = array[i];  //placeholder during swap
    
      let j = i-1;
      for (j; j >= 0 && array[j]>holder; j--) {  //second loop (depricating) to sort left while going right)
        array[j+1] = array[j]; //swap if number on left is smaller
      }
      array[j+1] = holder;
      //if number on left DNE or is smaller replace number on right with placeholder
  }
});

let arr = [5,8,9,2,4,7,9];
insertionSort(arr);