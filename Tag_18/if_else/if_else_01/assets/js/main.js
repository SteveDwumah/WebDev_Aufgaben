function adult() {
    const age = document.querySelector(".age").value;
  
    if (age >= 18) {
      document.querySelector(".result").innerHTML = "Volljährig";
    } else {
      document.querySelector(".result").innerHTML = "Minderjährig";
    }
  }