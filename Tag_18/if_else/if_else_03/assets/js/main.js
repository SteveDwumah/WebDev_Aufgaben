function adult() {
    event.preventDefault();
    const age = document.querySelector(".age").value;
  
    if (age >= 18) {
      document.querySelector(".result").innerHTML = "Ja, Du kannst Shisha rauchen";
    } else {
      document.querySelector(".result").innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
  }