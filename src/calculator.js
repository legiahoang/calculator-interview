exports = module.exports = createCalculator;

function createCalculator(firstValue, secondValue) {
  this.firstValue = firstValue;
  this.secondValue = secondValue;
  this.add = (firstValue, secondValue) => {
    return firstValue + secondValue;
  };
  this.subtract = (firstValue, secondValue) => {
    return firstValue - secondValue;
  };
  this.multiply = (firstValue, secondValue) => {
    return firstValue * secondValue;
  };
  this.divide = (firstValue, secondValue) => {
    return firstValue / secondValue;
  };
}
