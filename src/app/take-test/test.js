function sortNumber(a, b) {
  return a - b;
}

function doesExist(element, array) {
  // console.log(array.indexOf(element + 1));
  return (array.indexOf(element + 1) == -1) ? false : true;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // console.log('Unordered ', A);
    
    const aSet = new Set(A);
    A = [...aSet];
    // console.log('Uniqe ', A);

    A.sort(sortNumber);
    // console.log('Ordered ', A);
    
    if (A[A.length-1] <= 0) {
      return 1;
    }
    
    // A.forEach(element => {
    //   if (!doesExist(element, A)) {
    //     return element+1;
    //   }
    // });

    for (index = 0; index < A.length; index++) {
      if (!doesExist(A[index], A)) {
        if (A[index] <= 0) {
          return 1;
        } else {
          return A[index]+1;
        }
      }
    }
    
    return A[A.length-1] + 1;
}


console.log(solution([]));
