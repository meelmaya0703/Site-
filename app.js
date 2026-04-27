function comprar(){
  window.location.href = "https://SEU-LINK-DE-PAGAMENTO";
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById('instalar');

  if(btn){
    btn.style.display = 'block';

    btn.onclick = async () => {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      btn.style.display = 'none';
    }
  }
});
