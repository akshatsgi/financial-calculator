function calculateSIP() {
    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("rate").value / 100 / 12;
    let years = document.getElementById("years").value;
    let months = years * 12;

    let finalAmount = amount * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    document.getElementById("result").innerText = finalAmount.toFixed(2);
}
