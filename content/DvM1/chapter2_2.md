# 2.2 Datatypes

In Python zijn er verschillende datatypes die we kunnen gebruiken om verschillende soorten informatie op te slaan. In dit hoofdstuk zullen we de meest voorkomende datatypes bespreken: **strings, integers, floats en booleans**.

## De type() functie

Python heeft een ingebouwde functie `type()` die je kunt gebruiken om het datatype van een variabele te achterhalen:

<pre><code>x = 5
print(type(x))

y = "Hello"
print(type(y))
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Strings

Strings stellen tekst voor. Het zijn als het ware reeksen van karakters (letters, cijfers, symbolen, etc.). Ze worden gebruikt om tekst op te slaan en te manipuleren. Ze kunnen gedefinieerd worden door de tekst tussen aanhalingstekens te zetten. Indien je de tekst niet tussen aanhalingstekens zet, zal Python deze als een variabele beschouwen.

```python
boodschap = "Hallo, wereld!"
print(f"{boodschap} heeft als type {type(boodschap)})
```

Python biedt veel ingebouwde methoden om strings te manipuleren. Een methode is een functie die specifiek is voor een bepaald datatype die kan worden aangeroepen op een object (in dit geval een string) met een punt, gevolgd door de naam van de methode en eventueel parameters tussen haakjes. Hier zijn enkele voorbeelden:

<pre><code>tekst = "DvM is geweldig"
print(tekst.upper()) # Alles in hoofdletters
print(tekst.lower()) # Alles in kleine letters
print(tekst.replace("geweldig", "FANTASTISCH")) # Vervang een woord
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Je kan ook twee strings optellen. Het resultaat is een nieuwe string die bestaat uit beide oorspronkelijke strings achter elkaar. Hier een voorbeeld:

<pre><code>voornaam = "An"
achternaam = "Anas"
fruit = voornaam+achternaam
print(fruit)
</code></pre>

Je kan een string ook vermenigvuldigen met een geheel getal. De vermenigvuldiging is dan logisch om te zetten naar een som. Tracht daarom te voorspellen wat volgende code doet.

<pre><code>tekst1 = "hiep "
tekst2 = "hoera"
jarig = 3*tekst1 + tekst2
print(jarig)
</code></pre>

