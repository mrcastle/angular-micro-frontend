# Angular Micro Frontend POC

## Overview

Proof of concept for a micro frontend architecture with Angular. Set up with a shell application that hosts the other micro frontends using Angular Native Federation. Contains a navigation menu that can be shared across the micro frontends, and two different micro frontends that are loaded into the shell application.

## Development server

Run `npm install` to install the dependencies.
Run `npm run start:all` to start the development server.
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Alternatively, you can run `ng serve --project nav` to start the navigation micro frontend, `ng serve --project mfe-one` to start the first micro frontend, `ng serve --project mfe-two` to start the second micro frontend, and `ng serve --project shell` to start the shell application.

Docker Compose is also set up to run the application in a Docker container. Run `docker compose up` to start the application.

<hr>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
