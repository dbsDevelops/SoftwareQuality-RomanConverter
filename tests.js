test("Boundary Test Cases from Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: 'I', message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman(3999), {value: 'MMMCMXCIX', message: '', result: true}, "TC-2");
});

test("Normal Operation Test Cases from Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman(4), {value: 'IV', message: '', result: true}, "TC-3");
  assert.propEqual(convertIntegerToRoman(9), {value: 'IX', message: '', result: true}, "TC-4");
  assert.propEqual(convertIntegerToRoman(40), {value: 'XL', message: '', result: true}, "TC-5");
  assert.propEqual(convertIntegerToRoman(90), {value: 'XC', message: '', result: true}, "TC-6");
  assert.propEqual(convertIntegerToRoman(400), {value: 'CD', message: '', result: true}, "TC-7");
  assert.propEqual(convertIntegerToRoman(900), {value: 'CM', message: '', result: true}, "TC-8");
  assert.propEqual(convertIntegerToRoman(1944), {value: 'MCMXLIV', message: '', result: true}, "TC-9");
  assert.propEqual(convertIntegerToRoman(3), {value: 'III', message: '', result: true}, "TC-10");
  assert.propEqual(convertIntegerToRoman(30), {value: 'XXX', message: '', result: true}, "TC-11");
  assert.propEqual(convertIntegerToRoman(300), {value: 'CCC', message: '', result: true}, "TC-12");
  assert.propEqual(convertIntegerToRoman(3000), {value: 'MMM', message: '', result: true}, "TC-13");
});

test("Error Handling Test Cases from Integer to Roman", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-14");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-15");
  assert.propEqual(convertIntegerToRoman(-5), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-16");
  assert.propEqual(convertIntegerToRoman(3.14), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-17");
  assert.propEqual(convertIntegerToRoman("abc"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-18");
});

test("Boundary Test Cases from Roman to Integer", function(assert) {
  assert.propEqual(convertRomanToInteger('I'), {value: 1, message: '', result: true}, "TC-19");
  assert.propEqual(convertRomanToInteger('MMMCMXCIX'), {value: 3999, message: '', result: true}, "TC-20");
});

test("Normal Operation Test Cases from Roman to Integer", function(assert) {
  assert.propEqual(convertRomanToInteger('IV'), {value: 4, message: '', result: true}, "TC-21");
  assert.propEqual(convertRomanToInteger('IX'), {value: 9, message: '', result: true}, "TC-22");
  assert.propEqual(convertRomanToInteger('XL'), {value: 40, message: '', result: true}, "TC-23");
  assert.propEqual(convertRomanToInteger('XC'), {value: 90, message: '', result: true}, "TC-24");
  assert.propEqual(convertRomanToInteger('CD'), {value: 400, message: '', result: true}, "TC-25");
  assert.propEqual(convertRomanToInteger('CM'), {value: 900, message: '', result: true}, "TC-26");
  assert.propEqual(convertRomanToInteger('MCMXLIV'), {value: 1944, message: '', result: true}, "TC-27");
  assert.propEqual(convertRomanToInteger('III'), {value: 3, message: '', result: true}, "TC-28");
  assert.propEqual(convertRomanToInteger('XXX'), {value: 30, message: '', result: true}, "TC-29");
  assert.propEqual(convertRomanToInteger('CCC'), {value: 300, message: '', result: true}, "TC-30");
  assert.propEqual(convertRomanToInteger('MMM'), {value: 3000, message: '', result: true}, "TC-31");
});

test("Error Handling Test Cases from Roman to Integer", function(assert) {
  assert.propEqual(convertRomanToInteger('IIII'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-32");
  assert.propEqual(convertRomanToInteger('XXXX'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-33");
  assert.propEqual(convertRomanToInteger('LL'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-34");
  assert.propEqual(convertRomanToInteger('CCCC'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-35");
  assert.propEqual(convertRomanToInteger('DD'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-36");
  assert.propEqual(convertRomanToInteger('MMMM'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-37");
  assert.propEqual(convertRomanToInteger('IL'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-38");
  assert.propEqual(convertRomanToInteger('IC'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-39");
  assert.propEqual(convertRomanToInteger('ID'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-40");
  assert.propEqual(convertRomanToInteger('IM'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-41");
  assert.propEqual(convertRomanToInteger('XD'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-42");
  assert.propEqual(convertRomanToInteger('XM'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-43");
  assert.propEqual(convertRomanToInteger('LC'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-44");
  assert.propEqual(convertRomanToInteger('LD'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-45");
  assert.propEqual(convertRomanToInteger('LM'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-46");
  assert.propEqual(convertRomanToInteger('DM'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-47");
  assert.propEqual(convertRomanToInteger('smooth operator'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-48");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-49");
  assert.propEqual(convertRomanToInteger("33"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-50");
});
