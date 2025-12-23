const form = document.getElementById("calcForm");
const errorDiv = document.getElementById("error");
const resultDiv = document.getElementById("result");
const historyList = document.getElementById("historyList");

let history = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const op = document.getElementById("operation").value;

    errorDiv.textContent = "";
    resultDiv.textContent = "";

    if (a === "" || b === "") {
        errorDiv.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    const A = Number(a);
    const B = Number(b);
    let res;

    if (op === "/" && B === 0) {
        errorDiv.textContent = "Division par zéro interdite.";
        return;
    }

    switch (op) {
        case "+": res = A + B; break;
        case "-": res = A - B; break;
        case "*": res = A * B; break;
        case "/": res = A / B; break;
    }

    resultDiv.textContent = `Résultat : ${res}`;

    history.push(`${A} ${op} ${B} = ${res}`);
    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
