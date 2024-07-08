

    function actionEins() {
        const alter = document.querySelector(".output")
        
        const age = Number(document.querySelector(".age").value)
        console.log(age);
        const jahr = 2024 - age
    
        alter.innerHTML = `Du bist ${jahr} Jahre alt.`
    }