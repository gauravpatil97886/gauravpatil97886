// Dynamic Programming (anyone)
// ● Write a function to compute the number of combinations that make up a given amount using a specified
// set of coin denominations. This is also known as the coin change problem.

function coinChange(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; 

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}

const amount = 6;
const coins = [1, 2, 4];

console.log("Number of combinations:", coinChange(amount, coins));