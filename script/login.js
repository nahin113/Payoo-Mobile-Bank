const btn = document.querySelector("#login-btn");
const PhnNoInp = document.querySelector("#phn-no");
const PinNoInp = document.querySelector("#pin-no");

btn.addEventListener("click", () => {
  let PhnNo = PhnNoInp.value;
  let PinNo = PinNoInp.value;

  if (PhnNo === "01714333624" && PinNo === "1928") {
    alert("Login Successful");
    window.location.assign("/home.html");
  } else {
    alert("Incorrect Phone or Pin Number");
    return;
  }
});
