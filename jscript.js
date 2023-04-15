
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    if (inputValue == "") {
        alert("Enter a temperature")
        location.reload()
    }
    else if (type1.value == "celsius" && type2.value == "celsius") {
        let Celsius = Number.parseInt(inputValue) * 1
        result.innerHTML = Celsius.toFixed(2) + ` &deg;C`
    }
    else if (type1.value == "celsius" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    else if (type1.value == "celsius" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    else if (type1.value == "fahrenheit" && type2.value == "celsius") {
        let Celsius = Number.parseInt(inputValue) - 32 * (5 / 9)
        result.innerHTML = Celsius.toFixed(2) + ` &deg;C`
    }
    else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) * 1
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) - 32 * (5 / 9) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
    else if (type1.value == "kelvin" && type2.value == "celcius") {
        let Celsius = Number.parseInt(inputValue) - 273.15
        result.innerHTML = Celsius.toFixed(2) + ` &deg;C`
    }
    else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + " F"
    }
    else if (type1.value == "kelvin" && type2.value == "kelvin") {
        let Kelvin = Number.parseInt(inputValue) * 1
        result.innerHTML = Kelvin.toFixed(2) + " K"
    }
}