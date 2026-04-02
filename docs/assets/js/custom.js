/* ============================================================
   Custom JS — Ma Documentation DevSecOps
   ============================================================ */

document$.subscribe(function () {

  /* ── Mermaid diagrams ────────────────────────────────────── */
  // Mermaid est géré nativement par mkdocs-material avec pymdownx.superfences

  /* ── Raccourci clavier Ctrl+K → focus search ─────────────── */
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const searchInput = document.querySelector(".md-search__input");
      if (searchInput) {
        searchInput.focus();
      }
    }
  });

  /* ── Copier au clic sur les blocs de code (fallback) ─────── */
  // Note : content.code.copy dans mkdocs.yml gère déjà ça nativement

})
