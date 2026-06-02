function getDigit(num, i) {
   return Math.floor( Math.abs(num) / Math.pow(10, i) ) % 10;
}

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  
  let maxDigits = 0;
  
  for(let i = 0; i < nums.length; i++){
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  
  return maxDigits;
  
}


function radixSort(nums) {
  const k = mostDigits(nums);
  
  
  for(let i = 0; i < k; i++){
      let maxBuckets = Array.from( { length: 10}, () => []);
      
      for(let j = 0; j < nums.length; j++){
          const bucketIndex = getDigit(nums[j], i);
          
          maxBuckets[bucketIndex].push(nums[j]);
      }
      nums = [].concat(...maxBuckets);
  }
  
  return nums;
  
}