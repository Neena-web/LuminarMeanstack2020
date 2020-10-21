class Bank
{
    static bank_name="SBK"
    
    createaccount(pname,acno,balance)
    {
        this.person_name=pname;
        this.acno=acno;
        this.balance=balance;
        //this.bank_name=b_name
    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log("your"+Bank.bank_name+"account credited with"+amount+"avl blance="+this.balance)

    }
    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log("insufficinet balance in your account")
        }
        else{
            this.balance-=amount;
            console.log("your"+Bank.bank_name+"account debited with"+amount+"avl balance="+this.balance)
        }
    }
    balanceenq()
    {
        console.log("your current account balance="+this.balance)
    }
}
var obj=new Bank()
obj.createaccount("neena",1001,2000,"SBK")
obj.deposit(10000)



