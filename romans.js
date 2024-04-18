// Ensure the script runs after the full HTML document has been loaded, 
// removing the need for the init() function.
document.addEventListener('DOMContentLoaded', () => {
  // Updated element selectors to use getElementById for direct and efficient element access, 
  // aligning with the IDs added in the HTML refactoring.
  const modeSelector = document.getElementById('mode-selector');
  const conversionInput = document.getElementById('conversion-input');
  const convertButton = document.getElementById('convert-button');
  const convertOutput = document.getElementById('convert-output');

  //  Added functionality to clear both the input field and the output display 
  //  when the user switches between conversion modes, improving the user experience.
  modeSelector.addEventListener('change', () => {
      document.querySelector('h1').textContent = modeSelector.checked ? 'Integer To Roman' : 'Roman To Integer';
      conversionInput.value = ''; // Clear input field on mode change
      convertOutput.textContent = ''; // Clear output on mode change
  });

  convertButton.addEventListener('click', () => {
      modeSelector.checked ? convertIntegerToRoman() : convertRomanToInteger();
  });

  // Simplified the conversion logic by directly implementing the algorithms within convertRomanToInteger and convertIntegerToRoman, 
  // utilising helper functions for validation and conversion to make the code more readable and maintainable.

  function convertRomanToInteger() {
      const roman = conversionInput.value.trim().toUpperCase();
      if (!isValidRoman(roman)) {
          // Instead of mixing UI logic and validation, dedicated validation functions (isValidRoman) are used, 
          // and comprehensive error messages are displayed using alert.
          alert('Please enter a valid Roman numeral.');
          return;
      }
      const sum = romanToInt(roman);
      convertOutput.textContent = sum;
  }

  function convertIntegerToRoman() {
      const num = parseInt(conversionInput.value.trim(), 10);
      if (isNaN(num) || num < 1 || num > 3999) {
          alert('Please enter a valid integer between 1 and 3999.');
          return;
      }
      const roman = intToRoman(num);
      convertOutput.textContent = roman;
  }
  //  Introduced isValidRoman for validating Roman numerals, 
  //  encapsulating this logic to make the main conversion functions cleaner and more focused.
  function isValidRoman(roman) {
      return /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman);
  }

  function romanToInt(roman) {
      const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
      let sum = 0;
      for (let i = 0; i < roman.length; i++) {
          const val = values[roman[i]];
          const nextVal = values[roman[i + 1]] || 0;
          if (val < nextVal) {
              sum -= val;
          } else {
              sum += val;
          }
      }
      return sum;
  }

  function intToRoman(num) {
      const values = [
          [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
          [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
          [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
      ];
      let roman = '';
      for (let [value, letter] of values) {
          while (num >= value) {
              roman += letter;
              num -= value;
          }
      }
      return roman;
  }
});
