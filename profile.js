function editFunction() {
  document.getElementById("fname").disabled = false;
  document.getElementById("lname").disabled = false;
  document.getElementById("pnumber").disabled = false;
  document.getElementById("address").disabled = false;
  document.getElementById("email").disabled = false;
  document.getElementById("editProfile").hidden = true;
  document.getElementById("submitProfile").hidden = false;
}

function submitFunction() {
  document.getElementById("fname").disabled = true;
  document.getElementById("lname").disabled = true;
  document.getElementById("pnumber").disabled = true;
  document.getElementById("address").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("editProfile").hidden = false;
  document.getElementById("submitProfile").hidden = true;
}
