# TODOAPP
This project was generated with Angular CLI version 16.1.4.

## Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Running unit tests
Run ng test to execute the unit tests via Karma.

## Running end-to-end tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Decisions
Local Storage can store more data. So I used "localStroge setItem()" method. Each list has an idex and records can be deleted from the index. With using splice() method, 1 record is deleted starting from the current index.