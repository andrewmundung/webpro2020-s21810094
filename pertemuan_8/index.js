let account = {

  name: 'andrew',
  expenses: [],

  addExpense(description, amount) {
      account.expenses.push({
          description: description,
          amount: amount
      });
  },
  getAccountSummary(){
    let totalExpenses = 0
    account.expenses.forEach(function(expenses){
    totalExpenses = totalExpenses + expenses.amount
    });
    return totalExpenses;
}
}
account.addExpense('sewa', 5000);
account.addExpense('biaya', 1000);
console.log("Total Pengeluaran " +  account.name + " adalah " + account.getAccountSummary())