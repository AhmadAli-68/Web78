function generateTable() {
    const num = document.getElementById("numberInput").value;
    const output = document.getElementById("tableOutput");
    output.innerHTML = '';

    let i = 1;

    do {
        const row = document.createElement("tr")
        const col1 = document.createElement("td")
        const col2 = document.createElement("td")
        const col3 = document.createElement("td")

        col1.textContent = `${num}`;
        col2.textContent = `x ${i}`;
        col3.textContent = `= ${num * i}`

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);

        output.appendChild(row);

        i++;
    } while (i <= 10);
}

