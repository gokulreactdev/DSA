function merge(arr1, arr2, compareFn){
  // add whatever parameters you deem necessary - good luck!
    
  let i = 0;
  let j = 0;
  const results = []
  

   while(i < arr1.length && j < arr2.length){
       

       
       const arr1CurValue = arr1[i];
       const arr2CurValue = arr2[j];
       
       if(compareFn && typeof compareFn === "function" ){
           
           const compRes = compareFn(arr1CurValue, arr2CurValue);
           
           if(compRes > 0 ) { 
               results.push(arr2[j]);
               j++;
           } else if(compRes < 0 ) { 
               results.push(arr1[i]);
               i++;
           } 
          else {
              results.push(arr1[i], arr2[j]);
              i++;
              j++;
          }
           
       } else {
           
         if (arr1CurValue > arr2CurValue ) {
           
           results.push(arr2[j]);
           j++;

           
         } else {
                   
           results.push(arr1[i]);
           i++;   

         }
       }
       
   }
   
   while(i < arr1.length){
       results.push(arr1[i]);
       i++;
   }
   
   while(j < arr2.length){
       results.push(arr2[j]);
       j++;
   }
   
   return results;
}

function mergeSort(arr, compareFn){
     console.log(compareFn, arr);
  
    if(arr.length <= 1) return arr;
    
    const mid = Math.floor( arr.length / 2 );
    const leftSide = mergeSort(arr.slice(0, mid), compareFn);
    const rightSide = mergeSort(arr.slice(mid), compareFn);
    
    return merge(leftSide, rightSide, compareFn);
}