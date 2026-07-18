// Carica i testi dal file dei contenuti e li inserisce nella pagina.
// Se il file non si carica, la pagina resta con i testi già presenti (fallback sicuro).
(function () {
  fetch('content/site.json')
    .then(function (r) {
      if (!r.ok) throw new Error('content non disponibile');
      return r.json();
    })
    .then(function (data) {
      // Per ogni elemento con data-content="chiave", sostituisci il testo
      document.querySelectorAll('[data-content]').forEach(function (el) {
        var key = el.getAttribute('data-content');
        if (data[key] !== undefined && data[key] !== '') {
          el.textContent = data[key];
        }
      });
    })
    .catch(function () {
      // Silenzioso: se fallisce, restano i testi statici della pagina
    });
})();
