Array.prototype.aTuanTrollEmReduce = function (cb, initial) {
    let i = 0;
    let aTuanlength = this.length
    if (arguments.length < 2) {
        i = 1
        initial = this[0]
    }
    for (; i < aTuanlength; i++) {
        initial = cb(initial, this[i], i, this)
    }
    return initial;
}



Array.prototype.aTuanTrollEmMap = function (callback) {
    let output = [];
    let aTuanlength = this.length;
    for (let i = 0; i < aTuanlength; i++) {
        let result = callback(this[i], i, this);
        output.push(result);
    }
    return output;
}



Array.prototype.aTuanTrollEmFilter = function (callback) {
    let output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}


const user = {
    currentBalance: 5000,
    transactionsMonthToDate: [{}],
};

user.transactionsMonthToDate = [
    {
        amount: 3000,
        type: "deposit",
        category: "Salary - Full Time",
    },
    { category: "Dining", amount: 50, type: "withdrawal" },
    { category: "Dining", amount: 100, type: "withdrawal" },
    { category: "Rent", amount: 2000, type: "withdrawal" },
    { category: "Groceries", amount: 250, type: "withdrawal" },
    {
        amount: 250,
        type: "withdrawal",
        category: "Transportation",
    },
    {
        amount: 250,
        type: "withdrawal",
        category: "Health",
    },
    {
        amount: 50,
        type: "withdrawal",
        category: "Travel - Fuel",
    },
    { category: "Living", amount: 650, type: "withdrawal" },
    { category: "Groceries", amount: 500, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    {
        amount: 5000,
        type: "deposit",
        category: "Salary - Part Time",
    },
    { category: "Groceries", amount: 450, type: "withdrawal" },
    {
        amount: 58,
        type: "withdrawal",
        category: "Transportation",
    },
    {
        amount: 50,
        type: "withdrawal",
        category: "Health",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Transportation",
    },
    {
        amount: 150,
        type: "withdrawal",
        category: "Transportation",
    },
    { category: "Groceries", amount: 100, type: "withdrawal" },
    {
        amount: 100,
        type: "withdrawal",
        category: "Entertainment",
    },
    {
        amount: 500,
        type: "withdrawal",
        category: "Entertainment",
    },
    { category: "Groceries", amount: 300, type: "withdrawal" },
    {
        amount: 500,
        type: "withdrawal",
        category: "Travel - Airline",
    },
    {
        amount: 1500,
        type: "withdrawal",
        category: "Travel - Hotel",
    },
    {
        amount: 50,
        type: "withdrawal",
        category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
        amount: 500,
        type: "deposit",
        category: "Portfolio Dividends",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Entertainment",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
        amount: 100,
        type: "withdrawal",
        category: "Entertainment",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Health",
    },
];

Array.prototype.aTuanTrollEmSome = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}
//
Array.prototype.aTuanTrollEmEvery = function (callback) {
    let output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

//
Array.prototype.aTuanTrollEmEach = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}


const transactionHistoryPrint = () => {
    console.log('Balance:', `${user.currentBalance}`);
    console.log('Transaction History:');
    let amountOfMoney = user.currentBalance;
    user.transactionsMonthToDate.aTuanTrollEmEach(trans => {
        if (trans.type === 'deposit') {
            amountOfMoney += trans.amount;
            console.log(`- You deposited \$${trans.amount}. The new balance is \$${amountOfMoney}.`);
        } else {
            amountOfMoney -= trans.amount;
            console.log(`- You withdrew \$${trans.amount}. The new balance is \$${amountOfMoney}.`);
        }
    });
};


// Define a function that returns the total number of deposits.
const numberOfDeposits = () => {
    const num = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + (trans.type === 'deposit'), 0);
    console.log('Number of Deposits:', num);
};
// numberOfDeposits();


//   Define a function that returns the total number of withdrawals.
const numberOfWithdrawals = () => {
    const num = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + (trans.type === 'withdrawal'), 0);
    console.log('Number of Withdrawals:', num);
};
// numberOfWithdrawals();


//   Define a function that returns the sum of deposits.
const sumOfDeposits = () => {

    const sum = user.transactionsMonthToDate.reduce((acc, trans) => {
        if (trans.type === 'deposit') {

            acc += trans.amount
        }
    }, 0);
    console.log('Sum of Deposits:', sum);
};
// sumOfDeposits();


