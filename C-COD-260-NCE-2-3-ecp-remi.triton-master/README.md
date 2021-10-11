# EpitechAds


## Présentation du projet  

Lors de nos différents brainstorming, nous nous sommes rendus comptes que l'accès à l'information au sein de l'Epitech était assez dispersé. En effet, il faut aller sur plusieurs sites et / ou outils différents pour obtenir des informations, ce qui est n'est pas très pratique.

Notre objectif était d'essayer de centraliser la totalité des informations sur une seule et même plateforme : EpitechAds, sur laquelle vous pourrez retrouver bon nombres de petites annonces.

Au niveau des technologies, nous avons utilisé Laravel pour la partie Back, et Vue.js pour le Front. Nous utilisons MongoDB comme base de données.


## Comment l'installer ? 

* Tout d'abord, commençons par installer le back.
Pour ce faire, dirigez-vous depuis votre terminal vers le dossier back/back, puis tapez : 

```
composer install
```

Une fois ceci fait, petit détail technique qui peut paraitre déroutant.
Dirigez vous, toujours depuis le back, vers le fichier 'vendor/laravel/sanctum/src/PersonalAccessToken.php'

Tout en haut, remplacez la ligne '*/Model'* par "use Jenssegers\Mongodb\Eloquent\Model;"
Puis, rajoutez à l'intérieur de la classe : "protected $connection = 'mongodb';"

Une fois ceci fait, vous pourrez lancer le serveur en tapant : 

```
php artisan serve
```
Votre serveur devrait être lancé sur l'adresse : "http://127.0.0.1:8000"

Maintenant, dirigez vous vers le dossier racine.

Ici, tapez simplement : 

```
npm install
```

Puis, pour lancer le serveur : 

```
npx vite
```

Serveur accessible : "http://localhost:3000/


### Fonctionnalités basiques du site

* Détail très important avant de commencer la présentation des diverses pages : seules les adresses certifiées "epitech.eu" sont autorisées.


#### Barre de navigation

Tout en haut de notre site se trouve la barre de navigation. Dans celle-ci, vous trouverez si vous n'êtes pas connecté :
* Le logo Epitech qui vous renvoie à la page d'accueil
* L'onglet "Annonces" qui vous renvoie à la page de toutes les annonces
* Le bouton "Se connecter" qui vous permet de vous connecter
* Le bouton "S'enregistrer" qui vous permet de vous inscrire et donc de pouvoir utiliser le site

Et si vous êtes connecté :

* Toujours le logo Epitech
* L'onglet profil avec une photo vous permettant d'avoir accès a toutes vos annonces et de pouvoir les modifier/supprimer
* L'onglet "Annonces"
* Le bouton "Se déconnecter"

#### Page d'accueil

Sur la page d'accueil se trouve deux éléments importants.

Le premier est un carroussel automatique créé en pur CSS qui affiche les annonces du filtre sélectionné
Et en dessous, une liste avec toutes les annonces qui ne sont pas dans le carroussel

Vous avez aussi un sélecteur de filtre vous permettant d'afficher les annonces selon si elles viennent du BDE, de la Pédago, ou bien des étudiants.

#### Annonces

Sur cette page, vous avez le même filtre que sur la page d'accueil vous permettant de n'afficher que ce qui vous intérèsse. Vous pourrez constater qu'elles ont un bouton vous permettant d'accéder à une nouvelle page, celle de l'annonce elle-même.

#### Annonce seule

Ici, vous pourrez voir tous les détails d'une annonce, dont les commentaires en appuyant sur le bouton correspondant en dessous. Vous pourrez aussi en rajouter si vous êtes connecté.

#### Profil

Cette page affiche vos informations personnelle ainsi que toutes les annonces que vous avez postées.

### Fonctionnalités admin du site

#### Vue admin


Si vous êtes un administrateur du site, vous pourrez voir au niveau de la barre de navigation un bouton vous permettant d'avoir accès à la CRUD admin.
Sur cette page, vous aurez accès à toutes les annonces, tous les commentaires, et tous les utilisateurs sous forme de tableau.
Vous verrez une mini barre de navigation vous permettant de filtrer les différentes catégories.
Cette crud est agrémentée d'une barre de navigation.


### Protection du site

* Tous les mots de passes sont cryptés et masqués, même l'admin n'y a pas accès.
* Une adresse inexistante vous renverrant une erreur 404 ( attention au Kraken ! )
* Une tentative de connection à la page admin alors qu'on n'y a pas accès redirigera aussi vers une erreur 404


### Difficultées techniques

La connection entre Laravel et MongoDB a été assez compliquée, il n'était pas prévu de modifier des fichiers aussi loin dans les profondeurs du projet, mais nous y sommes quand même parvenus.

### Remerciements

Merci à tous les développeurs ayant participé au projet :  Rémi, Jules, Léonardo, Olivier, et Jonathan.

Pour de plus amples informations, veuillez contacter : remi.triton@epitech.eu / jonathan.franco@epitech.eu
