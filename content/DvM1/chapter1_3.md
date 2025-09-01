
## Een Python-bestand maken en uitvoeren

Laten we testen of alles correct werkt:

1. Open IDLE.
2. Maak een nieuw bestand aan (`Ctrl+N`) 
3. Typ de volgende code in het bestand:

```python
print("Hello, World! VS Code werkt correct met Python!")
```

4. Sla het op als `hello.py` (`Ctrl+S`).

5. Druk op \`Ctrl+F5\` of op \`Run Module\` in de bovenbalk (Run) om het programma uit te voeren.

Let erop: Je kan enkel de bovenbalk met run zien als het venster met het programma (hier `hello.py`) ook effectief geselecteerd is. Zie je deze bovenbalk niet, klik dan eerst op het programma-venster `hello.py` om dit te selecteren. 

Als alles goed gaat, zie je in IDLE de uitvoer van je programma verschijnen. 

6. Maak een folder met naam `PythonProgs` op de desktop, en sleep het programma `hello.py` in deze folder.

We zullen alle programma's uit deze cursus in deze folder opslaan, zodat niets verloren gaat. Gefeliciteerd! Je hebt nu Python succesvol geïnstalleerd en getest. Je bent klaar om te beginnen met het ontwikkelen van Python-programma's.

## Command line vs bestand

Het is me opgevallen dat vele leerlingen de command line blijven gebruiken in plaats van een bestand te gebruiken. Er grote verschillen zijn tussen het uitvoeren van een programma via de command line (">>>") en de uitvoer via een bestand. Daarom volgende vergelijking:

### Python via de Command Line (REPL):

REPL staat voor `Read-Eval-Print Loop`. Het is een interactieve omgeving die de volgende stappen in een oneindige lus uitvoert:

1. Read (Lezen): De omgeving wacht op en leest jouw input (een regel code).
2. Eval (Evalueren): De ingevoerde code wordt geëvalueerd (uitgevoerd/berekend).
3. Print (Printen): Het resultaat van de berekening wordt getoond (geprint).
4. Loop (Lus): De omgeving gaat weer terug naar stap 1 en wacht op de volgende input.

Kenmerken:

- REPL geeft directe feedback: Je kan maar één commando-lijn tegelijk ingeven, druk je 'enter', dan wordt de uitvoer direct berekend en op het scherm gezet. Je kan zo Python gebruiken als een eenvoudig rekenmachine. Print()-statements zijn niet nodig om de uitvoer te zien op het scherm.
- REPL is goed om snel iets te testen, te experimenteren, te debuggen.
- Nadeel: De ingegeven code verdwijnt als je het programma sluit. Daarom gebruiken we deze methode niet in normale toepassingen.

Bewijs: Test volgende lijnen door ze één voor één over te typen in IDLE:

```python
>>> print("Hallo")
'Hallo'
>>> 5+3
8
>>> "interessant!"
'interessant'
```

### Python via een bestand:

Kenmerken:

- Het programma loopt niet interactief, (tenzij je input() gebruikt - zie later. De computer voert alle lijnen code achtereenvolgens uit, van boven naar onder.
- De berekeningen worden niet allemaal standaard op het scherm gezet. Enkel print()-statements leiden tot uitvoer op het scherm.
- Voordeel: De code kan je bewaren op harde schijf voor hergebruik. Daarom is dit meestal de juiste manier van werken.

Bewijs: Copier deze code in een bestand, waarna je het bestand runt zoals hierboven beschreven. De uitvoer zou hetzelfde als wanneer je het hier runt. 
**Bemerk het verschil met hierboven!**

```python
print("Hallo")
5+3
"interessant!"
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>