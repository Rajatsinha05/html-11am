

class BankAccount {
    #username;
    #accountNo
    #number
    #amount
    #limit
    #type
    constructor(accountNo, username, number, type, limit) {
        this.#accountNo = accountNo;
        this.#username = username;
        this.#number = number;
        this.#amount = 0
        this.#limit = limit
        this.#type = type

    }

    getAccountNo() {
        return this.#accountNo;
    }

    setAccountNo(accountNo) {
        this.#accountNo = accountNo;
    }

    getUserName() {
        return this.#username;
    }
    setUserName(userName) {
        this.#username = userName;
    }

    getAmount() {
        return this.#amount;
    }

    depositAmount(amount) {
        if (amount < 1) {
            throw new Error("amount must be greater than zero")
        }
        else {
            this.#amount += amount;
        }

    }

    #canWithdraw(reqAmount) {
        if (this.#amount >= reqAmount) {
            return true
        }
        else {
            return false
        }

    }

    withdrawAmount(amount) {
        if (amount < 1) {
            throw new Error("amount must be greater than zero")
        }
        else {
            if (this.#canWithdraw(amount)) {
                this.#amount -= amount;
                console.log("jao khush rho");
            }
            else {
                console.log("8780090565trhfmghnxcvcvnhgljhjfgbfht");
            }
        }

    }


    banking() {
        console.log(" i am BankAccount");
    }
}


class SalaryAccount extends BankAccount {
    constructor(accountNo, username, number, type, limit, salary) {
        super(accountNo, username, number, type, limit)
        this.salary = salary
        this.creditCard = 50000
    }


    pay(amount) {
        console.log("jao khush rho" + amount);
    }

    billPayment(amount) {
        console.log("paid " + amount);

    }


    banking() {
        console.log(" i am SalaryAccount");
    }



}



class Insurance {
    constructor(insuranceNo, typeOfI, year, emi) {
        this.insuranceNo = insuranceNo
        this.typeOfI = typeOfI
        this.year = year
        this.emi = emi;

    }
}

class CuurentAccount extends SalaryAccount {

    banking() {
        console.log(" i am CuurentAccount");
    }

}



let sc = new SalaryAccount(98364874, "keshvi", 83924658767, "salary", 8767436, 9238465742)
// sc.pay(5000)

// sc.billPayment(10000)

sc.banking()