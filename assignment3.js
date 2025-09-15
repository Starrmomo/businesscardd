
let Acct1 = {
    Name: "ade",
    Balance: 8000,
    Currency: "USD",
    Type: "Savings",
 };
 
let Acct2 = {
    Name: "idowu",
    Balance: 20000,
    Currency: "USD" ,
    Type: "Savings",
 };
 
let Acct3 = {
    Name: "fatima",
    Balance: 90000,
    Currency: "EUR" ,
    Type: "Savings",
 };
 
let Acct4 = {
    Name: "starr",
    Balance: 40000,
    Currency: "EUR" ,
    Type: "Checking",
 };
 
// Simulate deposits:  Add different deposit amounts to two accounts.
// Show the new balances.
let depositamount1 = 3000
let depositamount2 = 6000
 
//add depositamount1 to acct1
Acct1.Balance += depositamount1
console.log("The current balance1 is: " +   Acct1.Balance)
 
Acct2.Balance += depositamount2
console.log("The current balance2 is: " + Acct2.Balance)
 
//Simulate withdrawals:
// Attempt withdrawals from two accounts.
// If the balance is insufficient, print:
// "Withdrawal denied for <name>: insufficient funds"
 
let withdrawalamount3 = 2000
let withdrawalamount4 = 1200
 

if (Acct3.Balance >= withdrawalamount3) {
    (Acct3.Balance -= withdrawalamount3)
   
} else {
    console.log ( "insufficient balance")
   
}
 

if (Acct4.Balance >= withdrawalamount4) {
    console.log (Acct4.Balance -= withdrawalamount4)
   
} else {
    console.log ( "insufficient balance")
   
}
 
//Transfers:  Transfer money between two accounts only if they have the same currency.
//  If currencies are different, print:  "Transfer failed: currency mismatch"
 
let transferamount = 40000
if (Acct1.Currency === Acct2.Currency ) {
   Acct1.Balance -= transferamount
   Acct2.Balance += transferamount
   console.log ("The current balance of acct1 is: " + Acct1.Balance + "The current balance of acct2 is :" + Acct2.Balance)
   
} else {
    console.log("Currency mismatch")
   
}
//Monthly maintenance:
// If account type is "Savings", add interest (e.g., 2% of balance).
// If account type is "Checking", deduct fees (e.g., 50 units).
 

 

 

 
 