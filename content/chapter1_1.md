# Installatie: Python en VS Code

Voordat we kunnen beginnen met programmeren, moeten we eerst onze ontwikkelomgeving opzetten. We zullen Python installeren en testen of alles correct werkt.

## Python installeren op Windows

1. Ga naar de officiële Python-website: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Download de laatste versie van Python voor Windows.
3. Start het gedownloade installatiebestand.
4. Zorg ervoor dat je de optie "Add Python to PATH" aanvinkt tijdens de installatie.
5. Volg de verdere installatie-instructies op het scherm.

## Visual Studio Code (VS Code) installeren

Visual Studio Code is een krachtige, lichtgewicht code-editor die uitstekend geschikt is voor Python-ontwikkeling en voor vele andere programmeertalen. Zo kan je VS Code installeren:

1. Ga naar de officiële VS Code-website: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Klik op de "Download for Windows" knop.
3. Zodra het downloaden voltooid is, start je het installatiebestand.
4. Volg de installatie-instructies. De standaardinstellingen zijn meestal voldoende.
  `,
  '1.2': `
## Python testen in de terminal

Na de installatie is het belangrijk om te controleren of Python correct is geïnstalleerd en toegankelijk is via de command prompt (terminal).

1. Open de Command Prompt (je kunt dit doen door "cmd" te typen in het Windows zoekvenster en op Enter te drukken).
2. Typ het volgende commando en druk op Enter:

\`\`\`bash
python --version
\`\`\`

Als Python correct is geïnstalleerd, zou je de geïnstalleerde versie moeten zien, bijvoorbeeld:

\`\`\`bash
Python 3.12.4
\`\`\`

## Je eerste Python-programma uitvoeren

Laten we een eenvoudig Python-programma uitvoeren om te bevestigen dat alles correct werkt:

1. Open opnieuw de Command Prompt.
2. Typ \`python\` en druk op Enter om de Python-interpreter te starten.
3. Je zou nu de volgende tekens moeten zien: \`>>>\`.
4. Typ de volgende code en druk op Enter:

\`\`\`python
print("Hello, World!")
\`\`\`

Als alles goed is gegaan, zou je de volgende output moeten zien:

\`\`\`bash
Hello, World!
\`\`\`

Om de Python-interpreter te verlaten, typ \`exit()\` en druk op Enter.
  `,
  '1.3': `
## VS Code Python-extensie

Na de installatie van VS Code, moeten we het configureren voor Python-ontwikkeling:

1. Open VS Code.
2. Ga naar de Extensions view door op het vierkante icoon in de linkerzijbalk te klikken of door \`Ctrl+Shift+X\` te drukken.
3. Zoek naar "Python" in de zoekbalk.
4. Installeer de officiële Python-extensie van Microsoft.
5. Herstart VS Code na de installatie van de extensie.

## Een Python-bestand maken en uitvoeren in VS Code

Laten we testen of alles correct werkt:

1. Open VS Code.
2. Maak een nieuw bestand aan (\`Ctrl+N\`) en sla het op als \`hello.py\` (\`Ctrl+S\`).
3. Typ de volgende code in het bestand:

\`\`\`python
print("Hello, World! VS Code werkt correct met Python!")
\`\`\`

4. Druk op \`Ctrl+F5\` of op het driehoekje in de bovenbalk (Run) om het programma uit te voeren.

Gefeliciteerd! Je hebt nu zowel Python als VS Code succesvol geïnstalleerd en geconfigureerd. Je bent klaar om te beginnen met het ontwikkelen van Python-programma's in een professionele programmeeromgeving.