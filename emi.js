function calculateEMI() {
    let loanAmount = document.getElementById("loanAmount").value;
    let annualInterest = document.getElementById("interestRate").value / 100;
    let loanTenure = document.getElementById("loanTenure").value;

    // Convert to monthly values
    let monthlyInterest = annualInterest / 12;
    let months = loanTenure * 12;

    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    let emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / (Math.pow(1 + monthlyInterest, months) - 1);

    document.getElementById("emiResult").innerText = emi.toFixed(2);
}
