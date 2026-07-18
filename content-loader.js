// Carica i contenuti dai file JSON e li inserisce nella pagina.
// Se un file non si carica, la pagina resta con i contenuti già presenti (fallback sicuro).
(function () {

  // --- TESTI ---
  fetch('content/site.json')
    .then(function (r) {
      if (!r.ok) throw new Error('content non disponibile');
      return r.json();
    })
    .then(function (data) {
      document.querySelectorAll('[data-content]').forEach(function (el) {
        var key = el.getAttribute('data-content');
        if (data[key] !== undefined && data[key] !== '') {
          el.textContent = data[key];
        }
      });
    })
    .catch(function () {
      // Silenzioso: restano i testi statici della pagina
    });

  // --- FOTO ---
  fetch('content/foto.json')
    .then(function (r) {
      if (!r.ok) throw new Error('foto non disponibile');
      return r.json();
    })
    .then(function (data) {
      if (data.immagine) {
        document.querySelectorAll('[data-content-img]').forEach(function (el) {
          el.setAttribute('src', data.immagine);
        });
      }
    })
    .catch(function () {
      // Silenzioso: resta la foto statica della pagina
    });

})();
