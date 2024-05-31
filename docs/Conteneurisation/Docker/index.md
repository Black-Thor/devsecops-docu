# Introduction 

## histoire

### Les applications monolithique

Les ingénieurs réorganisent la répartition de l’application sur la base de 3 couches: 
– Couche de présentation
– Couche logique
– Couche de Donnée

La décomposition par couche permet de séparer les responsabilités.
Le déploiement de l’application est centralisé et moins complexe.
Même si des efforts de mutualisation de code sont fait, les problèmes d’extensibilité, de maintenance et d’évolution sont toujours présents.

– L’application reste centralisée
– Chaque modification de code implique de tester toute l’application.
– Le processus de « build » est toujours long.
– Un bug dans un module peut rendre l’application non fonctionnelle.
Osman AIDEL 23

### Les micro services

