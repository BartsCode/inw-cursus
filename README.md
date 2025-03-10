 # Informaticawetenschappen Leerplatform
 
 ## Overzicht
 
 Welkom bij het Informaticawetenschappen Leerplatform, een open-source leeromgeving speciaal ontwikkeld voor leerkrachten en leerlingen in de derde graad secundair onderwijs in Vlaanderen. Dit platform biedt interactieve cursussen voor het vak Informaticawetenschappen, met focus op programmeren in Python.

 ## Voor Leerkrachten
 
 ### Hoe Gebruiken?
 
 #### Optie 1: Direct Gebruiken (Geen Technische Kennis Vereist)
 
 De eenvoudigste manier om het platform te gebruiken is via onze gehoste versie:
 
 1. Ga naar [https://informaticawetenschappen.com](https://informaticawetenschappen.com)
 2. Deel deze link met uw leerlingen
 3. De leerlingen kunnen direct beginnen met de cursussen, quizzen en code-uitdagingen
 
 #### Optie 2: Aanpassen en Zelf Hosten (Enige Technische Kennis Vereist)

Als u de inhoud wilt aanpassen aan uw specifieke leerplan:
 
 1. **Fork de GitHub Repository**
    - Ga naar [https://github.com/schuyten/inw-cursus](https://github.com/schuyten/inw-cursus)
    - Klik op de "Fork" knop rechtsboven
 
 2. **Pas de Inhoud Aan**
    - Alle cursusinhoud staat in de `content` map
    - Elke cursus heeft een eigen submap (bijv. `5BCW` voor 5de jaar Biotechnologische en Chemische STEM-Wetenschappen)
    - De hoofdstukken zijn geschreven in Markdown (.md bestanden)
    - Bewerk deze bestanden om de inhoud aan te passen aan uw behoeften
 
 3. **Zelf Hosten**
 
    **Optie A: Vercel (Eenvoudigste)**
    - Maak een gratis account aan op [Vercel](https://vercel.com)
    - Klik op "New Project" en verbind met uw GitHub account
    - Selecteer uw geforkte repository
    - Klik op "Deploy"
    - Vercel zal automatisch uw site bouwen en hosten
 
    **Optie B: Lokaal Draaien**
    - Installeer [Node.js](https://nodejs.org/) (versie 14 of hoger)
    - Open een terminal of command prompt
    - Navigeer naar de map waar u het project wilt opslaan
    - Voer de volgende commando's uit:
      ```
      git clone https://github.com/Schuyten/inw-cursus.git
      cd informaticawetenschappen
      npm install
      npm run dev
      ```
    - Open een browser en ga naar `http://localhost:3000`
 
 ### Cursusinhoud Aanpassen
 
 De cursusinhoud is opgeslagen in Markdown-bestanden (.md) in de `content` map. U hoeft geen programmeerkennis te hebben om deze aan te passen:
 
 1. Navigeer naar de `content` map in uw geforkte repository
 2. Kies de juiste cursusmap (bijv. `5BCW` voor 5de jaar Biotechnologische en Chemische STEM-Wetenschappen)
 3. Open het hoofdstuk dat u wilt aanpassen (bijv. `chapter1_1.md`)
 4. Klik op het potlood-icoon om te bewerken
 5. Maak uw wijzigingen in de Markdown-tekst
 6. Scroll naar beneden en klik op "Commit changes"
 
 #### Markdown Basis
 
 Markdown is een eenvoudige opmaaktaal:
 
 ```
 # Hoofdstuktitel
 ## Subtitel
 
 Normale tekst
 
 **Vetgedrukte tekst**
 
 *Schuingedrukte tekst*
 
 - Lijstitem 1
 - Lijstitem 2
 
 1. Genummerd item 1
 2. Genummerd item 2
 
 [Link tekst](https://www.voorbeeld.be)
 
 ![Afbeelding beschrijving](pad/naar/afbeelding.jpg)
 
 ```
 
 # Code voorbeeld
 print("Hello World")
 ```
 
 ### Quizzen en Code-uitdagingen Toevoegen
 
 Quizzen en code-uitdagingen worden gedefinieerd in het bestand `components/chapter-quiz.tsx`:
 
 1. Open dit bestand in uw geforkte repository
 2. Zoek de `chapterContent` variabele
 3. Voeg een nieuw item toe voor uw hoofdstuk, met quizvragen en code-uitdagingen
 
 ## Functies van het Platform
 
 - **Interactieve Cursussen**: Markdown-gebaseerde lessen met syntax highlighting voor code
 - **Quizzen**: Test het begrip van de leerlingen met meerkeuzevragen
 - **Code-uitdagingen**: Laat leerlingen Python-code schrijven en test deze automatisch
 - **Prestatiebadges**: Motiveer leerlingen met badges voor voltooide uitdagingen
 - **Leaderboard**: Stimuleer gezonde competitie tussen leerlingen
 - **AI-assistent**: Leerlingen kunnen vragen stellen aan een AI-assistent
 
 ## Technische Details (Voor Gevorderde Gebruikers)
 
 Dit platform is gebouwd met:
 - **Next.js**: Een React framework voor webapplicaties
 - **TypeScript**
 - **Tailwind CSS**: Voor styling
 - **Vercel**: Voor hosting en serverless functies
 
 De code-uitdagingen worden geëvalueerd via een beveiligde API die Python-code veilig uitvoert en test.

 ## Ondersteuning
 
 Heeft u vragen of loopt u tegen problemen aan? Neem contact op via:
 - GitHub Issues: [https://github.com/Schuyten/inw-cursus/issues](https://github.com/Schuyten/inw-cursus/issues)
 - E-mail: [support@informaticawetenschappen.com](mailto:support@informaticawetenschappen.com)
 
 ## Bijdragen
 
 We verwelkomen bijdragen van leerkrachten! Als u verbeteringen of nieuwe inhoud wilt toevoegen, maak dan een pull request aan op GitHub.

 ## Licentie
 
 Dit project is beschikbaar onder de MIT-licentie, wat betekent dat u het vrij kunt gebruiken, aanpassen en distribueren voor uw eigen lesdoeleinden.

 ---
 
Ontwikkeld met ❤️ voor informaticaleerkrachten in Vlaanderen.

