## Le linting
Parce qu'un code sécurisé est avant tout un code propre, il est nécessaire que chaque développeur ait un outil ou une extension de type "lint" installé dans son éditeur de code (IDE - Integrated Development Environment).

Cet outil permettra notamment de détecter de nombreux problèmes de syntaxe basiques :

- Variables ou fonctions inexistantes
- Variables ou fonctions inutilisées
- Problèmes de syntaxe
- Doubles déclarations
- Non-conformité avec les "best practices" du langage (PEP8 ou PEP20 en Python, etc.)
- Problèmes récurrents connus pour poser problème au compilateur si ce langage est compilé

Il existe des outils de linting pour presque chaque langage dans tous les IDE. Certains IDE intègrent par défaut ces outils lorsqu'ils sont spécialisés sur un langage en particulier (IntelliJ pour Java avec ESLint par exemple).

![DevSecOps Cycle](../../assets/Images/Culture/Linting.png)

On retrouvera souvent un linter dans le pipeline en première étape afin de remonter les erreurs aux développeurs si certaines ont pu être oubliées.

Ceci permettra dans certains cas de bloquer l'avancée du pipeline si des erreurs de syntaxes affectant la sécurité sont trouvées.

## Le Static Application Security Testing
Cet outil, souvent nommé SAST, est en charge de trouver et faire remonter les vulnérabilités du code source.

Il peut dans certains cas faire remonter des failles de sécurité potentielles telles que :

- Non-validation des paramètres d'entrée (saisies des utilisateurs ou variables passées entre les fonctions)
- Permissions accordées trop larges
- Ouverture des accès au réseau trop larges
- Sensibilité aux attaques les plus communes (Injection SQL, XSS etc.)
- etc.

Chaque outil SAST est adapté à un ou plusieurs langages et permettra pour chaque langage un éventail de détections possible. Référez-vous à la documentation officielle de l'outil choisi pour avoir la liste complète des possibilités.

Ces failles de vulnérabilités sont - dans la plupart des outils - classées selon une criticité : Info, Low, Medium, High, Critical permettant aux équipes de se situer vis à vis de la sécurité du code source et des failles à corriger en priorité.

Il existe de nombreux outils SAST adaptés à chaque usage, très peu sur le marché couvrent tous les langages. Il sera donc nécessaire d'utiliser l'outil correspondant à l'usage, par exemple :

- Semgrep pour le code applicatif (Python, Go, Javascript, etc.)
- KICS (Keep Infrastructure Code Secure) pour le code infrastructure (Ansible, Dockerfile, Terraform, etc.)

Il s'utilise en général juste après une étape de lint et avant toute compilation ou déploiement. Il est supposé couper l'exécution du pipeline en cas de faille trouvée ayant une criticité supérieure ou égale au niveau choisi (par exemple arrêter l'exécution en cas de High ou en cas de Critical).

## Le Dynamic Application Security Testing
Le DAST est un outil permettant d'effectuer des tests de sécurité en "boîte opaque", donc sans connaissance du fonctionnement ou du code source.

Il s'exécute une fois l'application déployée dans un environnement proche de celui de production.

Il permet par exemple, en donnant l'URL de l'application Web ou bien l'IP et le port du service à tester, de tester les failles les plus communes auxquelles l'application est sensible, par exemple les 10 catégories d'attaques représentant le plus de risque de sécurité selon l'OWASP (OWASP : Open Web Application Security Project).

Les tests effectués par un outil DAST permettent ensuite d'avoir un rapport détaillé de toutes les failles détectées et classées selon leur criticité, en général : Info, Low, Medium, High, Critical


## L'Interactive Application Security Testing
Le IAST représente les outils capables de combiner les capacités d'un SAST et d'un DAST afin d'analyser d'un côté le code source et de l'autre, l'application, une fois déployée et de pouvoir établir des corrélations et des suggestions entre les deux.

## Les Pipelines
Les outils d'analyse doivent être exécutés de façon séquentielle et automatiquement lorsqu'une nouvelle version du code source est envoyée sur le dépôt git.

Cette pratique d'automatisation prend place au sein d'une chaîne d'intégration et de déploiement continus nommé couramment une chaîne CI/CD (Continuous Integration/Continuous Deployment).

Le pipeline CI/CD est un outil qui, à l'aide d'un fichier descriptif, va exécuter des étapes séquentielles dans un environnement temporaire de développement permettant par exemple de :

- Cloner le dépôt git
- Linter le code source
- Exécuter un outil de SAST sur le code source
- Compiler le code source en application
- Faire des tests unitaires et fonctionnels sur l'application compilée
- Déployer l'application dans un environnement similaire à la production
- Lancer l'exécution d'un outil de DAST sur le point d'entrée applicatif
- Générer un rapport de chacune des étapes précédentes dans un format lisible
- Stocker le rapport dans un dossier distant
- Mettre à disposition l'archive contenant l'application compilée en tant qu'artefact de le pipeline.

Plusieurs pipelines peuvent s'enchaîner et dans le cas ci-dessus, le suivant pourrait être en charge de déployer l'application dans un environnement de démo ou de QA (Quality Assurance - Contrôle qualité) afin de tester de façon manuelle et humaine l'application avant sa mise en production.

Il est également possible dans la plupart des outils de pipeline de mettre en "pause" des exécutions ou d'attendre une intervention humaine. Par exemple, une fois l'étape de contrôle qualité humaine réalisée, une pipeline finale pourrait attendre une approbation d'un chef de projet afin de lancer la mise en production automatique de l'application.

