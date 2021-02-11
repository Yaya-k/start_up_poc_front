<br />
<p align="center">
  <h3 align="center">STARTUP POC</h3>

  <p align="center">
    API de suivi de temps passé sur des projets d'entreprise partie front.
    <br />
    <a href="#documentation"><strong>Explorer la doc »</strong></a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Sommaire</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">A propos du projet</a>
      <ul>
        <li><a href="#built-with">Conçu avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting strated</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contribution</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## A propos du projet

La partie front et developer en ANgular. Elle permet le suivi de temps de travail des développeurs d'une entreprise.

Voici la liste des fonctionnalités implémentées et qui sont liers au backend:

* En tant qu’utilisateur, on peut se connecter via un Login / Password, et acceder au dashboard qui lui est reservé  (les profils supportés sont Admin, Manager, User).
* Une utilisateur peux se deconnecter correctement.

Voici la liste des fonctionnalités implémentées et qui ne sont liers au backend (par souci de temps car nous avions un problème de droit d'accès comme nous l'avions mentionné pendant la présentation):

* En tant que User, on peut saisir ses temps, à la granularité de la seconde (choix projet + temps).
* En tant que User, on peut éditer un compte-rendu mensuel (export PDF).
* En tant que User, on peut consulter les temps saisis par les Users.
* En tatn que User, on peut supprimer une saisie de temps.
* En tant que Manager, on peut éditer les compte-rendus périodiques des Users qui lui sont rattachés (export PDF).
* En tant que Manager, on peut saisir des projets.
* En tant que Manager, on peut saisir de nouveaux Users qui lui seront rattachés.
* En tant qu’Admin, on peut changer le statut d’un User (Manager / User).
* En tant qu’Admin, on peut changer l’affectation d’un User (changement de Manager).
* En tant qu’utilisateur non authentifié je ne peux pas solliciter l’API (excepté pour m’authentifier).

Il nous reste à faire les autres raquettes pour entièrement connecter le front au backend. 



### Built With

* [Angular](https://angular.io/)


<!-- GETTING STARTED -->
## Getting Started

Pour avoir une copie locale du projet, veuillez suivre les étapes suivantes.

### Prerequisites

Il faut installer Angualr CLI sur votre machine, et avoir un IDE. Celui recommandé est PhpStorm.

### Installation

Clone the repo
   ```sh
   git clone [ici](https://github.com/Yaya-k/start_up_poc_front) et pour lancer le serveur ng serve
   ```


<!-- CONTRIBUTING -->
## Contributing

This project is close to contributions.


<!-- LICENSE -->
## License

No license is attributed to this project.

<!-- CONTACT -->
## Contact

Yaya Kamissokho - yaya.kamissokho@gmail.com
Sami Elouafkaoui - samiaymane98@gmail.com




