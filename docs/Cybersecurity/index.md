---
title: Cybersécurité
description: Fondamentaux de la cybersécurité, triade DIC, authentification et Kill Chain
---

# Cybersécurité

!!! abstract "Objectif de la cybersécurité"
    Protéger la **confidentialité**, l'**intégrité** et la **disponibilité** des données
    et systèmes d'information contre toute menace interne ou externe.

<div class="grid cards" markdown>

-   :material-shield-key:{ .lg .middle } **Fondamentaux**

    ---

    Triade DIC, authentification, autorisation, Zero Trust, Kill Chain.

    [:octicons-arrow-right-24: Lire](introduction.md)

</div>

## La triade DIC en résumé

```mermaid
graph TD
    DIC["🛡️ Triade DIC"] --> D["📡 Disponibilité\nL'info est accessible\nquand on en a besoin"]
    DIC --> I["✅ Intégrité\nL'info n'a pas été\nmodifiée sans autorisation"]
    DIC --> C["🔒 Confidentialité\nL'info est accessible\nuniquement aux personnes autorisées"]
    DIC --> T["📋 Traçabilité\nToute action est\nhorodatée et journalisée"]
    DIC --> N["✍️ Non-répudiation\nImpossible de nier\navoir effectué une action"]
```

## Concepts clés de ce module

| Concept | Description courte |
|---------|-------------------|
| **Triade DIC** | Les 3 critères fondamentaux de sécurité des données |
| **AuthN / AuthZ** | Authentification (qui es-tu ?) vs Autorisation (que peux-tu faire ?) |
| **MFA** | Authentification multi-facteurs — au moins 2 facteurs différents |
| **Zero Trust** | "Ne jamais faire confiance, toujours vérifier" |
| **CVE** | Common Vulnerabilities and Exposures — base de données des failles connues |
| **Kill Chain** | Modélisation des étapes d'une cyber-attaque |
| **RBAC** | Role-Based Access Control — droits basés sur les rôles |
