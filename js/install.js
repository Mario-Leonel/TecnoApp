// CODELAB: Add event listener for beforeinstallprompt event
let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Actualizar UI notifica al usuario que puede agregar a la pantalla de inicio
  showInstallPromotion();
});
btnAdd.addEventListener("click", e => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = "none";
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });
});

// CODELAB: Add event listener for appinstalled event
window.addEventListener("appinstalled", logAppInstalled);
// CODELAB: Add code to log the event
console.log("Weather App was installed.", evt);

