# FrictionReport [![AWS S3 Deployment](https://github.com/MajinPierce/FrictionReport-angular/actions/workflows/aws.yml/badge.svg)](https://github.com/MajinPierce/FrictionReport-angular/actions/workflows/aws.yml)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1. It also uses node 18.16.0 LTS.

This is the frontend for [Friction Report](https://www.friction.report). I was jealous of [Sendex](https://sendex.report), and wanted to make my own climbing weather report for areas a bit closer to home.

# Backend

The code for the Friction Report backend is built using Java Spring Boot 3 and is available [here](https://github.com/MajinPierce/FrictionReport-api).

# Install and Run

I highly recommend using nvm to manage your versions of node. 

Once the correct version of node is installed, angular cli needs to be installed: 
```
npm install -g @angular/cli
```
and then the various dependencies need to be installed:
```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Feedback / Contributions

I welcome all feedback or code improvements. I do lots wrong (even more so on frontend work) and am always looking to learn.

The [issue tracker](https://github.com/MajinPierce/FrictionReport-angular/issues) is the preferred channel for bug reports, features requests, and submitting pull requests.

# Future Plans / Wishful Thinking

* Total precipitation over the last x day/hours so that you can better judge rock conditions
* Come up with a better formula for the sendex that explicitly takes into account precipitation
  * Would help establish what a good score actually is other than a vague ~100 is good