//   Define a function that returns the sum of withdrawals.
const sumOfWithdrawals = () => {
    const sum = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    console.log('Sum of Withdrawals:', sum);
};
// sumOfWithdrawals();

// Define a function that returns the difference between deposits and withdrawals.
const difference = () => {
    const sumWithdrawals = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    const sumDeposits = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log(`The difference between deposits and withdrawals: ${sumDeposits - sumWithdrawals}`);
}
// difference()

//Define a function that returns a new balance for the next month.

const newBalance = () => {
    const sumWithdrawals = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    const sumDeposits = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log(`The difference between deposits and withdrawals: ${sumDeposits - sumWithdrawals + user.currentBalance}`);
}
// newBalance()

//Define a function that returns the sum of the groceries.
const sumGroceries = () => {
    const sum = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.category === 'Groceries'), 0);
    console.log('Sum of Withdrawals:', sum);
}
// sumGroceries()

//Define a function that returns the sum of the entertainment.
const sumEntertainment = () => {
    const sum = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => acc + trans.amount * (trans.category === 'Entertainment'), 0);
    console.log('Sum of Withdrawals:', sum);
}
// sumEntertainment();
// Define a function that returns the sum of the travel.
const sumTravel = () => {
    let output = 0;
    const sum = user.transactionsMonthToDate.aTuanTrollEmReduce((acc, trans) => {
        let find = trans.category.split(' ')[0]
        if (find === 'Travel') {
            console.log(output += trans.amount);
        }
    }, 0);


}
// sumTravel()

//Define a function that given a conversion rate of 23000vnd to 1usd returns if the account spent more usd than vnd was deposited into the account for the month.

const usdToVND = 23000;

const differenceVND = () => {
    const sumWithdrawals = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    const sumDeposits = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log(`The difference between deposits and withdrawals: ${(sumWithdrawals - sumDeposits) * usdToVND}`);
};
differenceVND();
//Define a function that returns an array of new objects where currency is VND and the amount is it's converted amount.
const currencyObject = () => {
    return {
        currentBalance: user.currentBalance * 23000,
        transactionsMonthToDate: user.transactionsMonthToDate.aTuanTrollEmMap(a => {
            return {
                category: a.category,
                amount: a.amount * 23000,
                type: a.type
            }
        })
    }
}
// console.log(currencyObject());

//Use a for loop to print out the transaction history for the month in this format:
const transactionHistoryPrintVND = () => {
    console.log(`Balance: ₫${user.currentBalance * usdToVND}`);
    console.log('Transaction History:');
    let amountOfMoney = user.currentBalance;
    user.transactionsMonthToDate.forEach(trans => {
        if (trans.type === 'deposit') {
            amountOfMoney += trans.amount;
            console.log(`- You deposited \₫${trans.amount * usdToVND}. The new balance is \₫${amountOfMoney * usdToVND}.`);
        } else {
            amountOfMoney -= trans.amount;
            console.log(`- You withdrew \₫${trans.amount * usdToVND}. The new balance is \₫${amountOfMoney * usdToVND}.`);
        }
    });
};
// transactionHistoryPrintVND();


