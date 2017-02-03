var count = 0;
function bubbleSort(arr){
var incomplete = true;
let error = "You done fucked up A-A-ron";

  while (incomplete){    
    incomplete = false;
    
      for (var i = 0; i < arr.length-1; i++) {
        if(typeof arr[i] === "number"){
          if(arr[i]> arr[i+1]){
            var setAside = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = setAside;
            incomplete = true;
          }
        }else{
          return error;
        }
      }  
      count++;
  }
    
  return arr;
}

module.exports =  bubbleSort;