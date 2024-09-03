const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  x: (a, b) => a * b,
  '/': (a, b) => a / b,
};

/**
 * A simple calculator class to perform basic arithmetic operations.
 */
class Calculator {
  /**
   * Initializes the calculator with default values.
   */
  constructor() {/**
    * An array containing the first and second values for the calculation.
    * @type {string[]}
    */
    this.values = ['', ''];
    /**
     * The index of the current value being updated (0 for first value, 1 for second value).
     * @type {number}
     */
    this.currentValueIndex = 0;
    /**
     * The current operation being performed (e.g., '+', '-', '*', '/').
     * @type {string|null}
     */
    this.currentOperation = null;
  }

  /**
   * Sets the first value for the expression.
   * @param {string} value - The first value to set.
   */
  set firstValue(value) {
    this.values[0] = value;
  }

  /**
   * Sets the second value for the expression.
   * @param {string} value - The second value to set.
   */
  set secondValue(value) {
    this.values[1] = value;
  }

  /**
   * Gets the first value for the expression.
   * @returns {string} The first value.
   */
  get firstValue() {
    return this.values[0];
  }

  /**
   * Gets the second value for the expression.
   * @returns {string} The second value.
   */
  get secondValue() {
    return this.values[1];
  }

  /**
   * Gets the current value based on the current value index.
   * @returns {string} The current value.
   */
  get currentValue() {
    return this.values[this.currentValueIndex];
  }

  /**
   * Sets the current value based on the current value index.
   * @param {string} value - The value to set as the current value.
   */
  set currentValue(value) {
    this.values[this.currentValueIndex] = value;
  }

  /**
   * Updates the current value by appending a new value.
   * Prevents adding multiple decimal points.
   * @param {string} value - The value to append to the current value.
   */
  updateCurrentValue(value) {
    const currentValue = this.values[this.currentValueIndex];

    if (value === '.' && currentValue.includes('.')) return;
    if (value === '.' && this.currentOperation && !this.secondValue) return

    this.values[this.currentValueIndex] = currentValue + value;
  }

  /**
   * Formats the mathematical expression for display.
   * @returns {string} The formatted mathematical expression.
   */
  formatMathExpression() {
    let result = this.values[0];

    if (this.currentOperation) {
      result = `${result} ${this.currentOperation}`;
    }

    if (this.values[1]) {
      result = `${result} ${this.values[1]}`;
    }

    return result;
  }

  /**
   * Calculates the result of the current mathematical expression.
   * @returns {string} The result of the calculation.
   */
  calculateResult() {
    const [a, op, b] = this.formatMathExpression().split(' ');
    return operations[op](parseFloat(a), parseFloat(b)).toString();
  }

  /**
   * Resets the calculator's state for a new calculation.
   */
  resetState() {
    this.currentOperation = null;
    this.currentValueIndex = 0;
    this.values[1] = '';
  }
}