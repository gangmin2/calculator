const $result = document.querySelector('#result');

const $clear = document.querySelector('#clear');
const $plusmn = document.querySelector('#plusmn');
const $percent = document.querySelector('#percent');

const $operatorButtons = Array.from(document.querySelectorAll('.calculator-operator-buttons'));
const $calculate = document.querySelector('#calculate');

const $numButtons = Array.from(document.querySelectorAll('.calculator-num-buttons'));

let operand1 = '';
let operand2 = '';
let operator = '';

const onClickButton = (value) => () => {
    $result.value = '';
    if (!operator) {
        operand1 += value;
        $result.value = operand1;
    } else {
        operand2 += value;
        $result.value = operand2;
    }
}

const onClickOperatorButton = (op) => () => {
    operator = op;
}

$numButtons.forEach(button => {
    button.addEventListener('click', onClickButton(button.textContent))
})

$operatorButtons.forEach(button => {
    if (button === $calculate) return;
    button.addEventListener('click', onClickOperatorButton(button.textContent))
})

$calculate.addEventListener('click', () => {
    if (!operator) {
        return;
    }
    if (!operand2) {
        alert('숫자를 먼저 입력하세요.');
        return;
    }
    switch (operator) {
        case '÷':
            operand1 /= operand2;
            break;
        case '×':
            operand1 *= operand2;
            break;
        case '−':
            operand1 -= operand2;
            break;
        case '+':
            operand1 = Number(operand1) + Number(operand2);
            break;
        default:
            alert('계산할 수 없습니다.');
    }
    $result.value = operand1;
    operand2 = '';
    operator = ''
})