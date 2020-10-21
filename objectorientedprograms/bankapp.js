class Bank
{
    constructor(pname,acno,balance,b_name)//constructer
    {
        this.person_name=pname;
        this.acno=acno;
        this.balance=balance;
        this.bank_name=b_name
    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log("your"+this.bank_name+"account credited with"+amount+"avl blance="+this.balance)

    }
    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log("insufficinet balance in your account")
        }
        else{
            this.balance-=amount;
            console.log("your"+this.bank_name+"account debited with"+amount+"avl balance="+this.balance)
        }
    }
    balanceeng()
    {
        console.log("your current account balance="+this.balance)
    }
}
var obj=new Bank("neena",1001,2000,"SBK")

obj.deposit(10000)
obj.withdraw(5000)
//different type of variables
//local variables
//instance variables are always prepend with this key word we can access instance variable using "this" keywoed-inside class
//outside class we can access by using reference name
