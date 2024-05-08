const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const isOperator = btn.classList.contains('operator');

        const currentDisplayValue = display.value;
        const lastCharIsOperator = /[+\-*/]/.test(currentDisplayValue[currentDisplayValue.length - 1]);

        if (btn.id === "=") {
            try {
                display.value = eval(currentDisplayValue);
            } catch (error) {
                console.error("Error al evaluar la expresión:", error);
                display.value = "Error";
            }
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = currentDisplayValue.slice(0, -1);
        } else if (isOperator && lastCharIsOperator) {
            display.value = currentDisplayValue.slice(0, -1) + btn.id;
        } else if (!isOperator ||!lastCharIsOperator) {
            display.value += btn.id;
        }
    });
});
