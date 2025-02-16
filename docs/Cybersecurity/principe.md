# Principes de Sécurité & Modèles de Sécurité Informatique

Les modèles de sécurité assurent **confidentialité** et **intégrité** par des règles strictes.

### 🔒 Modèle Bell-LaPadula (Confidentialité)
- **No Read Up** : Un sujet ne peut pas lire un objet à un niveau supérieur.
- **No Write Down** : Un sujet ne peut pas écrire à un niveau inférieur.
- **Discretionary Security** : Gestion des accès via une matrice.

**Résumé** : "Write Up, Read Down"  
**Limite** : Ne gère pas bien le partage de fichiers.

### 🛡️ Modèle Biba (Intégrité)
- **No Read Down** : Un sujet à haute intégrité ne lit pas un objet à basse intégrité.
- **No Write Up** : Un sujet à basse intégrité ne peut pas écrire vers un niveau supérieur.

**Résumé** : "Read Up, Write Down"  
**Limite** : Ne protège pas contre les menaces internes.

### 🔧 Modèle Clark-Wilson (Intégrité avancée)
- **CDI** : Données protégées.
- **UDI** : Données non protégées.
- **TP** : Opérations maintenant l’intégrité.
- **IVP** : Vérification d’intégrité.

**Utilisation** : Renforce les contrôles pour éviter les manipulations frauduleuses.

### 📌 Autres Modèles
- **Brewer-Nash** : Prévention des conflits d’intérêt.
- **Goguen-Meseguer** : Sécurité basée sur la séparation des données.
- **Sutherland** : Protection contre les interférences.
- **Graham-Denning & Harrison-Ruzzo-Ullman** : Gestion dynamique des accès.



## ISO/IEC 19249:2017 – Principes de Sécurité

L'ISO/IEC 19249 définit des **principes d’architecture et de conception** pour sécuriser les systèmes.

## 🏛️ Principes d’Architecture
### 1. Séparation des domaines
Les composants sont regroupés par sécurité (ex : niveaux CPU).

### 2. Couches (Layering)
Sécurisation multi-niveaux (ex : modèle OSI en réseau, abstraction en programmation).

### 3. Encapsulation
Protection des données via des interfaces dédiées (ex : API, POO).

### 4. Redondance
Assure la disponibilité et l'intégrité (ex : alimentation redondante, RAID 5).

### 5. Virtualisation
Isolation des environnements pour renforcer la sécurité (ex : sandboxing).



## 🔐 Principes de Conception
### 1. Moindre privilège
Attribution des droits strictement nécessaires.

### 2. Minimisation de la surface d’attaque
Réduction des risques en désactivant les services inutiles.

### 3. Validation centralisée des paramètres
Empêche les entrées malveillantes et les exploits.

### 4. Services de sécurité centralisés
Centralisation des authentifications et des contrôles.

### 5. Gestion des erreurs et exceptions
Un système doit échouer de manière sécurisée et ne pas divulguer d'informations sensibles.


## 🔐 Confiance et Sécurité

La **confiance** est essentielle mais doit être régulée par des principes de sécurité.

### 🔍 Trust but Verify
Même lorsqu'une entité semble fiable, ses actions doivent être **vérifiées** à l’aide de logs et de mécanismes automatisés (proxy, IDS/IPS).

### 🚫 Zero Trust
#### Principe
- **"Ne jamais faire confiance, toujours vérifier."**
- Pas de confiance implicite, même en interne.
- Accès conditionné à **authentification et autorisation**.

#### Implémentation : Microsegmentation
- Isolation des segments réseau.
- Chaque communication nécessite une **authentification et un contrôle d’accès strict**.

---

📌 *Un équilibre est nécessaire entre sécurité et fluidité des opérations !*

## 🔐 Vulnérabilité, Menace et Risque

### 🔍 Vulnérabilité
Une **faiblesse** dans un système, pouvant être exploitée (ex : verre fragile d’une vitrine).

### ⚠️ Menace
Le **danger potentiel** qui tire parti d'une vulnérabilité (ex : bris de vitre).

### 🎯 Risque
La **probabilité d’exploitation** et l'**impact** sur l’entreprise.

### 📌 Exemple
Un hôpital utilisant une base de données vulnérable doit évaluer le **risque** et agir rapidement si un exploit est disponible.


# Governance & Regulation


# 🔐 Gouvernance & Réglementation en Cybersécurité

## 🔑 Terminologies Importantes
- **Gouvernance** : Gestion et direction d’une organisation en conformité avec les normes.
- **Réglementation** : Lois imposant la sécurité des données.
- **Conformité** : Respect des obligations légales et normatives.

## 🔐 Gouvernance de la Sécurité
Elle garantit la confidentialité, l’intégrité et la disponibilité des données :
1. **Stratégie** : Alignement avec les objectifs d’entreprise.
2. **Politiques et procédures** : Régulation de l’utilisation et de la protection des données.
3. **Gestion des risques** : Identification et atténuation des menaces.
4. **Mesure des performances** : Suivi des indicateurs clés (KPIs).
5. **Conformité** : Respect des régulations applicables.

