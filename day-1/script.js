const output = document.getElementById('output')
function renderOutput(data) {
    const div = document.createElement('div');
    div.innerHTML = data;
    output.appendChild(div);
}



const n5 = 5;
for (let i = 1; i <= n5; i++){
    renderOutput(i * i)
}
