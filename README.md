#Node-Express-Mongo
==================

##Description
Essai de technos NodeJS - express - mongo - jade - monk.

D'après : [http://cwbuecheler.com/](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)

###Outils
- Express - [Site officiel](http://expressjs.com/)
- Jade language - [Site officiel](http://jade-lang.com/)
- MongoDB - [Documentation méthodes](http://docs.mongodb.org/manual/reference/) 


##Dépendances
###Rappel

Bref explication sur le contenu des dossiers de cette arborescence :

- */*
	- dossier original, contenant l'application Express (*ici nodetest1*)
	- contient package.json pour l'installation de **Express** et **Express-generator**
- */nodetest1/*
	- contient package.json pour l'installation de différents modules (*Jade, Monk, Mongo...*)
- */nodetest1/data/* : dossier contenant la base Mongodb

###Package.json

Le fichier *package.json* doit être lancé normalement via la commande :

	$ npm install

---

##Utilisation

###Lancement de l'application

Dans le dossier /nodetest1/data/ :

	$ mongod --dbpath ~/Sites/Node-Express-Mongo/nodetest1/data/

*puisqu'une instance Mongodb est installée au chemin suivant : ~/Sites/Node-Express-Mongo/nodetest1/data/*


Dans le dossier /nodetest1/ :

	$ npm start
	
---

##Fichiers importants

- /nodetest1/app.js
- /nodetest1/routes/index.js
- /nodetest1/views/*.js

