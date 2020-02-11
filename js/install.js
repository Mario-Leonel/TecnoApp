
window.addEventListener("beforeinstallprompt", function(event) {
  //not show the default browser install app prompt
  event.preventDefault();

  // add the banner here or make it visible
  // …

  // save the event to use it later
  // (it has the important prompt method and userChoice property)
  window.promptEvent = event;
});
document.addEventListener("click", function(event) {
  if (event.target.matches(".install-button-class-name")) {
    addToHomeScreen();
  }
});
function addToHomeScreen() {
  // show the install app prompt
  window.promptEvent.prompt();

  // handle the Decline/Accept choice of the user
  window.promptEvent.userChoice.then(function(choiceResult) {
    // hide the prompt banner here
    // …

    if (choiceResult.outcome === "accepted") {
      console.info("mm User accepted the A2HS prompt");
    } else {
      console.info("mm User dismissed the A2HS prompt");
    }

    window.promptEvent = null;
  });
}
