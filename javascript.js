const human = confirm("are you human");
console.log("human");
const name = prompt("what is your name");
console.log(name);
let jobtitle = prompt("what is your job");
console.log(jobtitle)




let monthlyincome = 2000000;
let dailyexpenses = 203023;
let monthlyexpenses = 3543545;
let saving = 324342;
let spending = 232323;

let left = monthlyincome - (dailyexpenses + monthlyexpenses + saving + spending);
console.log(`debt i'm in is${left}`);




let account1 = {
    name: 'idowu',
    balance: 1000000,
    currency: 'NGN'
};

let account2 = {
    name: 'ade',
    balance: 500000,
    currency: 'NGN'
};

let account3 = {
    name: 'fatima',
    balance: 700000,
    currency: 'NGN'
};


account1.balance += 5000 + 50000;
console.log(account1.balance);

account2.balance -= 60000;
console.log(account2.balance);

account3.balance -= 50000;
console.log(account3.balance);

if (account1.balance >= account2.balance) {
    console.log(`account1 has the highest`);
}
else (account1.balance <= account2balance)
{
    console.log(`account2 has the lowest`);
}


