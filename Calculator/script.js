document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    let currentInput = "0";
    let operator = null;
    let previousInput = null;

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.getAttribute("value");

            if (!isNaN(value) || value === ".") {
                if (currentInput === "0" && value !== ".") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            } else if (value === "C") {
                currentInput = "0";
                operator = null;
                previousInput = null;
            } else if (value === "=") {
                if (previousInput && operator) {
                    switch (operator) {
                        case "+":
                            currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                            break;
                        case "-":
                            currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                            break;
                        case "*":
                            currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                            break;
                        case "/":
                            if (currentInput === "0") {
                                currentInput = "Error";
                            } else {
                                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                            }
                            break;
                    }
                }
            } else {
                if (previousInput && operator) {
                    switch (operator) {
                        case "+":
                            currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                            break;
                        case "-":
                            currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                            break;
                        case "*":
                            currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                            break;
                        case "/":
                            if (currentInput === "0") {
                                currentInput = "Error";
                            } else {
                                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                            }
                            break;
                    }
                }
                previousInput = currentInput;
                operator = value;
                currentInput = "0";
            }

            result.value = currentInput;
        });
    });
});
