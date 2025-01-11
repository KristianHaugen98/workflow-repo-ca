# Workflow repo for the CA

Dette prosjektet er en arbeidsflyt ( Workflow ), for å lære å utføre testinger og utvikling med verktøy som Playwright, Vitest og ESLint.
Brukes rett og slett for å gjøre det lettere og spare tid med å teste ut funksjoner som brukes på nettsiden, som en vanlig bruker ville ha gjort.

## Kom i gang:

1, ##Fork prosjektet:
Fork dette repositoriet til din egen GitHub-bruker, og lag en ny branch med navn "workflow".

2, ##Innstaller avhengigheter:
Kjør følgende komando i terminalen:
npm install

##Miljøvariabler:
Dette holdes sikkert i en .env fil. (Inneholder sensitiv informasjon). NB! Husk å legge det .env i .gitignore mappen!

##Skripts:

Kjør enhetstester = npm run test
Kjør Playwright-tester = npm playwright test
Kjør formatering = npm install -D prettier@3
