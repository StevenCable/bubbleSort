//for loop with i to iterate the array once,
//for loop for j to iterate arr[j-nth loop],
//each j loop assign a temp aka 'key'
//compare each j to the key
//if key<[j] switch!
//start j loop over at [j+1] from last loop

let selection = ((arr)=>{

  for (var i = 0; i < arr.length; i++) {
    let j = i+1;
    for (j; j < arr.length; j++) {
      let temp = arr[i];
      if(arr[j]<arr[i]){
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

});

let arr = [5,8,9,2,4,7,9];
selection(arr);