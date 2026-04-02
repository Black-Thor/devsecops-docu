---
title: Accueil
description: Documentation personnelle DevSecOps — DevOps, Sécurité, Conteneurisation, CI/CD
hide:
  - navigation
  - toc
---

# Ma Documentation DevSecOps

<div class="hero-banner" markdown>
Base de connaissances personnelle sur **DevOps**, **DevSecOps**, la **conteneurisation** et les bonnes pratiques **CI/CD**.
Organisée pour retrouver rapidement l'essentiel — sans chercher dans dix onglets.
</div>

---

## Modules

<div class="grid cards" markdown>

-   :material-sync-circle:{ .lg .middle } **DevOps & CI/CD**

    ---

    Culture DevOps, piliers, déploiement continu et pipelines automatisés.

    [:octicons-arrow-right-24: Voir le module](devops/index.md)

-   :material-shield-lock:{ .lg .middle } **DevSecOps**

    ---

    Intégration de la sécurité dans chaque étape du cycle de vie applicatif.

    [:octicons-arrow-right-24: Voir le module](devsecops/index.md)

-   :material-docker:{ .lg .middle } **Conteneurisation**

    ---

    Docker, Kubernetes, architecture, bonnes pratiques et sécurité des containers.

    [:octicons-arrow-right-24: Voir le module](conteneurisation/index.md)

-   :material-shield-search:{ .lg .middle } **Cybersécurité**

    ---

    Normes, bonnes pratiques, CVE et principaux vecteurs d'attaque.

    [:octicons-arrow-right-24: Voir le module](cybersecurity/index.md)

-   :material-web:{ .lg .middle } **Réseaux & API**

    ---

    HTTP, DNS, REST API, aide-mémoire et exercices pratiques.

    [:octicons-arrow-right-24: Voir le module](api/index.md)

-   :material-pencil-box:{ .lg .middle } **Blog & Notes**

    ---

    Astuces, raccourcis clavier, notes techniques et articles personnels.

    [:octicons-arrow-right-24: Voir le blog](blog/index.md)

</div>

---

## Roadmap & TODO

!!! info "En cours de rédaction"
    Cette documentation est un work-in-progress. Voici les sujets prévus :

- [ ] **Réseaux** — Bases TCP/IP, modèle OSI, URL, DNS, codes d'erreur HTTP
- [ ] **Vecteurs d'attaque** — OWASP Top 10, injection, XSS, CSRF
- [ ] **Cybersécurité** — Normes ISO 27001, RGPD, bonnes pratiques
- [ ] **Pipeline sécurisé** — SAST, DAST, SCA avec exemples d'outils (Trivy, SonarQube, OWASP ZAP)
- [ ] **Docker** — Bonnes pratiques Dockerfile, multi-stage builds
- [ ] **Kubernetes** — Sécurité RBAC, Network Policies, Secrets

---

## Démarrage rapide

```bash
# Cloner le repo
git clone https://github.com/Black-Thor/devsecops-docu.git
cd devsecops-docu

# Installer les dépendances
pip install mkdocs-material \
            mkdocs-glightbox \
            mkdocs-minify-plugin

# Lancer en local
mkdocs serve
# → http://127.0.0.1:8000

# Builder le site statique
mkdocs build

# Déployer sur GitHub Pages
mkdocs gh-deploy
```
