document.getElementById("formBail").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    alert("Bail enregistré (simulation). Envoi au backend PHP à connecter.");
});
