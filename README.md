# POS-App-Cafe-BackEnd

## FLow of this REST API
* [Flowchart](Flowchart_ufocafe.jpg)

## Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Database](ufotable_cafe.sql)
* [Postman](Cafe.postman_collection.json)

## Installation

Clone this repository and then use the package manager npm to install dependencies.

## Setup .env example

Create .env file in your root project folder.

```env

DB_HOST = localhost
DB_USER = "your database username"
DB_PASSWORD = "your database password"
DB_DATABASE = ufotable_cafe
PORT = "your port"
SECRET_KEY = "your secret key"
PORT_REDIS = 6379

```

### Compiles and hot-reloads for development
```
npm run dev
```

### Lints and fixes files
```
npm run lint 
```

### Use standard to fixes files
```
standard --fix 
```

### Test Deployment Website
[ufotablecafe.fwdev.online](http://ufotablecafe.fwdev.online/)
