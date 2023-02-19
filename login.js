const detailsForm = document.getElementById("details-form");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const username = document.getElementById("county").value;
  const password = document.getElementById("period").value;
  if (county === "admin" && period === "1234") {
    window.location.href = "dashboard.html";
  } else {
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = "Invalid county or period.";
    errorMessage.style.color = "red";
    loginForm.appendChild(errorMessage);
  }
});
