class BankAccount{

    constructor(owner,balance = 0){
        
        this.owner = owner;
        this.balance = balance;


    }


    deposit(money){
       this.balance += money;
        return;
    }

    widthdraw(money){

        if(this.balance < money){

            console.log("Insufficient funds");
            return;

        }

       this.balance -= money;
        return;

    }

}



const my_account = new BankAccount("Bob",400);

my_account.deposit(100);
my_account.widthdraw(500);
console.log(my_account.balance);
