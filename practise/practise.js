// // function sumof_array(arr)
// // {
// //     let ans=0;
// //     for(let i=0;i<arr.length;i++)
// //     {
// //         ans+=arr[i]
// //     }

// //     return ans
// // }


// // function sumof_array(arr)
// // {
// //     let sum=0;
// //     for(let num of arr)
// //     {
// //         sum=sum+num
// //     }
// //     return sum
// // }

// function binarySearch(arr, target) {


//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (arr[middle] === target) {
//             return middle;
//         } else if (arr[middle] < target) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }

//     return -1; 
// }

// function linear_serch(arr,target)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i]===target)
//         {
//             return i    
//         }

//         else -1
//     }

// }

// const arr = [1, 3, 5, 7, 9, 2, 13, 15];

// const maxn=arr.filter((nums)
// {
//     return max nums
// })

// const target = 9;
// const index = binarySearch(arr, target);
// const lin=linear_serch(arr,target)
// console.log(lin)
// console.log(index);


// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 6, 66, 66];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);


// function liniearsearch(arr,target)
// {
//     for(let i=0;i<=arr.length;i++)
//     {
//         if(arr[i]===target)
//         {
//             return i;
//         }

//     }
//     return -1
// }

// function binarySearch(arr,target)
// {
//     start=0
//     end=arr.length-1
//     while(start<=end)
//     {
//        let midelement=Math.floor((start+end)/2)
//         if(arr[midelement]===target)
//         {
//             return midelement
//         }
//         else if(arr[midelement]<target)
//         {
//             start=midelement+1
//         }
//         else{
//             end=midelement-1
//         }
//     }

//     return -1

// }



// arr=[1,2,3,4,4,5,6]
// target=3
// console.log(binarySearch(arr,target))

// function reverse(str)
// {
// let strArray=str.split('');
// let left=0
// let right=strArray.length-1
// while(left<right)
// {
//     [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
//     left++
//     right--
    
// }

// return strArray.join('');

// }


// function reverseStringInPlace(str)
// {
//     let reverse=''
//     for(let i=str.length-1;i>=0;i--)
//     {
//         reverse+=str[i]
//     }

//     return reverse
// }


// let inputString = "hello";
// console.log("Original string:", inputString);
// inputString = reverseStringInPlace(inputString);
// console.log("Reversed string:", inputString);



// function sumof_array(arr) {
//     let ans = 0;
//     for (let i = 0; i < arr.length; i++) {
//         ans += arr[i];
//     }
//     return ans;
// }

function compressString(str) {
    let compressed = ''; // Initialize an empty string to store the compressed string
    let count = 1; // Initialize a count to track the number of consecutive characters

    // Iterate through each character of the input string
    for (let i = 0; i < str.length; i++) {
        // If the current character is the same as the next character, increment the count
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Append the current character and its count to the compressed string
            compressed += str[i] + count;
            // Reset the count for the next character
            count = 1;
        }
    }

    // Check if the compressed string is shorter than the original string
    return compressed.length < str.length ? compressed : str;
}

// Example usage:
const originalStr = "aabcccccaaa";
console.log(compressString(originalStr)); // Output: "a2b1c5a3"



function coinChange(amount, coins) {
    // Create an array to store the number of combinations for each amount
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // Base case: there is one combination to make up 0 amount

    // Iterate through each coin denomination
    for (const coin of coins) {
        // Update the number of combinations for each amount
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    // Return the number of combinations for the given amount
    return dp[amount];
}

// Example usage:
const amount = 5;
const coins = [1, 2, 5]; // Available coin denominations
console.log(coinChange(amount, coins)); // Output: 4 (combinations: [1,1,1,1,1], [1,1,1,2], [1,2,2], [5])


function generateFibonacci(terms) {
    // Initialize an array to store the Fibonacci sequence
    const fibonacci = [];

    // Base cases for the first two Fibonacci numbers
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    // Generate Fibonacci sequence
    for (let i = 2; i < terms; i++) {
        // Calculate the next Fibonacci number by adding the last two numbers in the sequence
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

// Example usage:
const terms = parseInt(prompt("Enter the number of terms for Fibonacci sequence:"));
const fibonacciSequence = generateFibonacci(terms);
console.log("Fibonacci sequence:", fibonacciSequence);


------------------------

// Author class to represent an author
class Author {
    constructor(name, biography) {
        this.name = name; // Name of the author
        this.biography = biography; // Biography of the author
    }
}

// Book class to represent a book
class Book {
    constructor(title, author, genre, publicationYear) {
        this.title = title; // Title of the book
        this.author = author; // Author of the book (an instance of the Author class)
        this.genre = genre; // Genre of the book
        this.publicationYear = publicationYear; // Publication year of the book
    }
}

// Patron class to represent a library patron
class Patron {
    constructor(name, membershipType) {
        this.name = name; // Name of the patron
        this.membershipType = membershipType; // Membership type of the patron
        this.booksCheckedOut = []; // Array to store the books checked out by the patron
    }

    // Method to check out a book
    checkOutBook(book) {
        this.booksCheckedOut.push(book);
        console.log(`${this.name} has checked out the book "${book.title}".`);
    }

    // Method to return a book
    returnBook(book) {
        const index = this.booksCheckedOut.indexOf(book);
        if (index !== -1) {
            this.booksCheckedOut.splice(index, 1);
            console.log(`${this.name} has returned the book "${book.title}".`);
        } else {
            console.log(`${this.name} does not have the book "${book.title}" checked out.`);
        }
    }
}

// Example usage:
const author1 = new Author("J.K. Rowling", "British author known for the Harry Potter series.");
const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 1997);
const patron1 = new Patron("Alice", "Premium");
patron1.checkOutBook(book1);
patron1.returnBook(book1);
