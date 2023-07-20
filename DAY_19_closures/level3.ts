import exp from "constants";

function stats() {
    let intro = 'salut !';
    let firstName = 'Prénom : Mishka';
    let lastName = 'Nom de famille : MOLINA-BUONORE';
    let incomes = 3000;
    let expenses = 1500;
    function totalIncome(totalI: number) {
        return `${intro}  ${firstName} ${lastName} les incomes : ${incomes}, les expenses:  ${expenses} , total Income : ${totalI}`
    };
    function totalExpense(totalE: number) {
        return `${intro}  ${firstName}  ${lastName} les incomes : ${incomes}, les expenses:  ${expenses} , le total Expense : ${totalE} `
    };
    function accountInfo(accInfo: string) {
        return `${intro}  ${firstName}  ${lastName} les incomes : ${incomes}, les expenses:  ${expenses} , account info : ${accInfo} `
    };
    function addIncome(addI : number) {
        return `${intro}  ${firstName}  ${lastName} les incomes : ${incomes}, les expenses:  ${expenses} , addIncome : ${addI} `
    };
    function addExpense (addE : number) {
        return `${intro}  ${firstName}  ${lastName} les incomes : ${incomes}, les expenses:  ${expenses} , add Expenses : ${addE} `
    };
    function accountBalance (accB : number) {
        return `${intro}  ${firstName}  ${lastName} les incomes : ${incomes}, les expenses:  ${expenses} ,  account Balance : ${accB}`
    };

    return {
        totalIncome: totalIncome(78954),
        totalExpense: totalExpense(5987),
        accountInfo: accountInfo('FR489GGFS65'),
        addIncome :addIncome(12),
        addExpense: addExpense(300),
        accountBalance: accountBalance(998)


    };
};

const person = stats();
console.log(person.accountInfo)