let display = document.getElementById("display");
let calculator = document.getElementById("calculator");
let buttons = document.querySelectorAll("button");
function TurnToLight() {
    calculator.style.backgroundColor = "#e0e1dd";
    display.style.backgroundColor = "#e0e1dd";
    display.style.color = "#0d1b2a";
    buttons.forEach((btn) => {
        btn.style.backgroundColor = "#e0e1dd";
        if (btn.id >= "0" && btn.id <= "9") {
            btn.style.color = "#0d1b2a";
        }
    });
}
function TurnToNight() {
    calculator.style.backgroundColor = "#0d1b2a";
    display.style.backgroundColor = "#0d1b2a";
    display.style.color = "#e0e1dd";
    buttons.forEach((btn) => {
        btn.style.backgroundColor = "#0d1b2a";
        if (btn.id >= "0" && btn.id <= "9") {
            btn.style.color = "#e0e1dd";
        }
    });
}
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        }
        else if (btn.id === "ac") {
            display.value = "";
        }
        else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        }
        else if (btn.id === "mode") {
            if (btn.className == "mode-0") {
                btn.innerHTML = "&#128161;";
                btn.className = "mode-1";
                TurnToLight();
            }
            else {
                btn.innerHTML = "&#x263e;";
                btn.className = "mode-0";
                TurnToNight();

            }
        }
        else if (btn.className === "operator") {
            let lastIndex = display.value.slice(-1);
            if (lastIndex === "+" ||
                lastIndex === "-" ||
                lastIndex === "*" ||
                lastIndex === "/" ||
                lastIndex === "."
            ) { }
            else {
                display.value += btn.id;
            }
        }
        else {
            if (display.value === "0" && (btn.id === "0" || btn.id === "00")) { }
            else if (display.value === "" && btn.id === "00") { }
            else {
                if (display.value === "0") { display.value = ""; }
                display.value += btn.id;
            }
        }
    });
});