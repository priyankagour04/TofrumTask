function findLongestSubstringLength(s) {
    let maxLength = 0; // Stores the length of the longest substring found
    let currentSubstring = ""; // Stores the current substring

    for (let char of s) {
        // If the character is already in the current substring
        if (currentSubstring.includes(char)) {
            // Remove everything before (and including) the first occurrence of the repeated character
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        // Add the current character to the substring
        currentSubstring += char;

        // Update maxLength if the current substring is longer
        maxLength = Math.max(maxLength, currentSubstring.length);
    }

    return maxLength; // Return the length of the longest substring without repeats
}

console.log(findLongestSubstringLength("ABCBC")); // Output: 3  
console.log(findLongestSubstringLength("AAA"));   // Output: 1
