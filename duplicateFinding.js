// function areAnyThereDuplicates(){
//     let collection = {};
//     console.log(typeof arguments, arguments);

//     for (let val in arguments){
//         collection[arguments[val]] = ( collection[arguments[val]] || 0 ) + 1;

//     }
//     console.log(collection);

//     for(let key in collection) {
//         if(collection[key] > 1) return true
//     }

//     return false;
// }

// const result = areAnyThereDuplicates(12222, 1222);
// console.log(result);

// function areAnyThereDuplicates1(...args){

//     args.sort((a, b)=>{
//         if(a > b) return 1;
//         if(b > a ) return -1;
//         return 0;
//     })

//     let start = 0;
//     let next = 1;

//     while(next < args.length){
//         if(args[start] === args[next]) return true;
//         start++;
//         next++;
//     }

//     return false;
// }

// const result1 = areAnyThereDuplicates1(1222, 1222);
// console.log(result1);

// function areAnyThereDuplicates2() {
//     console.log(arguments);
//     return new Set(arguments).size !== arguments.length
// }

// const result2 = areAnyThereDuplicates2(12223, 1222);
// console.log(result2);

function findAllDuplicates(nums) {
  let uniqueSet = new Set();
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    uniqueSet.has(nums[i]) ? ans.push(nums[i]) : uniqueSet.add(nums[i]);
  }

  return ans;
}

const result3 = findAllDuplicates([1, 2, 3, 4, 4, 5, 2, 1, 3]);
console.log(result3);
