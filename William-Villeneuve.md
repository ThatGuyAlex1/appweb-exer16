# Revue du code de Céleste Boudreault par William Villeneuve

## Commentaires sur l'ensemble du code

- Le code en général suit bien les normes Clean Code en ce qui concerne les noms significatifs et l'indentation du code.
- Les commentaires présents sont pertinents.
- Il n'y a pas de gestion des erreurs.

## App.vue

Une partie du code de App.vue aurait pu être encore plus **découpé** dans les composants appropriés. Exemple : [https://appweb.progwmj.ca/cours/cours-06](https://)

## songsList

A la ligne 49, une erreur est lancée par la fonction `defineEmits`.

Cette fonction est utilisée pour définir les événements personnalisés que le composant peut émettre. Il faut spécifier les types d'événements que le composant peut émettre.

Dans ce cas, vous avez défini un événement `getSong` qui prend un argument `newSong` de type `object`. Cependant, vous appelez `defineEmits` sans arguments, ce qui peut causer l'erreur.

Correction possible : To solve the problem, I would add type annotations to the `emit` function call.

```template
const emit: (event: 'getSong', newSong: object) => void = defineEmits()
```

## Autre : Éléments fonctionnels

- La liste de chansons **s'affiche**.
- Lorsqu'une chanson est sélectionnée, on peut voir son **titre**, son **compositeur** et sa **description**
- On peut faire **pause** et **reprendre** la lecture de la chanson.
- On peut **arrêter** la lecture de la chanson et la **redémarrer**.
