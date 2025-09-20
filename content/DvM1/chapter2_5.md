# 2.5 Oefeningen: Variabelen en Datatypes

In dit hoofdstuk gaan we de concepten die we hebben geleerd in de vorige twee hoofdstukken in de praktijk brengen. De oefeningen variëren in moeilijkheidsgraad, zodat er voor elke leerling uitdagende opdrachten zijn. Bij sommmige oefeningen, waarbij input gevraagd is, zal geen code-editor beschikbaar zijn. In dat geval kan je de oefeningen in een nieuw `.py`-bestand in IDLE of een andere teksteditor uitwerken. Door de code te **runnen** zal je de mogelijkheid krijgen om input te geven en de output te verifiëren.

Je kan best een bestand aanmaken en de oefeningen uitwerken in IDLE, zodat je ze kan opslaan.

## Oefening 1: Basis variabelen
• Moeilijkheidsgraad: ★☆☆☆☆

Maak drie variabelen: `voornaam`, `achternaam`, en `leeftijd`. Wijs er waarden aan toe en gebruik dan een f-string om een zin te maken die deze informatie bevat. Print de zin.

Verwachte output (met jouw gegevens):
Hallo, ik ben [voornaam] [achternaam] en ik ben [leeftijd] jaar oud.

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 2: String manipulatie
• Moeilijkheidsgraad: ★★☆☆☆

Maak een variabele `zin` met de waarde "Python programmeren is leuk!". Gebruik string methoden om:
1. De zin in hoofdletters te zetten
2. Het woord "leuk" te vervangen door "geweldig"
3. Het aantal karakters in de nieuwe zin te tellen

Print de resultaten van elke stap.

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>
---
## Oefening 3: Rekenen met variabelen
• Moeilijkheidsgraad: ★★☆☆☆

Je hebt €50 in je portemonnee. Een boek kost €12,50 en een tijdschrift kost €3,75. Bereken hoeveel geld je overhoudt als je 2 boeken en 3 tijdschriften koopt. Gebruik variabelen voor alle waarden en print het resultaat met twee decimalen.

Verwachte output: Na het kopen van 2 boeken en 3 tijdschriften heb ik nog €13.75 over.

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 4: Type conversie
• Moeilijkheidsgraad: ★★★☆☆

Een gebruiker geeft zijn geboortejaar als tekst in: ```"2001"```. Bereken hun leeftijd in het jaar 2030. Zorg ervoor dat je rekening houdt met type conversie.

Output: In 2030 zul je 29 jaar oud zijn.

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 5: Boolean logica
• Moeilijkheidsgraad: ★★★☆☆

Maak twee variabelen a en b en wijs er willekeurige gehele getallen aan toe.
Schrijf vervolgens een code die volgende booleaanse uitkomst print:

Output:\
a is groter dan b is ... \
b is kleiner of gelijk aan 2a is ... \
de rest bij deling van b door a is kleiner dan a is ... 

Laat de computer de expressie berekenen zodat
op de puntjes ... True of False komt te staan!

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 6: BMI Calculator
• Moeilijkheidsgraad: ★★★☆☆

Schrijf een programma dat de Body Mass Index (BMI) berekent. Vraag de gebruiker om hun gewicht (in kg) en lengte (in meters) in te voeren. De formule voor BMI is: gewicht / (lengte * lengte). Print het resultaat met één decimaal.

Voorbeeld output: Je BMI is 24.5

## Oefening 7: Temperatuur Converter
• Moeilijkheidsgraad: ★★★☆☆

Schrijf een programma dat Fahrenheit naar Celsius converteert. Vraag de gebruiker om een temperatuur in Fahrenheit in te voeren en converteer deze naar Celsius. De formule is: (F - 32) * 5/9 = C. Print het resultaat met één decimaal.

Tip: Je kunt de uitkomst verifiëren door online een weersite te raadplegen en de temperatuur in Fahrenheit om te zetten naar Celsius.

Voorbeeld output: 75°F is gelijk aan 23.9°C

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>



## Oefening 8: Creatieve string formatting
• Moeilijkheidsgraad: ★★★★☆

Schrijf een programma dat een "naamplaatje" genereert. Vraag de gebruiker om hun voornaam, achternaam en functietitel. Maak vervolgens een naamplaatje met de volgende opmaak:

```python
+----------------------+
|      JOHN DOE        |
|    Python Expert     |
+----------------------+
```

Zorg ervoor dat de naam altijd gecentreerd is op de bovenste regel, ongeacht de lengte van de naam. De functietitel moet gecentreerd zijn op de tweede regel. De breedte van het naamplaatje moet dynamisch aangepast worden aan de langste regel (naam of functietitel).

Tip: Gebruik string formatting methoden en de `len()` functie.

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>



## Oefening 9: Valuta Converter
• Moeilijkheidsgraad: ★★★★☆

Schrijf een programma dat euro's naar dollars converteert. Vraag de gebruiker om het bedrag, de bronvaluta (EUR). Gebruik de huidige wisselkoers (je kunt deze opzoeken of een vaste waarde gebruiken, bijvoorbeeld 1 EUR = 1.18 USD). Print het geconverteerde bedrag met twee decimalen.

Voorbeeld output: 100 EUR is gelijk aan 118.00 USD

```python
 # Jouw code hier

```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>



## Oefening 10: Variabelen wisselen
• Moeilijkheidsgraad: ★★★★☆

In de code hieronder werd gepoogd om de waarde in beide variabelen te wisselen, en dit zonder dat de waarde in beide variabelen gekend hoeft te zijn. Deze code werkt echter niet. Zoek uit waarom dit niet werkt en pas daarna de code aan zodat dit wel werkt.

Tip: je kan extra print-opdrachten toevoegen om de waarden tussendoor van a en b op te vragen, zo kan je je een beter beeld vormen van wat er juist misloopt. Dit is een veelgebruikte techniek in het zoeken naar fouten, ook wel `debuggen`genoemd.

```python
 # Dit zijn de oorspronkelijke waarden:
a = 2
b = 3.0
 # We wisselen de waarden in a en b:
b = a
a = b
 # We drukken beide waarden af:
print(f"de waarden zijn a:{a} en b:{b}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

