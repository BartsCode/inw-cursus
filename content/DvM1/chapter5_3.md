# 5.3 Modules importeren

In de vorige sectie hebben we gezien hoe we code kunnen organiseren en hergebruiken met functies. Maar wat als we code willen hergebruiken tussen verschillende programma's? Of als we gebruik willen maken van nuttige code die anderen al geschreven hebben? Hiervoor gebruiken we **modules**.

## Wat zijn Modules?

Een module is een bestand met Python-code (meestal met de extensie `.py`) dat functies, variabelen en en meer kan bevatten. Je kunt een module importeren in je eigen programma om de code ervan te gebruiken, zonder dat je alles zelf hoeft te schrijven. Dit maakt het mogelijk om:

- **Code te delen** tussen verschillende projecten.
- **Bestaande oplossingen** te gebruiken voor veelvoorkomende problemen.
- Je eigen programma's **overzichtelijker** te maken door code in aparte bestanden te plaatsen.

Python heeft een uitgebreide standaardbibliotheek met ingebouwde modules, zoals `math` voor wiskundige functies, `random` voor willekeurige getallen en `datetime` voor datum- en tijdoperaties. Daarnaast zijn er duizenden externe modules beschikbaar die je kunt installeren.

## Een Module Importeren

Je kunt een module importeren met het `import` statement. Hierdoor krijg je toegang tot alle functies en variabelen in die module via de modulenaam.

```python
import math

 # Gebruik een functie uit de math module
wortel = math.sqrt(25)
print(f"De wortel van 25 is {wortel}")

 # Toegang tot een constante
print(f"De waarde van pi is {math.pi}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Je kunt ook specifieke onderdelen uit een module importeren met `from ... import ....` Dit kan handig zijn als je maar een paar functies nodig hebt:

```python
from math import sqrt, pi

 # Nu kunnen we sqrt en pi direct gebruiken zonder 'math.' voorvoegsel
wortel = sqrt(9)
print(f"Wortel van 9 is {wortel}")
print(f"Pi is {pi}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


## Externe Modules Installeren met pip

Naast de standaardbibliotheek kun je ook externe modules gebruiken. Deze worden niet automatisch meegeleverd met Python, maar je kunt ze eenvoudig installeren met pip. Pip is het pakketbeheersysteem van Python en wordt meestal meegeleverd als je Python installeert.

Om een externe module te installeren, open je een terminal (Command Prompt op Windows, Terminal op macOS/Linux) en voer je het volgende commando uit:

```bash
pip install module_naam
```
(opmerking: op macOS dien je `pip3` te gebruiken in plaats van `pip`) 
Bijvoorbeeld, om de populaire module matplotlib te installeren (voor het maken van grafieken), typ je:

```bash
pip install matplotlib
```
Na de installatie kun je de module gewoon in je Python-code importeren:

```python
from matplotlib import pyplot

 # Coördinaten van een figuur
x = [0, 2, 1, 0, -1, -2, 0]
y = [0, 2, 3, 2,  3,  2, 0]

 # Plot
pyplot.plot(x, y)
pyplot.axis("equal")   # gelijke schaal
pyplot.show()
```
Copieer deze code in een .py bestand en run dit bijvoorbeeld met IDLE. **DOEN!**

## Een Eigen Module Maken

Je kunt ook zelf een module maken door een Python-bestand te schrijven en het in een ander bestand te importeren. Stel je hebt een bestand mijn_module.py:

```python
 # mijn_module.py
def groet(naam):
    return f"Hallo, {naam}!"

def kwadraat(getal):
    return getal ** 2
```

Stel nu dat je dit bestand wil importeren in een ander bestand,
dan moet je deze module **in dezelfde map te bewaren** als het Python-script dat de module importeert. In een ander bestand kun je deze module importeren zoals we voordien reeds zagen, bijvoorbeeld als volgt:

```python
import mijn_module

print(mijn_module.groet("Anna"))
print(f"Het kwadraat van 7 is {mijn_module.kwadraat(7)}")
```

## Samenvatting

Modules zijn een krachtig hulpmiddel om code te organiseren en te hergebruiken. Je kunt gebruikmaken van de uitgebreide standaardbibliotheek, externe modules installeren met pip, en zelfs je eigen modules maken. Door modules te gebruiken, houd je je code overzichtelijk en profiteer je van het werk van andere ontwikkelaars.