# Filmrecensionsapplikation

## Beskrivning
En webbapplikation för att hantera filmrecensioner. Användare kan lägga till sina egna recensioner och se information om olika filmer.

## Funktioner
- **Startsida:** Överblick över populära och nya filmer.
- **Filmlista:** Lista över alla filmer sorterade i bokstavsordning.
- **Sökfunktion:** Sök bland filmer baserat på titel.
- **Filmens sida:** En detaljerad sida för varje film med medelbetyg och recensioner.

## Teknologier
- Frontend: React.js
- Backend: Express.js och Node.js
- Databas: MongoDB med Mongoose

## Installation
1. Klona projektet till din lokala maskin.
2. Gå in i både frontend- och backend-mapparna och kör `npm install` för att installera beroenden.
3. Starta först backend genom "cd server" och kör kommandot "npm run devStart"
4. Starta sedan frontEnd genom "cd client" och kör kommandor "npm run dev"
5.  Besök [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Routes filmer
- GET http://localhost:3000/films - hämtar alla filmer
- GET http://localhost:3000/films/id - hämtar specifik film
- Post http://localhost:3000/films - LÄgger till film
- PATCH http://localhost:3000/films/id - Uppdaterar film
- DELETE http://localhost:3000/films/id - Raderar film

## Routes User
- POST http://localhost:3000/users/login - Inloggning
- POST http://localhost:3000/users/register - Registrering {
"name": "", "password": ""
}

  
   
