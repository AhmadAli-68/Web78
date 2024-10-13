function checkGoods() {
    const goods = document.getElementById("goodsInput").value;

    if (goods === 'watch is "good"' || goods === 'Watch') {
        // alert("Watch is Available!");
        document.getElementById("result").innerHTML = "Watch is Available!"
    }
    else if (goods === 'ring' || goods === 'Ring') {
        // alert("Ring is Available!");
        document.getElementById("result").innerHTML = "Ring is Available!"
    }
    else if (goods === 'bottle' || goods === 'Bottle') {
        // alert("Bottle is Available!");
        document.getElementById("result").innerHTML = "Bottle is Available!"
    }
    else {
        document.getElementById("result").innerHTML = "The Product you entered is not available."
    }
}