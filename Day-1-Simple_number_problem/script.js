const output = document.getElementById('output')
function renderOutput(data) {
    const div = document.createElement('div');
    div.innerText = data;
    output.appendChild(div);
}



const n = 10
for (let i = 0; i < n; i++){
    renderOutput(n-i)
} 
