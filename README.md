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
4. Starta sedan frontEnd genom "cd clien" och kör kommandor "npm run dev"
5.  Besök [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Routes
- GET http://localhost:3000/films
- Post http://localhost:3000/films
- PATCH http://localhost:3000/films
- DELETE http://localhost:3000/films/id
  
   
