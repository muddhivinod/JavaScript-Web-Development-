
const billInput = prompt("Enter your bill amount (e.g., 100):");
const tipInput = prompt("Enter tip percentage (e.g., 15):");

const billAmount = Number(billInput);
const tipPercentage = Number(tipInput);

if (billInput === null || tipInput === null ||
    billInput.trim() === "" || tipInput.trim() === "" ||
    !Number.isFinite(billAmount) || !Number.isFinite(tipPercentage) ||
    billAmount < 0 || tipPercentage < 0) {
  console.log("Invalid input. Please enter non-negative numbers.");
} else {
  const calculatedTip = billAmount * tipPercentage / 100;
  let totalAmount = billAmount;
  totalAmount += calculatedTip; // assignment operator

  console.log(`Subtotal: $${billAmount}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${calculatedTip}`);
  console.log(`Total Amount to Pay: $${totalAmount}`);
}
