//Budget - Tracker



// Declare variables




let balance = 0;
const transactions = [];
const categories = [ "Food", "Transport", "Entertainment", "Bills", "Other"];

// TODO: Complete the function to add a transaction with validation and update balance
function addTransaction(amount, type, category) {
    // Hint: Use if statements to check if the amount is a positive number,
    if(amount< 0 || typeof amount !== 'number'){
        console.log(`Invalid Amount : ${amount}`)
        return;
    }
    // if the type is "income" or "expense", and if the category is in the categories array.
    if(type !== "income" && type!=="expense"){
         console.log(`Invalid type :${type} `)
            return;
    }

    // If valid, create a transaction object and use transactions.push() to add it to the array.

    if (!categories.includes(category)) {
        console.log(`Invalid Category: ${category}`);
        return;
    }
    // Use a ternary operator to update the balance.
    let transactionObj = {amount , type , category}
    transactions.push(transactionObj)

    balance += type === 'expense'? -amount : amount
}

// TODO: Complete the function to calculate total expenses for each category
function getCategorySummary() {
    // Hint: Create an empty object for summary.
    let sum = {};
    // Use a for...of loop to initialize each category in summary to 0.
    for (let eachCategory of categories){
        sum[eachCategory] = 0;
    }
    // Use another for...of loop to go through transactions and add up expenses for each category.
    for (let trans of transactions){
       if(trans.type == "expense"){
        sum[trans.category] += trans.amount
       }
    }
    return sum;
}

// TODO: Complete the function to display the current balance and expenses by category
function showBudgetStatus() {
    // Hint: Use console.log to print the balance.
    console.log("Balance : " , balance)
    // Call getCategorySummary() to get the summary object.
    let getSum = getCategorySummary();
    // Use a for...in loop to print each category and its total expense.
    for (let i in getSum){
        console.log(`${i} : ${getSum[i]}$`)
    }
}


// Test the budget tracker
function runDemo() {
    // Adding sample transactions
    addTransaction(1000, "income", "Other");
    addTransaction(200, "expense", "Food");
    addTransaction(150, "expense", "Transport");
    addTransaction(300, "expense", "Entertainment");
    addTransaction(100, "expense", "Bills");

    // case handle
    addTransaction("name", "income", "Other");
    addTransaction(500, "income", "not-in");
    addTransaction(150, "pay-pay", "Other");
    
    // Show final status
    showBudgetStatus();
}

// Run the demo
runDemo();