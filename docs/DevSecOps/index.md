---
title: DevSecOps
description: Sécurité intégrée à chaque étape du cycle de vie applicatif
---

# DevSecOps

!!! abstract "En une phrase"
    Le DevSecOps intègre la **sécurité** comme une pratique essentielle à **chaque étape**
    du cycle de développement, de l'écriture du code jusqu'à la production.

<div class="grid cards" markdown>

-   :material-shield-lock:{ .lg .middle } **Culture & Introduction**

    ---

    Objectifs, cycle de vie applicatif, automatisation et parallélisation des cycles.

    [:octicons-arrow-right-24: Lire](Culture/introduction.md)

-   :material-cog-play:{ .lg .middle } **En pratique**

    ---

    Mise en œuvre concrète du DevSecOps dans les équipes et les pipelines.

    [:octicons-arrow-right-24: Lire](Culture/pratique.md)

</div>

## Le cycle DevSecOps

```mermaid
graph LR
    A[📋 Plan] --> B[💻 Code]
    B --> C[🔨 Build]
    C --> D[🧪 Test]
    D --> E[🚀 Release]
    E --> F[🖥️ Operate]
    F --> G[📊 Monitor]
    G -->|Amélioration continue| A

    style B fill:#1565c0,color:#fff
    style C fill:#1565c0,color:#fff
    style D fill:#1565c0,color:#fff
```

| Phase | Outil type | Objectif sécurité |
|-------|-----------|-------------------|
| Code | Extensions IDE (SonarLint) | Détection en temps réel |
| Build | SAST (SonarQube) | Analyse statique du code source |
| Test | DAST (OWASP ZAP) | Test de l'application en cours d'exécution |
| Release | SCA (Trivy, Snyk) | Audit des dépendances & images |
| Operate | SIEM, WAF | Surveillance et réponse à incident |
