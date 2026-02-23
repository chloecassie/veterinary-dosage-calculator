const calculateButton = document.getElementById("calculateButton")
const resultDiv = document.getElementById("result")
const finalVolume = document.getElementById("finalVolume")

calculateButton.addEventListener("click", function() {
  const weight = parseFloat(document.getElementById("weight").value);
  const dose = parseFloat(document.getElementById("dose").value);
  const concentration = parseFloat(document.getElementById("concentration").value);

  if (isNaN(weight) || isNaN(dose) || isNaN(concentration)) {
    alert("Please enter a valid number into all fields");
    return;
  }

  const finalAmount = (weight * dose) / concentration;

  finalVolume.textContent = finalAmount.toFixed(2);
  
  resultDiv.style.display = "block";
});