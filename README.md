# ts_formation

Adresse du dépôt: https://github.com/thetinyspark/formation_typescript_21_09_2026
Outil à installer : Git

Une fois git d'installé, vous pouvez parcourir la liste des commits avec la commande suivante: 

```bash
git log
```

Cette commande vous donne la liste des commits. 
Chaque commit, possède un identifiant unique composé 
de caractères alphanumériques.

Par exemple le premier commit de ce dépôt possède l'identifiant suivant

```bash
4cab1079be664ce4e47d256a7071d9b2e4f8a94f
```

Il vous suffira de taper la commande suivante pour restaurer votre projet
à l'état du commit.


```bash
# git checkout <id_du_commit>
# donc pour restaurer au premier commit on tape la commande
git checkout 4cab1079be664ce4e47d256a7071d9b2e4f8a94f
```

Cela va vous faire entrer dans une nouvelle branche temporaire "détachée". 
Vous pourrez visualiser le code tel qu'il était à ce moment là. 
Pour revenir à l'état final vous aurez juste à taper la commande 

```
git checkout master
```