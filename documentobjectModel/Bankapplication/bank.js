class Bank {
    static getAccountDetails() {
        let data = {
            //data is an object
            test1: { username: "test1", password: "testone", balance: 5000, acno: 1001 },
            test2: { username: "test2", password: "testtwo", balance: 8000, acno: 1002 },
            test3: { username: "test3", password: "testthree", balance: 6000, acno: 1003 },
            test4: { username: "test4", password: "testfour", balance: 7000, acno: 1004 }
        }
        return data;

    }
    static login() {
        let username = document.querySelector("#uname").value;
        let pwd = document.querySelector("#pwd").value;
        //check username is present inside data
        let data = Bank.getAccountDetails()
        if (username in data) {
            let password = data[username]["password"];
            if (pwd == password) {
                alert("login success")
                setTimeout(() => window.location.href = "userhome.html", 2000);


            }
            else {
                alert("invalid password")
            }
        }
        else {

            alert("invalid user")
        }




    }
    static deposit() {
        let username = document.querySelector("#uname").value
        let amount = Number(document.querySelector("#amount").value)
        let data = Bank.getAccountDetails();
        let deposit = document.querySelector("#depo")
        if (username in data) {
            data[username]["balance"] += amount;
            let bal = data[username]["balance"]
            deposit.textContent = "your available balance=" + bal;
            alert("avlbal=" + data[uname]["balance"])
        }
        else
            alert("invalid user")
    }

    static withdraw() {
        let uname = document.querySelector("#uname1").value
        let amount = Number(document.querySelector("#amount1").value)
        let data = Bank.getAccountDetails();
        let withdraw = document.querySelector("#with")
        if (username in data) {
            let avlbal = data[uname]["balance"]
            if (amt > avlbal) {
                alert("insufficient balance")
            }
            else {
                data[uname]["balance"] -= amount;
                let bal = data[uname]["balance"]
                withdraw.textContent = "your available balance=" + bal;
                alert("avlbal=" + data[uname]["balance"])
            }
        }
        else
            alert("invalid user")

    }
}