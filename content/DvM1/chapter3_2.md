# 3.2 If-statements

Nu we weten hoe we voorwaarden kunnen maken met vergelijkingsoperatoren, kunnen we ons programma beslissingen laten nemen met behulp van if-statements.

## Het if-statement

Een if-statement laat je code uitvoeren als een bepaalde voorwaarde waar (`True`) is. De syntax is als volgt:

```python
if voorwaarde:
    # code die wordt uitgevoerd als de voorwaarde waar is	
```

Let op de dubbele punt (`:`) na de voorwaarde en de inspringing van de code die moet worden uitgevoerd! 

De code die bij het if-statement wordt uitgevoerd staat in een zogenaamde **codeblok** Dit wil zeggen dat deze code exact 4 spaties verder is ingesprongen dan het if-statement. Alle lijnen die daaronder ook 4 spaties inspringen behoren bij hetzelfde blok. Op deze manier weet het programma tot waar het code-block loopt. De eerste lijn die terug onder het if-statement begint geeft het einde aan van het code-block

### Voorbeeld:

```python
leeftijd = 16

if leeftijd >= 16:
    print("Je mag een bromfiets besturen!")
    print("Maar nog geen pintjes drinken!")
	
print("Fietsen mag iedereen!")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Verander de leeftijd hierboven naar 15 en tracht te voorspellen wat de uitvoer nu zal zijn.

## Het if-else statement

Vaak wil je iets anders doen als de voorwaarde niet waar is. Daarvoor gebruik je een if-else statement:

```python
if voorwaarde:
    # code blok die wordt uitgevoerd als de voorwaarde waar is
else:
    # code blok die wordt uitgevoerd als de voorwaarde niet waar is
```

### Voorbeeld:

```python
leeftijd = 15

if leeftijd >= 16:
    print("Je mag een bromfiets besturen!")
else:
	print("Hou het bij een gewone fiets.")
	print("En vergeet de fietshelm niet!")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Verander de leeftijd hierboven naar 17 en tracht te voorspellen wat de uitvoer nu zal zijn.

## Het if-elif-else statement

Het leven is niet altijd zwart-wit, er zijn soms meer dan twee mogelijke uitkomsten. Om hier in te onderscheiden bestaat in Python het elif statement, wat een afkorting is voor `else-if`. Hier een voorbeeld

```python
if voorwaarde1:
    # code die wordt uitgevoerd als de voorwaarde1 waar is
elif voorwaarde2:
	# code uitgevoerd als voorwaarde1 False is en voorwaarde2 True
elif voorwaarde3:
	# code uitgevoerd als alle voorgaande False en voorwaarde3 True
elif voorwaarde4:
	# Je mag zoveel elif structuren gebruiken als je wil...
else:
    # code die wordt uitgevoerd als geen van alle voorwaarden voldaan is
```

### Voorbeeld:

```python
punten = 6

if punten == 10:
    print("Je behaalde het maximum!")
elif punten >= 8:
	print("Goed gewerkt!")
elif punten >= 5:
	print("Je bent geslaagd")
else:
    print("Hoe ga je dat thuis uitleggen?")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Verander het puntenaantal en tracht telkens te voorspellen wat de nieuwe uitvoer zal worden.

## Geneste if-statements

Je kunt if-statements ook in elkaar nesten (een if-statement binnen een andere if-statement):

```python
leeftijd = 17
heeft_rijbewijs = False

if leeftijd >= 18:
    if heeft_rijbewijs:
        print("Je mag autorijden!")
    else:
        print("Je moet eerst je rijbewijs halen.")
else:
    print("Je moet nog wachten tot je 18 bent.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Meerdere Voorwaarden Combineren

Je kunt meerdere voorwaarden combineren met `and` en `or`:

```python
leeftijd = 19
heeft_ticket = True
heeft_id = True

if leeftijd >= 18 and heeft_ticket and heeft_id:
    print("Welkom op Marktrock!")
else:
    print("Sorry, je hebt geen toegang.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening: Toegang tot Pretpark

Schrijf een programma dat bepaalt of iemand in een attractie mag. De regels zijn:
- Je moet minstens 12 jaar oud zijn
- Je moet minstens 1.50m lang zijn

Vraag de gebruiker om hun leeftijd en lengte, en print dan of ze in de attractie mogen.

```python
 # Jouw code hier
 
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Tips voor het Schrijven van if-statements

1. **Inspringing is belangrijk**: Python gebruikt inspringing of indentatie om te weten welke code bij welk blok hoort.
2. **Vergeet de dubbele punt niet**: Na elke if of else moet een dubbele punt komen.
3. **Houd het leesbaar**: Als je veel voorwaarden hebt, probeer ze dan op te splitsen in kleinere, duidelijke stukken.
4. **Test je voorwaarden**: Zorg dat je programma werkt voor alle mogelijke situaties.

In het volgende hoofdstuk gaan we oefenen met alles wat we hebben geleerd over voorwaarden en if-statements!
