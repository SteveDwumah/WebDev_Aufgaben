function doubleEins(){
    const ergebnis = document.querySelector (".output")
    const zahl = Number(document.querySelector(".nummer").value)
    console.log(zahl);
    const  end = 2 * zahl

    ergebnis.innerHTML = `${end}`
}