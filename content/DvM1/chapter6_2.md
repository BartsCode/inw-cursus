# 6.2 Bewerken van bestanden


## Lezen van bestanden ("r")

### read()

De functie `read()` leest het hele bestand in één keer en returnt dit als één string:

```python
fp = open( "bestand.txt" )
tekst = fp.read()
fp.close()
print( tekst )
```

### readline()

Om een tekstbestand regel voor regel te lezen, kun je de readline() methode gebruiken. Deze methode leest tekens uit het bestand, beginnend bij de pointer, tot aan en inclusief het volgende “newline” ("\n") teken. Deze tekens worden als een string geretourneerd. Als je aan het einde van het bestand bent en je probeert een nieuwe regel te lezen, krijg je een lege string terug.

```python
fp = open( "bestand.txt" )
while True:
    buffer = fp.readline()
    if buffer == "":
        break
    print( buffer )
fp.close()
```

Als je de code hierboven uitvoert, zul je zien dat er een lege regel wordt getoond tussen ieder van de regels die uit het bestand gelezen is. Dit komt omdat de readline() methode een string retourneert met de tekens die gelezen zijn, **inclusief het newline teken**. Dus als de buffer wordt afgedrukt, wordt ook het newline teken afgedrukt. Wat zou je minimaal aan de code moeten veranderen om deze extra lege regel niet te hebben?

### readlines()

Vergelijkbaar met de readline() methode is de readlines() methode. readlines() leest alle regels in een tekstbestand, en retourneert ze als een list van strings. De strings bevatten de newline tekens.

```python
fp = open( "bestand.txt" )
buffer = fp.readlines()
for line in buffer:
    print( line, end="" )
fp.close()
```
`
Als je de code hierboven uitvoert, zie je niet de lege regels tussen de tekstregels. Dat komt omdat ik aan de aanroep van de print() functie het end="" argument heb toegevoegd, zodat print() niet zelf naar een nieuwe regel gaat na het afdrukken.


## Schrijven van bestanden ("w")

### write()

Om iets te schrijven naar een tekstbestand, gebruik je de `write()` methode met als argument een string die je wilt schrijven naar het bestand. Let op: **bestaat het bestand reeds waarnaar je wil schrijven, dan wordt dat bestand overschreven!**. Wens je dat niet, gebruik dan `append`.

 De code hieronder vraagt je om een paar strings in te geven, en schrijft ze dan naar een bestand. Het programma stopt met het vragen om strings als je een lege string ingeeft.

```python
fp = open( "test.txt", "w" )
while True:
    tekst = input( "Geef een regel tekst: " )
    if tekst == "":
        break
    fp.write( tekst )
fp.close()
```

Copier deze code in een python-bestand en test het met IDLE. Als je hebt gedaan wat ik vroeg, zie je dat alle tekst die je hebt ingegeven in het bestand staat, maar dat alles op één lange regel staat. Er staan geen newline tekens in het bestand. De reden is dat je newline tekens expliciet moet schrijven als je ze in het bestand wilt hebben. Als je input van het toetsenbord leest via de input() functie, stop je weliswaar met input verstrekken door op Enter te drukken, maar dat heeft dan niet als resultaat dat er een newline teken in de ingegeven string staat. Dus je moet dat newline teken zelf toevoegen als je die nieuwe regels wilt zien.

Pas de code hierboven aan zodat er een newline teken in het bestand komt te staan na iedere ingegeven regel.

### writelines()

Je kunt een list van strings in één keer naar een bestand schrijven, via de `writelines()` methode die de list als argument krijgt. Als je newline tekens ("/n") tussen de strings wilt, moet je die expliciet opnemen aan het einde van iedere string in de list. 

```python
tekst = ["Hallo iedereen, \n",
		 "Hoe gaat het thuis \n",
		 "Met mij gaat alles goed. \n"]

fp = open( "brief.txt", "w" )
fp.writelines(tekst)
fp.close()
```

p.s. Er is geen writeline() methode. writeline() zou precies hetzelfde zijn als write(), dus hij is overbodig.


## Toevoegen aan bestanden ("a")

“Toevoegen”(Engels: “appending”) houdt in dat er geschreven wordt aan het einde van een bestaand bestand. Als je een bestand opent om toe te voegen, wordt de inhoud niet verwijderd, maar wordt de filepointer geplaatst aan het einde van het bestand, waar je dan nieuwe data mag wegschrijven. Indien het bestand dat je wil openen nog niet bestond, leidt dat niet tot een foutmelding, maar wordt een nieuw leeg bestand met de opgeven naam gecreëerd. 

De code hieronder toont eerst de inhoud van “brief.txt”. Daarna wordt de gebruiker gevraagd om regels in te geven die aan het bestand worden toegevoegd. Tenslotte wordt de nieuwe inhoud van het bestand getoond. Ik heb dit programma iets beter gestructureerd dan ik hiervoor steeds deed, door gebruik van een constante voor de bestandsnaam en middels een functie voor het tonen van de bestandsinhoud.

```python
NAAM = "brief.txt"

def tooninhoud( bestandsnaam ):
    fp = open( bestandsnaam )
    print( fp.read() )
    fp.close()

tooninhoud( NAAM )

fp = open( NAAM, "a" )
while True:
    tekst = input( "Geef een regel tekst: " )
    if tekst == "":
        break
    fp.write( tekst+"\n" )
fp.close()

tooninhoud( NAAM )
```
