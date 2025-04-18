# Intro et analyse

Le flag est passé par la "touillette" dont l'algo est celui de `touillette.py`
On va devoir inverser l'algo pour retrouver le flag initial

## Analyse de l'algo

- On commence par récupérer le flag (64 caractères) dans le fichier
- On effectue des slices sur le flag et on les accolle
- Le résultat est lui même sliced et collé avant d'être affiché

# Une solution "simple" (berk oui)
Pour éviter de trop réfléchir sur le fonctionnement des slices effectués, on va simplement regarder le comportement final de l'algo
- On passe une chaine connue qui a du sens comme par exemple `0123{456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ}`
- On regarde le résultat par la touillette : `Lvf0Mwg1Nxh2Oyi3Pzj{QAk4RBl5SCm6TDn7UEo8VFp9WGqaXHrbYIscZJtd}Kue`
- On écris un algorithme qui remet chaque caractère à sa place initiale
    - On va faire un algo qui en connaissant notre faux flag et son output, va nous donner les indices à modifier (`detouilleur.py`)
- On passe l'output dans la detouillette
- Et bingo le flag !

```
FCSC{WT444hmHuFRyb6OwKxP7Zg197xs27RWiqJxfQmuXDoJZmjMSwotHmqcdN8}
```