//7. Exercice Nested Structure : Order
const order = {
    orderItems: [
        { id: "M40", item: "T-shirt", price: 29.9, quantity: 5, gender: 'm', category: 'Summer' },
        { id: "M32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'm', category: 'Winter' },
        { id: "M11", item: "Sandals", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
        { id: "M12", item: "Shorts", price: 29.9, quantity: 1, gender: 'm', category: 'Summer' },
        { id: "M13", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'm', category: 'Exercise' },
        { id: "M41", item: "Shoes", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
        { id: "M49", item: "Socks", price: 5.9, quantity: 10, gender: 'm', category: 'Undergarment' },
        { id: "M01", item: "Belt", price: 15.9, quantity: 1, gender: 'm', category: 'Accessory' },
        { id: "M42", item: "Underwear", price: 19.9, quantity: 10, gender: 'm', category: 'Undergarment' },
        { id: "F71", item: "T-shirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
        { id: "F81", item: "Dress", price: 49.9, quantity: 5, gender: 'f', category: 'Summer' },
        { id: "F91", item: "Skirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
        { id: "F01", item: "Shoes", price: 19.9, quantity: 10, gender: 'f', category: 'Summer' },
        { id: "F32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'f', category: 'Winter' },
        { id: "F34", item: "Sandals", price: 19.9, quantity: 2, gender: 'f', category: 'Summer' },
        { id: "F36", item: "Shorts", price: 39.9, quantity: 3, gender: 'f', category: 'Summer' },
        { id: "F12", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'f', category: 'Exercise' },
        { id: "F19", item: "Sleeping", price: 39.9, quantity: 3, gender: 'f', category: 'Undergarment' },
        { id: "F42", item: "Socks", price: 5.9, quantity: 10, gender: 'f', category: 'Undergarment' },
        { id: "F43", item: "Underwear", price: 39.9, quantity: 10, gender: 'f', category: 'Undergarment' },
        { id: "F44", item: "Bra", price: 29.9, quantity: 10, gender: 'f', category: 'Undergarment' },
        { id: "F01", item: "Belt", price: 15.9, quantity: 1, gender: 'f', category: 'Accessory' },
    ]
};

// Define a function that returns the sum number of items in the order.
//Define a function that returns the total number of unique items in the order.
const sumNumberOfItems = () => {
    console.log('sum number of items:', order.orderItems.length);
    const allItems = [];
    order.orderItems.forEach(item => allItems.push(item.item));
    const allItemSet = new Set(allItems);
    console.log(allItemSet);
    console.log('total number of unique items:', allItemSet.size);
};
// sumNumberOfItems();

//Define a function that returns the number of male items in the order.
const numberMale = () => {

    let a = order.orderItems.aTuanTrollEmFilter((value) => {
        return value.gender === 'm'
    })
    console.log('the number of male items in the order', a.length);
};
// numberMale();
//Define a function that returns the number of female items in the order.
const numberFemale = () => {

    let a = order.orderItems.aTuanTrollEmFilter((value) => {
        return value.gender === 'f'
    })
    console.log('the number of female items in the order', a.length);
};
// numberFemale();

//Define a function that returns the number of summer items in the order.

const numberSummer = () => {

    let a = order.orderItems.aTuanTrollEmFilter((value) => {
        return value.category === 'Summer'
    })
    console.log('the number of female items in the order', a.length);
};
// numberSummer();

//Define a function that returns the number of under garment items in the order.

const numberGarment = () => {

    let a = order.orderItems.aTuanTrollEmFilter((value) => {
        return value.category === 'Undergarment'
    })
    console.log('the number of female items in the order', a.length);
};
// numberGarment();

//Define a function that returns the number of female under garment items in the order.
const numberFemaleUnderGarment = () => {

    let a = order.orderItems.aTuanTrollEmFilter((value) => {
        return value.category === 'Undergarment' && value.gender === 'f'
    })
    console.log('the number of female items in the order', a.length);
};
// numberFemaleUnderGarment();

//Define a function that returns the sum of all the unique items summer in the order.


//Define a function that returns the sum of all the summer items in the order.
const sumSummer = () => {
    let b = []
    let a = order.orderItems.aTuanTrollEmFilter((value) => {
        return value.category === 'Summer'
    })
    const allItemSet = new Set(b);
    console.log(allItemSet);
};
// sumSummer();

//Define a function that returns the sum of all the unique items male in the order.

//Define a function that mutates the object, adding an originalDate property as the current date.
Object.prototype.originalDate = function (callback) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return today = mm + '/' + dd + '/' + yyyy;

}
// originalDate()
order.orderItems.originalDate = originalDate()

// console.log(order);

//Define a function that mutates the object, adding a delivered property as false.
order.orderItems.delivered = false;
console.log(order);

//Define a function that mutates the object, adding subtotal property, the sum of all the items in the order.
const subTotal = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + (ord.quantity * ord.price), 0)
    return sum;
}
order.orderItems.subtotal = subTotal();
// console.log(order)


//Define a function that mutates the object, adding a salesTax property calculated at .07 percent * subtotal.
order.orderItems.salesTax = subTotal() * 0.07
// console.log(order.orderItems.salesTax)

//Define a function that mutates the object, adding grandTotal property, the sum of all the items in the order & sales tax.
order.orderItems.grandTotal = (subTotal() - subTotal() * 0.07)
// console.log(order.orderItems.grandTotal)


const summerUniqueUT = () => {
    const o = order.orderItems.filter(value => {
        return value.category === 'Summer'
    })
    console.log(o);
}
summerUniqueUT()