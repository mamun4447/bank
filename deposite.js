// inside bank

// Deposite
document.getElementById("deposite").addEventListener("click", function() {
    const depositAcmount = document.getElementById("depositeAmount");
    const dAmountString = depositAcmount.value;
    const dAmount = parseFloat(dAmountString)
    depositAcmount.value = '';
    if (isNaN(dAmount)) {
        alert("Enter valid number!!");
        return;
    }



    const totalDepositeElement = document.getElementById("deposite-total");
    const totalDeposite = totalDepositeElement.innerText;

    const depositeAdd = parseFloat(totalDeposite) + dAmount
    totalDepositeElement.innerText = depositeAdd;


    // Total Balance
    const totalBalanceElement = document.getElementById("balance-total");
    const totalBalanceString = totalBalanceElement.innerText;

    totalBalanceElement.innerText = parseFloat(totalBalanceString) + parseFloat(depositeAdd);





});

// Withdrow
document.getElementById("withdrow").addEventListener("click", function() {
    const withdrowAmount = document.getElementById("withdrowAmount");
    const wAmount = parseFloat(withdrowAmount.value);
    withdrowAmount.value = "";

    if (isNaN(wAmount)) {
        alert("Enter valid number!!");
        return;
    }

    const totalWithdrowElement = document.getElementById("withdrow-total");
    const totalWithdrow = parseFloat(totalWithdrowElement.innerText);
    const totalBalanceElement = document.getElementById("balance-total");
    const totalBalanceString = parseFloat(totalBalanceElement.innerText);


    if (wAmount > totalBalanceString) {
        alert("Baper Bank e ato taka nai!!!")
    } else {
        const withdrowAdd = totalWithdrow + wAmount;
        totalWithdrowElement.innerText = withdrowAdd;

        // Total Balance

        totalBalanceElement.innerText =
            parseFloat(totalBalanceString) - parseFloat(withdrowAdd);
    }


});