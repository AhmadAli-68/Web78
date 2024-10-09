function get() {
    let name = prompt("Enter your name:");
    let tm = document.getElementById("tm1").value
    let ob = document.getElementById("ob1").value

    let res = (ob / tm) * 100
    document.getElementById("Per").innerHTML = (`Dear ${name}, you've got ${res.toFixed(2)}%`);
    alert(`Dear ${name}, you've got ${res.toFixed(2)}%`);
    console.log(`Dear ${name}, you've got ${res.toFixed(2)}%`);



}