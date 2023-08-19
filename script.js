let totalIncome = 0;
let totalExpenses = 0;

document.getElementById('add-income').addEventListener('click', function() {
    addAmount('income');
});

document.getElementById('add-expense').addEventListener('click', function() {
    addAmount('expense');
});

function addAmount(type) {
    let description = document.getElementById('description').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please provide a valid description and amount.');
        return;
    }

    if (type === 'income') {
        totalIncome += amount;
        document.getElementById('total-income').innerText = totalIncome.toFixed(2);
    } else if (type === 'expense') {
        totalExpenses += amount;
        document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    }

    updateBalance();
    clearInputs();
}

function updateBalance() {
    let balance = totalIncome - totalExpenses;
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function clearInputs() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
