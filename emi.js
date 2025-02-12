<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMI Calculator</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .container {
            text-align: center;
            width: 100%;
            max-width: 500px;
        }

        .input-group {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }

        .input-group label {
            width: 200px;
            font-weight: bold;
            text-align: left;
        }

        .input-group input {
            width: 200px; /* Fixed width (around 3 inches) */
            padding: 5px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        .result {
            font-weight: bold;
            pointer-events: none;
            user-select: none;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>EMI Calculator</h2>

        <div class="input-group">
            <label>Loan Amount (₹):</label>
            <input type="text" id="loanAmount" oninput="formatInput(this)">
        </div>

        <div class="input-group">
            <label>Annual Interest Rate (%):</label>
            <input type="text" id="interestRate" oninput="formatInput(this)">
        </div>

        <div class="input-group">
            <label>Loan Tenure (Months):</label>
            <input type="text" id="loanTenure" oninput="formatInput(this)">
        </div>

        <button onclick="calculateEMI()">Calculate</button>
        
        <h3>EMI: ₹<span id="emiResult" class="result">0</span></h3>
    </div>

    <script>
        function formatInput(element) {
            let num = element.value.replace(/,/g, '').replace(/[^0-9.]/g, '');
            element.value = Number(num).toLocaleString("en-IN", { maximumFractionDigits: 2 });
        }

        function calculateEMI() {
            let P = parseFloat(document.getElementById("loanAmount").value.replace(/,/g, ''));
            let r = parseFloat(document.getElementById("interestRate").value.replace(/,/g, '')) / 100 / 12;
            let n = parseFloat(document.getElementById("loanTenure").value.replace(/,/g, ''));
            
            if (isNaN(P) || isNaN(r) || isNaN(n)) {
                document.getElementById("emiResult").innerText = "Invalid Input";
                return;
            }

            let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            document.getElementById("emiResult").innerText = Number(emi).toLocaleString("en-IN", { maximumFractionDigits: 2 });
        }
    </script>

</body>
</html>
