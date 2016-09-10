# Lab 22 Controller Crud
This is my submission for our lab where we make AJAX calls to our API to perform CRUD operations on a single resource. In this case, I opted to use Duncan's `noteapp-backend` for the backend server. The client-facing portion is created using Angular to interact with the backend. This web app allows a user to create a list item, get all the lists in the database, or remove a list item. Changes from the specified requests will be vieweable in `build/index.html`.

## Installation
First, clone down this repo. Then, install dependencies via `npm i` from the root directory. Next, in your command line run `npm run watch`. Follow-up by starting up the server. This can be done by typing `api/vendor/noteapp-backend/server.js` in your command line.

Second, you want to start `mongo`. Do this by creating a `db` directory in the root directory of this project. Next, type `mongod --dbpath db` to specify which database directory `mongo` will use.

Finally, open your web browser and go to `http://localhost:8080`. This should allow you to interact with the front-end client.

## Usage
Intially, there are no lists in the database. To create a list simply type any name into the `List Name` input and click `submit`. The new list should appear on the DOM with the list's name followed by the list's ID. If you refresh the page and click `Get Lists` it should get all lists in the database.

To remove a list from the database type it's ID into the `Delete List By ID` input and click `Remove List`. If you refresh the page and click `Get Lists` again it should no longer appear.

## Testing
To run tests simply run `karma start`. So far this test is only built to test POST and GET routes. However, in it's incomplete state, it only successfully tests the POST route. GET needs to be fixed and the DELETE route has yet to be implemented.

Another test you can run is for `eslint`. In the command line type `npm run lint` to test for any linter errors.
