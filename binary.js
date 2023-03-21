//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

// let num = [45,12,6,89,2,5]
// let target = 6

// mergesort(num,leftIndex,rightIndex)
// if(leftIndex > rightIndex){
//     return ("null")
// }
// middle=((leftIndex+rightIndex)/2);
let num = [45, 12, 6, 89, 2, 5];
let target = 6;


function mergeSort(why) {
  if (why.length <= 1) {
    return why;
  }

  const middle = Math.floor(why.length / 2);
  const left = why.slice(0, middle);
  const right = why.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let a = 0;
  let b = 0;

  while (a < left.length && b < right.length) {
    if (left[a] < right[b]) {
      result.push(left[a]);
      a++;
    } else {
      result.push(right[b]);
      b++;
    }
  }

  return result.concat(left.slice(a)).concat(right.slice(b));
}


function binarySearch(arr, target) {
  let c = 0;
  let d = arr.length - 1;

  while (c <= d) {
    let middle = Math.floor((c +d) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      c = middle + 1;
    } else {
      d = middle - 1;
    }
  }

  return null;
}


const sortedNum = mergeSort(num);


const results = binarySearch(sortedNum, target);

console.log(results);


//Given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]

function mergeSortDescending(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return mergeDescending(mergeSortDescending(left), mergeSortDescending(right));
  }
  
  function mergeDescending(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] >= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  let arr=[123,89,5,23,9,56];
  let sortedArr = mergeSortDescending(arr);
  
  console.log(sortedArr); 

  //Given the following array, search for the following target
//let target = 34
//let arr2 = [1,4,78,2,67,3];

function search(target, array) {
    const sortedArray = mergeSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (sortedArray[mid] === target) {
        return mid;
      } else if (sortedArray[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return null;
  }
  
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  let take = 34;
  let arr2 = [1, 4, 78, 2, 67, 3];
  
  const result = search(take, arr2);
  
  console.log(result);

