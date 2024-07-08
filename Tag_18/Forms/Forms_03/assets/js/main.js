function Rechner(){
    const alter = document.querySelector(".output");
    const age1 = Number(document.querySelector(".name1").value)
    const age2 = Number(document.querySelector(".name2").value)
    const jahr = age1 - age2

    alter.innerHTML = `${jahr}`
}   
