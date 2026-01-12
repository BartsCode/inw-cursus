# 5.1 Functies

In de vorige hoofdstukken hebben we code geschreven die stap voor stap wordt uitgevoerd. Naarmate onze programma's complexer worden, merken we dat we soms dezelfde stukken code meerdere keren moeten schrijven. Ook kunnen lange programma's onoverzichtelijk worden. Functies bieden hier een oplossing!

## Wat zijn Functies?

Een functie is een **code blok** dat een specifieke taak uitvoert en een naam heeft. Je kunt een functie zien als een mini-programma binnen je hoofdprogramma. Het grote voordeel is dat je dit code blok kunt **hergebruiken** door simpelweg de naam van de functie aan te roepen. Dit maakt je code:

- **Modulair:** Je kunt complexe problemen opdelen in kleinere, beheersbare taken (functies).
- **Herbruikbaar:** Je hoeft dezelfde logica niet telkens opnieuw te schrijven (DRY - Don't Repeat Yourself).
- **Leesbaarder:** Goed benoemde functies maken duidelijk wat een stuk code doet.
- **Onderhoudbaar:** Als je een aanpassing moet maken in de logica, hoef je dit maar op één plek te doen (in de functie).

## Een Functie Definiëren

In Python definieer je een functie met het `def` sleutelwoord, gevolgd door de functienaam, haakjes `()`, en een dubbele punt `:`. De code die bij de functie hoort, moet ingesprongen zijn.

```python
def groet():
  print("Hallo daar!")
```

Dit definieert een functie genaamd `groet`. De code binnen de functie (`print("Hallo daar!")`) wordt pas uitgevoerd als we de functie aanroepen.

## Een Functie Aanroepen

Om de code in een functie uit te voeren, roep je de functie aan door haar naam te typen gevolgd door haakjes `()`.

```python
def begroet():
  print("Hallo daar!")

# Roep de functie aan
begroet()
begroet() # Je kunt de functie meerdere keren aanroepen
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Let er wel op dat de definitie steeds voor de anroep moet komen zodat de functie gekend is door de computer voor die gebruikt wordt.

## Parameters en Argumenten

Functies kunnen gegevens ontvangen om mee te werken. Deze gegevens geef je mee via **parameters** (variabelen tussen de haakjes bij de definitie) en **argumenten** (de waarden die je meegeeft bij het aanroepen).

```python
def begroet_persoon(naam): # 'naam' is een parameter
  print(f"Hallo, {naam}!")

begroet_persoon("Alice") # "Alice" is een argument
begroet_persoon("Bob")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Een functie kan meerdere parameters hebben, gescheiden door komma's.

```python
def tel_op(getal1, getal2):
  som = getal1 + getal2
  print(f"De som van {getal1} en {getal2} is {som}")

tel_op(5, 3)
tel_op(10, -2)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Return Waarden

Functies kunnen niet alleen acties uitvoeren (zoals printen), maar ook een resultaat **teruggeven** aan het deel van het programma dat de functie aanriep. Dit doe je met het `return` sleutelwoord.

```python
def tel_op(getal1, getal2):
  som = getal1 + getal2
  return som # Geef de berekende som terug

resultaat = tel_op(10, 5) # Vang de return waarde op in een variabele
print(f"Het resultaat is: {resultaat}")
print(f"Nog een berekening: {tel_op(1, 2)}") # Gebruik de return waarde direct
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Zodra een `return` statement wordt uitgevoerd, stopt de functie onmiddellijk en wordt de opgegeven waarde teruggestuurd. Een functie kan ook meerdere waarden teruggeven. Je scheid die dan door een komma.

```python
def bereken_omtrek_en_oppervlakte(breedte, hoogte):
  omtrek = 2 * (breedte + hoogte)
  oppervlakte = breedte * hoogte
  return omtrek, oppervlakte # Geeft twee waarden terug

afmetingen = bereken_omtrek_en_oppervlakte(5, 4)
print(f"Omtrek en oppervlakte: {afmetingen}") # Output: Omtrek en oppervlakte: (18, 20)
print(f"Omtrek: {afmetingen[0]}")
print(f"Oppervlakte: {afmetingen[1]}")

# Je kunt de waarden ook direct uitpakken
omtrek, opp = bereken_omtrek_en_oppervlakte(10, 2)
print(f"Omtrek: {omtrek}, Oppervlakte: {opp}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Scope van Variabelen

Variabelen die binnen een functie worden gedefinieerd, zijn **lokaal** voor die functie. Ze bestaan alleen binnen die functie en zijn niet toegankelijk van buitenaf. Variabelen die buiten alle functies worden gedefinieerd, zijn **globaal**.

Om dit te verstaan kun je de analogie maken met een berekening maken op papier. Stel je bent het hoofdprogramma aan het berekenen op een stuk papier. Als je een aanroep van een functie tegenkomt, dan komt dat overeen met het maken van een tussenberekening op een kladblad. Hierbij kun je steeds gebruik maken van 'globale' variabelen die op je net blad staan. Eens de berekening van de functieaanroep is voltooid schrijf je enkel de uitkomsten hiervan op het net blad - dit zijn de return waarden. De rest van het kladblad, inclusief de waarden van de lokale variabelen, wordt weggegooid. 

Het zelfde gebeurt in het geheugen van de computer: eens de deelberekening van een functie-aanroep is voltooid wordt dat deel van het geheugen gewist. Enkel de return-variabelen worden doorgegeven via een toewijzing aan de variabele(n) die voor het gelijkheidsteken staat/staan. Alle andere informatie, zoals de waarden van locale variabelen wordt daarna gewist.

```python
globale_var = "Ik ben globaal"

def mijn_functie():
  lokale_var = "Ik ben lokaal"
  print(lokale_var)
  print(globale_var) # Globale variabelen zijn wel toegankelijk binnen functies

mijn_functie()

print(globale_var)
# print(lokale_var) # Dit zou een NameError geven, lokale_var bestaat hier niet
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Het is over het algemeen beter om gegevens aan functies door te geven via parameters en resultaten terug te geven via `return` dan om te vertrouwen op globale variabelen.

## Docstrings

Het is een goede gewoonte om je functies te documenteren met een **docstring**. Dit is een string die direct na de `def` regel komt en beschrijft wat de functie doet.

```python
def tel_op(getal1, getal2):
  """
  Deze functie telt twee getallen bij elkaar op.

  Args:
    getal1: Het eerste getal.
    getal2: Het tweede getal.

  Returns:
    De som van getal1 en getal2.
  """
  som = getal1 + getal2
  return som

# Docstrings kunnen vaak automatisch worden weergegeven door programmeertools
help(tel_op) # In een Python interpreter
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>
