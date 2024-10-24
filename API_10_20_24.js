function get() {
    let x = document.getElementById("temp1").value;
    alert(x);

    // Make a request for a user with a given ID
    axios.get(`https://api.weatherapi.com/v1/current.json?key=94bab729fdf1423d95f125926241910&q=${x}&aqi=yes`)
        .then(function (response) {
            // handle success
            console.log(response);

            // let weather = 
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

// .then if promise is fulfilled
// .catch if promise is not fulfilled.