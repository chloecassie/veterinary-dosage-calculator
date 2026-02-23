# veterinary-dosage-calculator
A JavaScript dosage calculator for veterinary professionals to use.

**Problem statement:** In veterinary practice, dosage calculations must be performed under significant time pressure. Inaccuracy can lead to medical errors.
**Solution:** I built a dosage calculator in JavaScript to automate the formula (weight * dose) / concentration = volume to be administered.

**Tech stack:** HTML, CSS, JavaScript.

This project allowed me to build on my HTML/CSS foundations and use JavaScript to create a functional, responsive tool to automate a common workflow in clinical practice.

What I've learnt:

- **Data Types:** I used parseFloat() to convert the input from string to number to ensure mathematical accuracy
- **Validation:** isNaN() allowed me to validate the inputs and avoid errors
- **UI:** finalAmount.toFixed(2) kept the final volume amount to two decimal places to make real-world application easier (in clinical practice, the smallest syringes only measure to two decimal places!), and clean CSS applicable in clinical environments
- **DOM Manipulation:** resultDiv.style.display toggled the appearance of the final volume at the bottom of the calculator once the calculation was complete


**Link to live site:** https://chloecassie.github.io/veterinary-dosage-calculator/
