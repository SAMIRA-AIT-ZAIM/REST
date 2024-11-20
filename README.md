# REST
# Gestion des Comptes

Une application de gestion des comptes bancaires, permettant d'ajouter, afficher, modifier et supprimer des comptes. L'application est construite avec React pour le frontend et Spring Boot pour le backend.

## Fonctionnalités

- **Ajouter un compte** : Formulaire pour créer un nouveau compte bancaire avec un solde, une date de création et un type de compte.
- **Liste des comptes** : Affichage des comptes existants dans une table avec la possibilité de supprimer un compte.
- **Modifier un compte** : Possibilité de modifier les informations d'un compte existant.

## Prérequis

- **Node.js** (version 14 ou supérieure) pour le frontend React
- **Java 11 ou supérieur** pour le backend Spring Boot
- **MySQL** ou toute autre base de données compatible pour le backend (configurée dans Spring Boot)

## Installation

### Frontend (React)

1. Clonez le répertoire du frontend :
    ```bash
    git clone https://github.com/votre-utilisateur/gestion-comptes-frontend.git
    cd gestion-comptes-frontend
    ```

2. Installez les dépendances du projet :
    ```bash
    npm install
    ```

3. Lancez l'application React :
    ```bash
    npm start
    ```

   L'application React sera accessible à `http://localhost:3000`.

### Backend (Spring Boot)

1. Clonez le répertoire du backend :
    ```bash
    git clone https://github.com/votre-utilisateur/gestion-comptes-backend.git
    cd gestion-comptes-backend
    ```

2. Assurez-vous que votre base de données MySQL est configurée correctement (voir `application.properties` pour les paramètres de connexion).

3. Exécutez le backend avec Maven ou Gradle :
    ```bash
    mvn spring-boot:run
    ```

   Le backend sera accessible à `http://localhost:8082`.

## Routes de l'API

### `GET /api/comptes`
Récupère la liste des comptes existants.

### `POST /api/comptes`
Ajoute un nouveau compte. Le corps de la requête doit contenir un objet JSON avec les propriétés suivantes :

```json
{
  "solde": 1000.0,
  "dateCreation": "2024-11-20",
  "type": "COURANT"
}


## vidéo


 
