document.getElementById('cashout-btn').addEventListener("click",()=> {
    // get the agent number and validate
    const cashoutNumberInput = document.getElementById('cashout-number')
    const cashoutNumber = cashoutNumberInput.value

    if(cashoutNumber !== "01714333624") 
    {
        alert("Invalid Agent Number")
        return
    }


    // get the amount and validate
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;

    // get the current balance
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText

    // calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount)

    if(newBalance < 0 ) {
        alert("Invalid Amount")
        return
    }

    // get the pin and varify
    const cashoutPinInput = document.getElementById('cashout-pin')
    const pin = cashoutPinInput.value

    if(pin === "1928")
    {
        alert("Cashout Successful")
        balanceElement.innerText = newBalance
    } else {
        alert("Invalid PIN")
    }
})