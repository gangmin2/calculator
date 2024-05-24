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

const onClickNumberButton = (value) => () => {
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
    if (!operand1) {
        alert('숫자를 먼저 입력하세요.');
        return;
    }
    if (operand1 && operand2) {
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
        operand1 = String(operand1);
        operand2 = '';
    }
    operator = op;
}

$numButtons.forEach(button => {
    button.addEventListener('click', onClickNumberButton(button.textContent))
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
    operand1 = String(operand1);
    operand2 = '';
    operator = ''
})

$clear.addEventListener('click', () => {
    operand1 = '';
    operand2 = '';
    operator = '';
    $result.value = 0;
})

$plusmn.addEventListener('click', () => {
    if (!operator) {
        if (operand1 === '') {
            operand1 = '-'
        } else {
            operand1 *= -1;
        }
        $result.value = operand1;
    } else {
        if (operand2 === '') {
            operand2 = '-'
        } else {
            operand2 *= -1;
        }
        $result.value = operand2;
    }
})

$percent.addEventListener('click', () => {
    if (!operator) {
        if (operand1 === '') return;

        operand1 = String(operand1 / 100);
        $result.value = operand1;
    } else {
        if (operand2 === '') return;

        operand2 = String(operand2 / 100);
        $result.value = operand2;
    }
})