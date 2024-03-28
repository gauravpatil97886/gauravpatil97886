// Algorithm 
// ● Binary Search: Implement the binary search algorithm to find the index of a given element in a sorted
// array. If the element is not present, return -1.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetElement = 9;

const index = binarySearch(sortedArray, targetElement);
console.log("Index of", targetElement, ":", index);
