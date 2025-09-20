# 2.1 Variabelen

Variabelen zijn een fundamenteel concept in programmeren. Ze stellen ons in staat om gegevens op te slaan en te manipuleren in ons programma. In Python zijn variabelen eenvoudig te gebruiken en zeer flexibel.

## Wat is een variabele?

In Python slaan we informatie op in variabelen in het geheugen van de computer. **Je kunt een variabele zien als een label of een doosje waarin je een waarde bewaart.** De waarde is de daadwerkelijke informatie die je in de variabele opslaat. 

De computer slaat die informatie op in binaire vorm - met eentjes en nulletjes. Daarom heeft elke waarde een bepaald datatype. **Het datatype geeft aan wat voor soort informatie is opgeslagen in de variablele** (bijvoorbeeld tekst, getal, etc.). Zo kan de computer weten hoe de informatie, bestaande uit eentjes en nulletjes te interpreteren als tekst, getal of iets anders.

## Variabelen toewijzen

In Python wijs je een waarde toe aan een variabele met het gelijkheidsteken (`=`). Hier is een eenvoudig voorbeeld:

```python
boodschap = "Hallo, wereld!"
print(boodschap)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Hierbij staat de variabele naam steeds voor het gelijkheidsteken en de waarde die in deze variabele wordt bewaard na het gelijkheidsteken.
Probeer de code hierboven uit te voeren. Je zult zien dat de tekst "Hallo, wereld!" wordt afgedrukt. Dit wijst erop dat de variabele `boodschap` de waarde `"Hallo, wereld!"` bevatte.

## Variabelen wijzigen

Je kunt de waarde van een variabele op elk moment wijzigen. Laten we een voorbeeld bekijken met een string:

```python
naam = "Alice"
print(f"Hallo, {naam}")

naam = "Bob"
print(f"Hallo, {naam}")
````
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Voer deze code uit en observeer hoe de begroeting verandert wanneer we de waarde van `naam` wijzigen. Bemerk dat je een variabele enkel mag gebruiken nadat die een waarde werd toegewezen! De volgende code werkt daarom niet:

```python
print(f"{buurman}, wat doet u nu?")
buurman = "Kees"
````
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Hier werd gepoogd om de waarde van variabele `buurman` op het scherm te zetten, nog voor deze waarde was gekend. De computer leest immers de code doorgaans van boven naar onder. Pas op de tweede lijn wordt een waarde toegekend aan `buurman`, die nodig was op de eerste lijn.

## Oefening: String manipulatie

Probeer nu zelf! Maak een variabele `stad` aan met de naam van je favoriete stad. Print deze uit, met de begeleidende tekst "Mijn favoriete stad is...". Wijzig de waarde naar een andere stad, en print die opnieuw.

```python
 # Jouw code hier
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Naamgeving van variabelen

Bij het kiezen van namen voor variabelen zijn er enkele regels:

* Gebruik enkel letters, cijfers en underscores.
* Begin nooit met een cijfer.
* Gebruik beschrijvende namen die duidelijk maken waar de variabele voor dient.
* Vermijd het gebruik van Python keywords als variabelenamen (zoals `if`, `else`, `for`, etc.).

### Goede voorbeelden:

* `naam_leerling`
* `leeftijd`
* `aantal_punten`
* `x_coordinaat`
* `is_geldig`

### Slechte voorbeelden:

* `1ste_leerling` (begint met een cijfer)
* `x` (niet beschrijvend)
* `for` (Python keyword)
* `kl@s` (speciale characters mogen niet)

**Tip:** Kies namen die logisch zijn en die je later nog begrijpt, zelfs als je de code een tijdje niet hebt gezien.


## Comments in Python

Voordat we overgaan naar de verschillende datatypes, is het goed om te weten hoe je commentaar kunt schrijven in Python. Commentaar/comments zijn stukjes tekst in je code die beschrijven wat de code doet, die niet alleen nuttig zijn voor andere mensen die de code lezen, maar ook voor jezelf om later de code te begrijpen. Als je samenwerkt in teams, is het belangrijk dat je comments schrijft die de code duidelijk maken voor anderen.

```python
 # Dit is één enkele regel comment
"""
Dit is een
multi-line
comment
"""
```