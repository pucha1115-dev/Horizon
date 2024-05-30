const senderName = document.querySelector("#sender-name");
const senderEmail = document.querySelector("#sender-email");
const message = document.querySelector("#message");
const sendButton = document.querySelector("#send-email");
const form = document.querySelector("form");
const showModalButton = document.querySelector("#modal");

// Regular expression for validating email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendEmail() {
  // Check if any of the required fields are empty
  if (
    senderName.value.trim() === "" ||
    senderEmail.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    showModal("Please fill in all fields correctly.");
    return;
  }
  // Check if sender's email is in a valid format
  if (!emailRegex.test(senderEmail.value)) {
    alert("Please fill in valid email address.");
    return;
  }
  // Proceed with sending email
  (function () {
    emailjs.init("xn5CHRWQ-9H_rNAnS"); // account public key
  })();

  var params = {
    to: "info@horizon-languages.com",
    senderName: senderName.value,
    senderEmail: senderEmail.value,
    subject: "Horizon Languages Inquiry",
    message: message.value,
  };

  var serviceID = "service_u609saj"; // email service ID
  var templateID = "template_k5fh1tf"; // template ID

  emailjs
    .send(serviceID, templateID, params)
    .then((data) => {
      alert("Email Sent Successfully!");
      form.reset(); // Reset the form fields
    })
    .catch((error) => {
      console.error("Email could not be sent:", error);
      alert("There was an error sending the email. Please try again later.");
    });
}

function showModal(message) {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  modal.style.display = "block";

  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendEmail();
});

showModalButton.addEventListener("click", (e) => {
  e.preventDefault;
  showModal("this is a modal");
});
