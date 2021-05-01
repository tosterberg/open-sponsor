OpenSponsor
===========

## Local install directions

Download or clone the repository onto your local machine.
- You will want to install MongoDB locally if you do not have it already.  You can do that here https://www.mongodb.com/.  The base configuration expects MongoDB to be available on port 27017, so if you are running MongoDB on a different port please update the `./config/database.js` file `mongodb://localhost:27017/open-sponsor`.
- You will also need node.js for both the backend and the node package manager aka. `npm`.  Instructions on their installation can be found here https://nodejs.org/en/.  You will then run `npm install` which will download the required dependencies.
- Starting the backend will require you to navigate to ./open-sponsor and run `node app` in the command line. You will get the following messages in terminal if the backend is connected and ready to go.
```
Server started on port 3000
Connected to database mongodb://localhost:27017/open-sponsor
```
- Starting the frontend will require you to open another terminal window and navigate to `./open-sponsor/src/` and run the angular command `ng serve -o` which will open the project web application in your default browser in a new window.
- This is to run a local development version of the application where you will have a MongoDB service available on port 27017, a backend at `localhost:3000`, and the frontend at `localhost:4200`.


#### MEAN Stack Components
- Backend -- Node.js / Express / Mongoose
- Authorization -- Passport
- Running multiple ports on localhost -- CORS
- Frontend -- Angular 2 / Angular-CLI

#### Links
- https://nodejs.org/en/
- https://expressjs.com/
- https://www.mongodb.com/
- https://mongoosejs.com/
- https://www.npmjs.com/package/bcryptjs
- http://www.passportjs.org/packages/passport-jwt/