Je kan de methodes die toegepast kunnen worden op strings terugvinden in de [Python documentatie](https://docs.python.org/3/library/stdtypes.html#string-methods) of in je samenvatting.

### Oefening 2.2.1: String manipulatie

Maak een string variabele met je volledige naam (voornaam en achternaam). 
Gebruik string methoden om:
1. Je naam in hoofdletters te printen
2. Het aantal karakters in je naam te tellen
3. Je voornaam te vervangen door `Programmeur`

Je zal hiervoor de Python documentatie moeten raadplegen.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


## f-strings

f-strings of formatted strings bieden een gemakkelijke manier om variabelen in strings in te voegen. We pasten dit reeds enkele keren toe in print()-opdrachten.

Als je de `f`van `format` vooraan een string plaatst, worden alle variabele namen die tussen accolades staan `{...}` vervangen door de waarde die deze variabelen op dat moment hebben:

```python
naam = "Alice"
leeftijd = 16
print(f"Hallo, mijn naam is {naam} en ik ben {leeftijd} jaar oud.")
```

### Oefening 2.2.3: f-strings

Maak variabelen voor je naam, leeftijd en favoriete vakantiebestemming. Gebruik een f-string om een zin te maken die deze informatie bevat en print deze zin.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


## Integers en Floats

Integers zijn gehele getallen, terwijl floats decimale getallen (kommagetallen) zijn.
Het onderscheid wordt gemaakt door het punt: waarden met een punt in zijn kommagetallen en per definitie `float`. Komt er geen punt in de waarde, dan is het een geheel getal of `integer`.

```python
leeftijd = 25 # integer
pi = 3.14159 # float
```

Je kunt wiskundige operaties uitvoeren met deze numerieke types:

```python
a = 10
b = 3
print(a + b) # Optellen -> Output: 13
print(a - b) # Aftrekken -> Output: 7
print(a * b) # Vermenigvuldigen -> Output: 30
print(a / b) # Delen -> Output: 3.3333333333333335 (resultaat is altijd een float)
print(a // b) # Gehele deling -> Output: 3 (resultaat is altijd een integer)
print(a % b) # Modulo (rest na deling) -> Output: 1
print(a ** b) # Machtsverheffing -> Output: 1000
```
Nu je dit weet, probeer te voorspellen wat het type is van volgende variabelen voor je het programma runt:
<pre><code>
a = 4
b = 43.0

print(f"a+2 heeft als type: {type(a+2)}")
print(f"a+b heeft als type: {type(a+b)}")
print(f"a*2 heeft als type: {type(a*2)}")
print(f"a**2 heeft als type: {type(a**2)}")
print(f"b%a heeft als type: {type(b%a)}")
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


## Self-assignment (zelf-toewijzing)

In Python kun je een variabele ook een nieuwe waarde geven die gebaseerd is op zijn huidige waarde. Dit noemen we self-assignment.

<pre><code>teller = 0
teller = teller + 1
print(teller)
teller += 1
print(teller)
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Je kunt self-assignment gebruiken met alle rekenkundige operatoren (+, -, *, /, //, %, **).

## Oefening: Rekenen met variabelen

Maak twee numerieke variabelen `a` en `b` aan met willekeurige getallen. Tel ze op en sla het resultaat op in een nieuwe variabele `som`. Print vervolgens de som uit.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Via deze oefeningen krijg je een beter begrip van hoe variabelen werken in Python, zowel voor tekst (strings) als voor getallen (numbers).


### Oefening 2.2.2: Berekeningen

Schrijf een programma dat de oppervlakte van een cirkel berekent. Gebruik een variabele `straal` en de constante `pi`. Zoek hiervoor op hoe je pi kan vinden in Python. Je zal hiervoor een bibliotheek moeten importeren. Bibliotheken zullen in een volgende les besproken worden, maar je kan op deze manier al oefenen hoe een echte programmeur via zoekopdrachten bibliotheken en andere oplossingen kan vinden. Print het resultaat met 2 decimalen.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


## Booleans

Een Boolean kan alleen 2 mogelijke waarden hebben: `True` of `False`. Ze vertegenwoordigen dus alle mogelijke variabelen die maar twee waarden kunnen hebben: aan of uit, ja of nee, waar of niet waar, 0 of 1, etc. Merk op dat True of False met een hoofdletter moeten beginnen.

```python
is_python_leuk = True
is_programmeren_moeilijk = False
print(type(is_python_leuk)) # Output: <class 'bool'>
```

### Vergelijkingen
In Python gebruiken we het enkele gelijkheidsteken (`=`) om een waarde toe te kennen aan een variabele. Dit wordt ook wel een assignment genoemd. We gebruiken het dubbele gelijkheidsteken (`==`) om te controleren of twee waarden gelijk zijn aan elkaar. Dit is een vergelijking en het resultaat is een Boolean waarde (`True` of `False`).

Enkele veelgebruikte vergelijkingsoperatoren zijn:

* `==` (gelijk aan)
* `!=` (niet gelijk aan)
* `<` (kleiner dan)
* `>` (groter dan)
* `<=` (kleiner dan of gelijk aan)
* `>=` (groter dan of gelijk aan)

Het resultaat van deze vergelijkingen is altijd een Boolean waarde (`True` of `False`).

<pre><code>
x = 5  # Assignment
y = 5  # Assignment

print(x == y)  # Vergelijking
print(x != y)  # Vergelijking
</pre></code>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Deze vergelijkingsoperatoren kunnen we ook gebruiken bij strings! De rangorde wordt bij strings bepaald door het alfabet: als string1 < string2 betekent dat string1 alfabetisch voor string2 komt. Let op! Hoofdletters worden hierbij voor kleine letters gerekend. Voorspel daarom wat volgende code uitprint: True of False?

<pre><code>
x = "appel"
y = "peer"
z = "Banaan"

print(x <= y)  		# Vergelijking
print(x == "Appel") # Vergelijking
print(x > z)  		# Vergelijking
print(y != "Peer")  # Vergelijking
</pre></code>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>



## Type casting

In Python kun je het datatype van een waarde veranderen met behulp van type casting. Dit is handig wanneer je bijvoorbeeld een getal dat is opgeslagen als een string wilt gebruiken in een berekening, of wanneer je een getal wilt afronden naar een geheel getal.

Hier zijn enkele veelgebruikte type casting functies:

- `int(x)`: converteert x naar een integer (geheel getal).
- `float(x)`: converteert x naar een float (kommagetal).
- `str(x)`: converteert x naar een string (tekst).
- `bool(x)`: converteert x naar een Boolean (True of False).

### Voorbeelden:

```python
getal_als_string = "123"
getal = int(getal_als_string)
print(getal + 5)  # Output: 128

kommagetal = 3.14159
afgerond_getal = int(kommagetal)
print(afgerond_getal)  # Output: 3

leeftijd = 25
leeftijd_als_tekst = str(leeftijd)
print("Ik ben " + leeftijd_als_tekst + " jaar oud.")  # Output: Ik ben 25 jaar oud.
```

**Let op:** Niet alle type casting is altijd mogelijk. Probeer bijvoorbeeld maar eens `int("Hallo")` uit te voeren. Dit zal een foutmelding geven omdat \"Hallo\" niet naar een geheel getal kan worden geconverteerd.
