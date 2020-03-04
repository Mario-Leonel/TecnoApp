// CODELAB: Add event listener for beforeinstallprompt event
/*window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);
// CODELAB: Add code to save event & show the install button.
deferredInstallPrompt = evt;
installButton.removeAttribute("hidden");
// CODELAB: Add code show install prompt & hide the install button.
deferredInstallPrompt.prompt();
// Hide the install button, it can't be called twice.
evt.srcElement.setAttribute("hidden", true);
// CODELAB: Log user response to prompt.
deferredInstallPrompt.userChoice.then(choice => {
  if (choice.outcome === "accepted") {
    console.log("User accepted the A2HS prompt", choice);
  } else {
    console.log("User dismissed the A2HS prompt", choice);
  }
  deferredInstallPrompt = null;
});
// CODELAB: Add event listener for appinstalled event
window.addEventListener("appinstalled", logAppInstalled);
// CODELAB: Add code to log the event
console.log("Weather App was installed.", evt);

let deferredPrompt;

    window.addEventListener('beforeinstallprompt', function(event) {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    });

    // Installation must be done by a user gesture! Here, the button click
    btnAdd.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      btnAdd.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });*/

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
