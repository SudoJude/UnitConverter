// Tracks which input in each section was last edited, so the Convert
// button knows which direction to calculate.
var lastEdited = {
    temperature: "celsius",
    weight: "kilo",
    distance: "km"
};

function temperature(){
    if (lastEdited.temperature === "celsius") {
        //To convert celsius to farenheit
        //(CEL * 9/5) + 32
        var c = document.getElementById("celsius").value;
        document.getElementById("fahrenheit").value = (c * 9/5) + 32;
    } else {
        //To convert farenheit to celsius
        //(FAR - 32) * 5/9
        var f = document.getElementById("fahrenheit").value;
        document.getElementById("celsius").value = (f - 32) * 5/9;
    }
}
function weight(){
    if (lastEdited.weight === "kilo") {
        //To convert KGs to Pounds
        // KG * 2.2
        var kg = document.getElementById("kilo").value;
        document.getElementById("pounds").value = kg * 2.2;
    } else {
        //To convert Pounds to KGs
        // LB / 2.2
        var p = document.getElementById("pounds").value;
        document.getElementById("kilo").value = p / 2.2;
    }
}
function distance(){
    if (lastEdited.distance === "km") {
        //To convert KMs to Miles
        // KM * 0.62137
        var km = document.getElementById("km").value;
        document.getElementById("miles").value = km * 0.62137;
    } else {
        //To convert Miles to KMs
        // MI / 0.62137
        var m = document.getElementById("miles").value;
        document.getElementById("km").value = m / 0.62137;
    }
}
