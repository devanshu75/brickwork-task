$(function () {
  // Close the mobile navigation after a section link is selected.
  $(
    ".navbar-nav .nav-link:not(.dropdown-toggle), .dropdown-menu .dropdown-item",
  ).on("click", function () {
    const nav = document.getElementById("mainNav");
    if (nav && nav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });

  // Lightweight front-end validation and confirmation for the contact form.
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    const form = this;
    const feedback = $("#formFeedback");
    if (!form.checkValidity()) {
      form.reportValidity();
      feedback.text("Please complete all fields with a valid email address.");
      return;
    }
    feedback.text("Thank you! Your message has been received.");
    form.reset();
  });

  $("#year").text(new Date().getFullYear());
});

