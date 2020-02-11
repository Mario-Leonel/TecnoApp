// CODELAB: Add event listener for beforeinstallprompt event
let deferredPrompt;
let logAppInstalled;

window.addEventListener("beforeinstallprompt", e => {
  // Stash the event so it can be triggered later.
  e.preventDefault();
  deferredPrompt = e;
  btnAdd.style.display = 'block';
  // Actualizar UI notifica al usuario que puede agregar a la pantalla de inicio
  
});
btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  //btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } 
      deferredPrompt = null;
    });
});

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});

