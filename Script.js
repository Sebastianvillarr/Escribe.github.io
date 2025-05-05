let history = [];

function sendMessage() {
    const inputField = document.getElementById('input');
    const message = inputField.value.trim();
    if (message) {
        history.push(message);
        inputField.value = '';
        updateHistory();
    }
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
    history.forEach((msg, index) => {
        historyDiv.innerHTML += `<p><span class="command">> ${msg}</span></p>`;
    });
}