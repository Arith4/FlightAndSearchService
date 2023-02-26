# Welcome to Flights Services

## Project Setup

- Clone the project on your local system.
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file i the root directory and add the following environment variable -`PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json :

```
{
  "development": {
      "username": "<YOUR_DB_LOGIN_NAME>",
      "password": "<YOUR_DB_PASSWORD>",
      "database": "Flights_Search_DB_DEV",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
}

```
<<<<<<< HEAD

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`.
=======
>>>>>>> 51dc47f75110937509211d79521d37ba78df93b4
