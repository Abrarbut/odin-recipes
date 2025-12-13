function convertToCelsius (tempF) {
    return (tempF - 32) * 5/9;
}
function convertToFahrenheit (tempC) {
    return (tempC * 9/5) + 32;
}
module.exports = { convertToCelsius, convertToFahrenheit };