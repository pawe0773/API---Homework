let chosenCity;
document
  .querySelector("#cityButton")
  .addEventListener("click", function loadCity() {
    chosenCity = document.getElementById("city__input").value;
    localStorage.setItem("chosenCity", chosenCity);
    window.location.href = "weather.html";
  });
