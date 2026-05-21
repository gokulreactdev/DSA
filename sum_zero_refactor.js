const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while ( left  < right ) {
        const sum = arr[left] + arr[right];
        if ( sum === 0 ) {
            return [arr[left], arr[right]]
        }else if (sum > 0) {
            right--;
        }else {
            left++;
        }
    }
    return ["No pair found"]
};

const result = sumZero( [-7,-6,0,1,2, 3] )

console.log(result);