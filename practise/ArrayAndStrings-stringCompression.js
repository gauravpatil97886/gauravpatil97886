// Implement a function that performs basic string compression using the counts of repeated characters.
// For example, the string "aabcccccaaa" would become "a2b1c5a3". If the compressed string would not
// become smaller than the original string, your function should return the original string

// Array and String

function compress_String(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

const originalString = "aabcccccaaa";
const compressedString = compress_String(originalString);
console.log("Compressed string:", compressedString);
