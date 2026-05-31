const swap = (arr1, id1, id2) => [ arr1[id2], arr1[id1] ] = [  arr1[id1], arr1[id2] ];

function pivot(arr, comparator, start=0, end=arr.length - 1){
    
    
    const pivot = arr[start];
    let swapIdx = start;
    
    for(let i = start + 1; i <= end; i++){
        
        if(comparator && typeof comparator === "function"){
            const compRes = comparator(pivot, arr[i])
            if(compRes > 0){
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }
        else {
            if(pivot > arr[i]){
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }
    }
    
    swap(arr, swapIdx, start);
    
    return swapIdx;
  
}

function quickSort(arr, comparator, low = 0, high = arr.length - 1) {
  
  if(low < high){
      const pi = pivot(arr, comparator, low, high);
      quickSort(arr, comparator, 0, pi - 1);
      quickSort(arr, comparator, pi + 1, high)
  }
  
  return arr
}