## 📜 Réglementation en Sécurité de l’Information
Les réglementations imposent des normes légales :
- **GDPR** (UE) : Protection des données personnelles.
- **HIPAA** (USA) : Sécurité des informations médicales.
- **PCI-DSS** : Sécurisation des paiements.
- **GLBA** : Protection des données financières.

## 🎯 Bénéfices Clés
✅ **Sécurité renforcée** : Réduction des violations de données.  
✅ **Confiance des parties prenantes** : Image sécurisée.  
✅ **Conformité réglementaire** : Éviter sanctions et pénalités.  
✅ **Avantage concurrentiel** : Engagement envers la cybersécurité.  


# 🔐 Cadre de Sécurité & GRC

## 📌 Éléments du Cadre de Sécurité
- **Politiques** : Objectifs et principes.
- **Normes** : Exigences pour sécuriser des processus.
- **Lignes directrices** : Bonnes pratiques.
- **Procédures** : Étapes à suivre.
- **Référentiels** : Standards de sécurité minimaux.

## 🔍 Développement des Documents de Gouvernance
1. **Définir le périmètre et l’objectif**  
2. **Rechercher les normes applicables**  
3. **Rédiger un document précis**  
4. **Validation et approbation**  
5. **Communication et formation**  
6. **Mise à jour régulière**  

## 🛡 Exemples Pratiques
### ✅ Politique de mots de passe
- Longueur minimale, complexité, stockage sécurisé.
- Changement régulier et suivi de la conformité.

### ✅ Procédure de réponse aux incidents
- Identification des types d’incidents.
- Rôles et responsabilités.
- Étapes de confinement, analyse, réponse et reporting.

## 🏛 GRC : Gouvernance, Risque et Conformité
### 🔹 Composants du GRC
1. **Gouvernance** : Alignement stratégique, surveillance des performances.
2. **Gestion des risques** : Identification et mitigation des menaces.
3. **Conformité** : Respect des lois et normes (GDPR, PCI-DSS, HIPAA).

### 🔹 Mise en Place du GRC
1. **Définir le périmètre et les objectifs** 🎯
2. **Évaluer les risques** 🔍
3. **Établir des politiques et procédures** 📜
4. **Mettre en place des contrôles** 🔐
5. **Suivi et amélioration continue** 🔄

## 🏦 Exemples : GRC dans la Finance
- **Gouvernance** : Politiques de secret bancaire, audits financiers.
- **Gestion des Risques** : Détection des fraudes (phishing, cartes ATM falsifiées).
- **Conformité** : Respect de PCI-DSS, GLBA, TLS.

# Governance and Risk Compliance (GRC) framework 

Governance Component: Involves guiding an organisation by setting its direction through information security strategy,  which includes policies, standards, baselines, frameworks, etc., along with establishing appropriate monitoring methods to measure its performance and assess the outcomes.
Risk Management Component: Involves identifying, assessing, and prioritising risks to the organisation and implementing controls and mitigation strategies to manage those risks effectively. This includes monitoring and reporting on risks and continuously evaluating and refining the risk management program to ensure its ongoing effectiveness.
Compliance Component: Ensuring that the organisation meets its legal, regulatory, and industry obligations and that its activities align with its policies and procedures. This includes developing and implementing compliance programs, conducting regular audits and assessments, and reporting on compliance issues to stakeholders.

# Gouvernance, Risques et Conformité (GRC) : Cadre et Développement

Comme nous l'avons étudié, la gouvernance de la sécurité de l'information et la conformité sont essentielles pour maintenir la posture de sécurité globale d'une organisation. Mais comment y parvenir ? C'est là qu'intervient le cadre de Gouvernance et Gestion des Risques et de la Conformité (GRC). Ce cadre se concentre sur la gestion intégrée de la gouvernance globale de l'organisation, de la gestion des risques d'entreprise et de la conformité. Il représente une approche globale de la sécurité de l'information, alignée sur les objectifs et les buts de l'organisation, tout en garantissant que l'organisation respecte les réglementations et les normes industrielles pertinentes.

## Composants du Cadre GRC

### 1. **Composant Gouvernance** :
Ce composant consiste à guider l'organisation en définissant sa direction à travers une stratégie de sécurité de l'information, comprenant des politiques, des normes, des bases de référence, des cadres, etc., tout en établissant des méthodes de suivi appropriées pour mesurer ses performances et évaluer les résultats.

### 2. **Composant Gestion des Risques** :
Ce composant consiste à identifier, évaluer et prioriser les risques pour l'organisation, puis à mettre en place des contrôles et des stratégies d'atténuation pour gérer ces risques de manière efficace. Il inclut la surveillance et la remontée des risques, ainsi qu'une évaluation continue et un ajustement du programme de gestion des risques pour en assurer l'efficacité à long terme.

