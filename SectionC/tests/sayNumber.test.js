const sayNumber = require('../saythenumber.js')



// Tests for the number 1
test('says the number 1 ', () => {
  expect(sayNumber(1)).toBe("One.");
});


// Tests for the number 11
test('says the number 11 ', () => {
  expect(sayNumber(11)).toBe("Eleven.");
});

// Test fourteen
test('says the number 14 ', () => {
  expect(sayNumber(14)).toBe("Fourteen.");
});


// Test Fifteen
test('says the number 15 ', () => {
  expect(sayNumber(15)).toBe("Fifteen.");
});

// Tests 1001
test('says the number 1001 ', () => {
  expect(sayNumber(1001)).toBe("One thousand and one.");
});


// Tests 20000
test('says the number 20000 ', () => {
  expect(sayNumber(20000)).toBe("Twenty thousand.");
});

// Test 1033286
test('says the number 1033286 ', () => {
  expect(sayNumber(1033286)).toBe("One million, thirty-three thousand, two hundred and eighty-six.");
});

// Test negative 1
test('says the number -1 ', () => {
  expect(sayNumber(-1)).toBe("One.");
});