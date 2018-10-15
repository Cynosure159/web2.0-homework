formulas = "";
answer = 0;
messagestyle = 0;

function input_button(input) {
    formulas += input;
    document.getElementById("formulas").innerHTML = formulas;
    document.getElementById("formulas").scrollLeft = 999999999999;
    document.getElementById("answer").innerHTML = "";
}

function clear_all() {
    formulas = "";
    document.getElementById("formulas").innerHTML = formulas;
    answer = 0;
    document.getElementById("answer").innerHTML = "";
}

function delete1() {
    formulas = formulas.substr(0, formulas.length - 1);
    document.getElementById("formulas").innerHTML = formulas;
    document.getElementById("formulas").scrollLeft = 999999999999;
    document.getElementById("answer").innerHTML = "";
}

function calculate() {
    var source = formulas.replace(/×/g, "*");
    source = source.replace(/÷/g, "/");
    if (source.indexOf("//") >= 0) {
        alert("Your input is illegal.\n");
        return;
    }
    if (source.indexOf("**") >= 0) {
        alert("Your input is illegal.\n");
        return;
    }
    try {
        answer = eval(source);
        answer = answer.toFixed(10);
        // answer = Math.round(answer);
        document.getElementById("answer").innerHTML = parseFloat(answer);
        document.getElementById("answer").scrollLeft = 999999999999;
    } catch (exception) {
        alert("Your input is illegal.\n");
    }

}

function message() {
    if (messagestyle == 0) {
        document.getElementById("message").style.opacity = "1";
        messagestyle = 1;
    } else {
        document.getElementById("message").style.opacity = "0";
        messagestyle = 0;
    }

}

document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var k = e.keyCode;
    var shift = e.shiftKey;
    console.log(k);
    if (shift) {
        switch (k) {
            case 57:
                input_button('(');
                break;
            case 56:
                input_button('×');
                break;
            case 48:
                input_button(')');
                break;
            case 187:
            case 61:
                input_button('+');
                break;
            case 191:
                message();
                break;
        }
    } else {
        switch (k) {
            case 48:
            case 96:
                input_button('0');
                break;
            case 49:
            case 97:
                input_button('1');
                break;
            case 50:
            case 98:
                input_button('2');
                break;
            case 51:
            case 99:
                input_button('3');
                break;
            case 52:
            case 100:
                input_button('4');
                break;
            case 53:
            case 101:
                input_button('5');
                break;
            case 54:
            case 102:
                input_button('6');
                break;
            case 55:
            case 103:
                input_button('7');
                break;
            case 56:
            case 104:
                input_button('8');
                break;
            case 57:
            case 105:
                input_button('9');
                break;
            case 106:
                input_button('×');
                break;
            case 107:
                input_button('+');
                break;
            case 109:
            case 189:
            case 173:
                input_button('-');
                break;
            case 111:
            case 191:
                input_button('÷');
                break;
            case 110:
            case 190:
                input_button('.');
                break;
            case 187:
            case 13:
            case 61:
                calculate();
                break;
            case 8:
                delete1();
                break;
            case 67:
                clear_all();
                break;
        }
    }

}