### 3. **Composant Conformité** :
Ce composant vise à garantir que l'organisation respecte ses obligations légales, réglementaires et industrielles et que ses activités sont conformes à ses politiques et procédures. Cela inclut le développement et la mise en œuvre de programmes de conformité, la réalisation d'audits réguliers et l'évaluation des risques de conformité, ainsi que la communication des résultats aux parties prenantes.

## Comment Développer un Programme GRC - Lignes Directrices Génériques

Un programme GRC bien développé et mis en œuvre pour la cybersécurité fournit un cadre intégré pour la gestion des risques, la conformité aux régulations et aux normes, et l'amélioration de la sécurité globale de l'organisation. Il permet des activités efficaces de gouvernance, de gestion des risques et de conformité, en atténuant l'impact des incidents de cybersécurité et en assurant la résilience de l'entreprise.

### 1. **Définir la portée et les objectifs** :
Cette étape consiste à définir la portée du programme GRC et ses objectifs. Par exemple, une entreprise peut mettre en œuvre un programme GRC pour son système de gestion des données clients, avec pour objectif de réduire les risques cyber à 50% dans les 12 prochains mois tout en maintenant la confiance de ses clients.

### 2. **Réaliser une évaluation des risques** :
Dans cette étape, l'organisation identifie et évalue ses risques cyber. Par exemple, une évaluation des risques pourrait révéler que le système de gestion des données clients est vulnérable à des attaques externes en raison de contrôles d'accès faibles ou de logiciels obsolètes. L'organisation pourra alors prioriser ces risques et développer une stratégie de gestion des risques.

### 3. **Développer des politiques et procédures** :
Des politiques et des procédures sont mises en place pour guider les pratiques de cybersécurité au sein de l'organisation. Par exemple, l'entreprise pourrait établir une politique de mots de passe pour garantir l'utilisation de mots de passe forts. Elle pourrait également mettre en place des procédures de surveillance et d'enregistrement des accès aux systèmes afin de détecter toute activité suspecte.

### 4. **Établir des processus de gouvernance** :
Les processus de gouvernance permettent de gérer et de contrôler efficacement le programme GRC. Par exemple, l'organisation pourrait mettre en place un comité de pilotage de la sécurité qui se réunit régulièrement pour examiner les risques de sécurité et prendre des décisions concernant les investissements et les priorités en matière de sécurité. Les rôles et responsabilités doivent être définis pour que chacun comprenne son rôle dans le programme.

### 5. **Mettre en place des contrôles** :
Des contrôles techniques et non techniques sont mis en place pour atténuer les risques identifiés lors de l'évaluation des risques. Par exemple, l'entreprise pourrait déployer des pare-feu, un système de prévention des intrusions (IPS), un système de détection des intrusions (IDS), et un système de gestion des informations et des événements de sécurité (SIEM) pour prévenir les attaques externes. Elle pourrait également organiser des formations pour améliorer la sensibilisation à la sécurité et réduire les risques d'erreurs humaines.

### 6. **Surveiller et mesurer les performances** :
Des processus sont mis en place pour surveiller et mesurer l'efficacité du programme GRC. Par exemple, l'organisation pourrait suivre des indicateurs et mesurer la conformité aux politiques de sécurité. Ces informations sont utilisées pour identifier les domaines à améliorer et ajuster le programme en conséquence.

### 7. **Améliorer en continu** :
Le programme GRC est constamment révisé et amélioré en fonction des indicateurs de performance, des changements dans les profils de risques et des retours des parties prenantes. Par exemple, si l'organisation rencontre un incident de sécurité, elle peut effectuer une analyse post-incident pour en identifier les causes profondes et apporter des changements pour éviter qu'un incident similaire ne se reproduise.

## Exemple - Cadre GRC dans le Secteur Financier

Pour bien comprendre chaque composant du cadre GRC, il est nécessaire de l'illustrer avec des exemples et des scénarios réels. Dans cette section, nous verrons comment l'industrie financière met en œuvre chaque composant du cadre GRC.

### Activités Liées à la Gouvernance :
Nommer les cadres dirigeants de la gouvernance, définir des politiques financières telles que la loi sur le secret bancaire, la politique de lutte contre le blanchiment d'argent, les politiques d'audit financier, la gestion de crise, etc.

### Activités de Gestion des Risques :
Identifier les risques potentiels, leurs conséquences possibles et les mesures de contre-mesure, tels que les risques de fraude financière, les transactions frauduleuses via cyber-attaque, le vol d'identifiants par phishing, les cartes ATM falsifiées, etc.

### Activités de Conformité :
Prendre des mesures pour respecter les exigences légales et les normes industrielles telles que le PCI DSS, le GLBA, etc. Cela inclut également la mise en œuvre de méthodes comme SSL/TLS pour éviter les attaques de type Man-in-the-Middle (MITM), la gestion automatique des patchs pour éviter l'utilisation de logiciels non mis à jour, la création de campagnes de sensibilisation pour protéger les utilisateurs contre les attaques de phishing, et bien d'autres.


## Cyber Kill Chain
 https://tryhackme.com/room/cyberkillchainzmt