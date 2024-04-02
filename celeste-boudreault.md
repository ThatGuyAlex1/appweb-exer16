# Revue du code d'Alexandre St-Amant par Céleste Boudreault

## Commentaires sur l'ensemble du code

- Bonne gestion d'erreur, peut être un peu difficile à comprendre
- Le code pourrait bénéficier de commentaires pour mieux expliquer certaines fonctions (c'est peut être juste moi).
- Réalisation complète des fonctionalitées du TP, très bien !

## App.vue

App.vue semble gérer plus de chose qu'il devrait, peut être que certaines fonctionalitées devraient être faite par les composants ? Le SongService devrait peut être plutôt être crée dans le SongList pour gérer l'appel à l'API.

## SongPlayer.vue

Commentaires similaire à App.vue, j'ai l'impression que le composant gère trop de choses, mais il y a des bonnes chances que c'est parce que mon TP est incomplet. Outre ça, le code semble être fonctionel.

## SongList.vue

Impossible de sélectioner des chansons en cliquant sur les titres, ce qui force à utiliser le Next, Previous & Random seulement.
