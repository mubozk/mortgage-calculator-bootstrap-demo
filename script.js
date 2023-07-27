function calculateMortgage() {
  const homeValue = parseFloat(document.getElementById("homeValue").value);
  const downPayment = parseFloat(document.getElementById("downPayment").value);
  const loanAmount = homeValue - downPayment;
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const loanTerm = parseInt(document.getElementById("tenureSelect").value);
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      Math.pow(1 + interestPerMonth, totalLoanMonths)) /
    (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = `
    <p>Loan Amount: $${loanAmount.toFixed(2)}</p>
    <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
    <p>Total Interest: $${totalInterestGenerated.toFixed(2)}</p>
  `;
}
