function weather(){
    const quality = document.querySelector(".wetter").value;
    console.log(quality);

    let text = "";

    if (quality >= 8 && quality <=10){
        text = "Super"
    }
    else if (quality >= 6 && quality <=7){
        text = "Gut"
    }
    else if (quality >= 3 && quality <=5){
        text = "Okay"
    }
    else if (quality >= 0 && quality <= 2){
        text = "Schlecht"
    }

    document.querySelector(".ergebnis").innerHTML = `Die Wetter-Qualität ist ${text}`
}