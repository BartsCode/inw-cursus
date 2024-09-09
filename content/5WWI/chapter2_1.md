# 2.1 Variabelen

Variabelen zijn een fundamenteel concept in programmeren. Ze stellen ons in staat om gegevens op te slaan en te manipuleren in ons programma. In Python zijn variabelen eenvoudig te gebruiken en zeer flexibel.

## Wat is een variabele?

In Python slaan we informatie op in variabelen in het geheugen van de computer. Je kunt een variabele zien als een label of een doosje waarin je een waarde bewaart. De waarde is de daadwerkelijke informatie die je in de variabele opslaat. Elke waarde heeft een bepaald datatype, dat aangeeft wat voor soort informatie het is (bijvoorbeeld tekst, getal, etc.).

## Variabelen toewijzen

In Python wijs je een waarde toe aan een variabele met het gelijkheidsteken (`=`). Hier is een eenvoudig voorbeeld:

<pre><code>boodschap = "Hallo, wereld!"
print(boodschap)
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Probeer de code hierboven uit te voeren. Je zult zien dat de tekst "Hallo, wereld!" wordt afgedrukt.

## Variabelen wijzigen

Je kunt de waarde van een variabele op elk moment wijzigen. Laten we een voorbeeld bekijken met een string:

<pre><code>naam = "Alice"
print("Hallo,", naam)

naam = "Bob"
print("Hallo,", naam)
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Voer deze code uit en observeer hoe de begroeting verandert wanneer we de waarde van `naam` wijzigen.

## Numerieke variabelen

Variabelen kunnen ook getallen bevatten. Laten we een voorbeeld bekijken met een numerieke variabele:

<pre><code>leeftijd = 25
print("Je bent", leeftijd, "jaar oud.")

leeftijd = leeftijd + 1
print("Na je verjaardag ben je", leeftijd, "jaar oud.")
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In dit voorbeeld zien we hoe we een getal kunnen opslaan en vervolgens kunnen verhogen.

## Oefening: String manipulatie

Probeer nu zelf! Maak een variabele `stad` aan met de naam van je favoriete stad. Print deze uit, wijzig de waarde naar een andere stad, en print opnieuw.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening: Rekenen met variabelen

Maak twee numerieke variabelen `a` en `b` aan met willekeurige getallen. Tel ze op en sla het resultaat op in een nieuwe variabele `som`. Print vervolgens de som uit.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Door deze oefeningen te maken, krijg je een beter begrip van hoe variabelen werken in Python, zowel voor tekst (strings) als voor getallen (numbers).

## Comments in Python

Voordat we overgaan naar de verschillende datatypes, is het goed om te weten hoe je commentaar kunt schrijven in Python. Commentaar/comments zijn stukjes tekst in je code die beschrijven wat de code doet, die niet alleen nuttig zijn voor andere mensen die de code lezen, maar ook voor jezelf om later de code te begrijpen. Als je samenwerkt in teams, is het belangrijk dat je comments schrijft die de code duidelijk maken voor anderen.

```python
# Dit is een enkele regel comment
"""
Dit is een
multi-line
comment
"""
```