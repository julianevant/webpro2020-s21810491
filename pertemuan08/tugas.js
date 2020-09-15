let account = {
    Name: "Julian",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Kuliah', 6000000);
account.addExpenses('Kos', 800000);
console.log("Total pengeluaran " + name + "adalah Rp." + account.getAccountSummary());