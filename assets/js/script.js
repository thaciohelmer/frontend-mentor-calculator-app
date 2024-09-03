const numkeys = document.querySelectorAll('[data-value]');
const opKeys = document.querySelectorAll('[data-operation]');
const actionKeys = document.querySelectorAll('[data-action]');
const display = document.querySelector('.calc__display');

initializeTheme();

const calculator = new Calculator();

function setDisplayValue(value) {
    display.textContent = value || '0';
}

numkeys.forEach((nk) =>
    nk.addEventListener('click', () => {
        const keyValue = nk.dataset.value;

        if (calculator.currentOperation) {
            calculator.currentValueIndex = 1;
        }

        calculator.updateCurrentValue(keyValue);
        setDisplayValue(calculator.formatMathExpression());
    }),
);

opKeys.forEach((nk) =>
    nk.addEventListener('click', () => {
        const keyOperation = nk.dataset.operation;

        if (
            calculator.firstValue &&
            keyOperation !== '=' &&
            !calculator.secondValue
        ) {
            calculator.currentOperation = keyOperation;
            setDisplayValue(calculator.formatMathExpression());
        } else {
            const result = calculator.calculateResult();
            calculator.resetState();
            calculator.firstValue = result;

            if (keyOperation !== '=') {
                calculator.currentOperation = keyOperation;
            }

            setDisplayValue(calculator.formatMathExpression());
        }
    }),
);

actionKeys.forEach((nk) =>
    nk.addEventListener('click', () => {
        const keyAction = nk.dataset.action;

        if (keyAction === 'del' && !!calculator.currentValue) {
            const currentValue = calculator.currentValue;
            calculator.currentValue = currentValue.substring(
                0,
                currentValue.length - 1,
            );
            setDisplayValue(calculator.formatMathExpression());
        } else {
            calculator.resetState();
            calculator.currentValue = '';
            setDisplayValue('');
        }
    }),
);
