function checkAirQuality() {
    const airQuality = document.querySelector(".airQuality").value;
    document.querySelector(".airQualityLevel").innerHTML = airQuality;

    if (airQuality >= 0 && airQuality <= 50) {
        document.querySelector(".result").innerHTML =
            "Level of health concern:  Good Level of health effect: Little or no risk";
        document.querySelector("body").style.backgroundColor = "green";
    } else if (airQuality > 50 && airQuality <= 100) {
        document.querySelector(".result").innerHTML =
            "Level of health concern:  Moderate Level of health effect: Acceptable quality";
        document.querySelector("body").style.backgroundColor = "yellow";
    } else if (airQuality > 100) {
        document.querySelector(".result").innerHTML =
            "Level of health concern:  Unhealthy for sensitive groups Level of health effect: Generable publics ";
        document.querySelector("body").style.backgroundColor = "orange";
    }
}