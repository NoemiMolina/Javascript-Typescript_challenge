// 1 

class Statistics {
    tablo: number[]

    constructor(tablo: number[]) {
        this.tablo = tablo
    }

    get_count(): string {
        let result = `Count: ${this.tablo.length}`;
        return result;
    }
    get_sum(): string {
        let somme = this.tablo.reduce((acc, cur) => acc + cur, 0);
        return 'Sum: ' + somme;
    }
    get_min(): string {
        return 'Min: ' + Math.min(...this.tablo)
    }
    get_max(): string {
        return 'Max: ' + Math.max(...this.tablo)
    }
    get_range(): string {
        return 'Range: ' + (Math.max(...this.tablo) - Math.min(...this.tablo))
    }
    get_mean(): string {
        let sum = 0;
        for (let i = 0; i < this.tablo.length; i++) {
            sum += this.tablo[i];
        }
        return 'Mean: ' + Math.floor(sum / this.tablo.length)
    }
    get_median(): string {
        this.tablo.sort();
        let terreDuMilieu = Math.floor(this.tablo.length / 2);
        let valeur = this.tablo[terreDuMilieu];
        return 'Median: ' + valeur
    }
    public describe(): string {
        return this.get_count() + '\n' + this.get_sum() + '\n' + this.get_min() + '\n' + this.get_max() + '\n' + this.get_range() + '\n' + this.get_mean() + '\n' + this.get_median()

    }
};

const stats = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log('Ton result : ' + '\n' + stats.describe())


// 2

class PersonAccount {
    firstName: string;
    lastName: string;
    incomes: number;
    expenses: number;

    constructor(firstName: string, lastName: string, incomes: number, expenses: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses
    }

    total_income(): string {
        return 'total income: ' + 30000

    }
    total_expense(): string {
        return 'total expense: ' + 15000

    }
    account_info(): string {
        return 'account info: ' + 'FR2007A98R4'
 
    }
    add_income(): string {
        return 'add income: ' + 15

    }
    add_expense(): string {
        return 'add expense: ' + 300

    }
    account_balance(): string {
        return 'account balance: ' + 980

    }
    public get_info(): string {
        return 'Firstname: ' + this.firstName + '\n' + 'Lastname: ' + this.lastName + '\n' + 'Incomes: ' + this.incomes + '\n' + 'Expenses: ' + this.expenses + '\n' + this.total_income() + '\n' + this.total_expense() + '\n' + this.account_info() + '\n' + this.add_income() + '\n' + this.add_expense() + '\n' + this.account_balance()
    }

};

const compte = new PersonAccount('Mishka', 'Buonore-Molina', 1200, 500);
console.log('Ton result de person account: ' + '\n' + compte.get_info())










