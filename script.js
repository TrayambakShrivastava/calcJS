function appendString(nextChar) {
    const x = document.getElementById("textOperand");
    const str = x.innerHTML;
    x.innerHTML = str + nextChar.toString();
}


function appendOperator(operator) {
    const x = document.getElementById("textOperand");
    const str = x.innerHTML;
    x.innerHTML = '' ;
    const y = document.getElementById("operand1");
    y.innerHTML = str ;
    const z = document.getElementById("operator");
    z.innerHTML = operator.toString() ;
}


function compute() {
    const x = document.getElementById("textOperand");
    const op2 = x.innerHTML;
    const y1 = document.getElementById("operand1");
    const op1 = y1.innerHTML;
    const y2 = document.getElementById("operand2");
    y2.innerHTML = op2;
    const a = document.getElementById("operator");
    const opr = a.innerHTML;

    const op1_num = parseFloat(op1);
    const op2_num = parseFloat(op2);

    let res;

    if (opr == '+') {
        res = op1_num + op2_num;
    } else if (opr == '-') {
        res = op1_num - op2_num;
    } else if (opr == '/') {
        res = op1_num / op2_num;
    } else if (opr == '*') {
        res = op1_num * op2_num;
    }

    x.innerHTML = res.toString();
}


function clearCalc() {
    const a = document.getElementById("textOperand");
    const b = document.getElementById("operand1");
    const c = document.getElementById("operand2");
    const d = document.getElementById("operator");

    a.innerHTML = "";
    b.innerHTML = "";
    c.innerHTML = "";
    d.innerHTML = "";
}

