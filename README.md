# Expense Tracker

This Website will help user to track and compare expenses.
<br>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Description

This website will allow users to add/edit/delete expenses. This will store data on local storage thus it will retrieve all data added by user before. 
This website also comes with rough monthly basis graphical visualisation for whole year. allowing user to roughly compare expenses for every month.

Note: As of now, this website is desktop only.

## Features

* User can add/edit/delete expense entry.
* All the entries will be stored in local storage, so all the data will be retrieved after refresh
* This website will fetch expense amount and then it will be represented as a graph. Remember that graphical represntation is not exact and that graph will take highest expense amount of any month as the basis for all other monthly expenses.

## Demo

Here is the [Demo of website](https://id11297.web.app/home) 
<br>
Deployed using [Firebase](https://firebase.google.com/)

## Built With

* <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
* <img src="https://img.shields.io/badge/HTML5%20-%23e34f26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
* <img src="https://img.shields.io/badge/CSS3-1572B6?&style=for-the-badge&logo=css3&logoColor=white" />

## Screenshots
<details>
  <summary>Click to see screenshots</summary>
  <br>
  <img src='/src/assets/1.png'></img>
  <img src='/src/assets/2.png'></img>
  <img src='/src/assets/3.png'></img>
</details>

## Getting Started

### Prerequisites

1) [Angular CLI v14.2.1 and UP](https://angular.io/)
2) [Node.js v16.17.0 and UP](https://nodejs.org/en/) (LTS Version Recommanded) 

### Installing

If anyone wants to test this project, user can do so by following below instruction.

* Download source code and extract anywhere into the PC.
* Open Terminal where project is extracted and then run following command 
```
npm install 
```
* After npm installs all dependency, user can run below command to see project in action.
```
ng serve
```
