# 6.3 Oefeningen

In dit hoofdstuk ga je oefenen op het bewerken van bestanden. Je kunt de oefeningen uitwerken in een nieuw `.py`-bestand in IDLE of een andere teksteditor. Bewaar deze bestanden in je folder op de desktop. Door de code uit te voeren kun je de output verifiëren en controleren of je oplossingen correct zijn.

---

## Oefening 1: Een bestand maken

- **Moeilijkheidsgraad:** ★☆☆☆☆

Maak in de folder op desktop een folder met naam `bestanden`. Schrijf een programma dat een nieuw bestand genaamd oefening1.txt aanmaakt en er de regel "Dit is mijn eerste regel." in schrijft. Lees daarna het bestand en print de inhoud naar het scherm.


---

## Oefening 2: Zonder klinkers

- **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een **functie** `zonder_klinkers` waaraan twee locaties van tekstbestanden (str) moeten doorgegeven worden. De functie moet de inhoud van het eerste tekstbestand kopiëren naar het tweede tekstbestand, maar waarbij alle klinkers verwijderd worden. 

In onderstaande interactieve sessie gaan we ervan uit dat het tekstbestand oefening2.txt zich in de folder `bestanden` bevindt.

**Voorbeeldoutput:**

```python
>>> print(open('bestanden/oefening2.txt', 'r').read(), end='')
How much wood would a woodchuck chuck
If a woodchuck could chuck wood?
He would chuck, he would, as much as he could,
And chuck as much as a woodchuck would
If a woodchuck could chuck wood.
>>> zonder_klinkers('bestanden/oefening2.txt', 'bestanden/zonderKlinkers.txt')
>>> print(open('bestanden/zonderKlinkers.txt', 'r').read(), end='')
Hw mch wd wld  wdchck chck
f  wdchck cld chck wd?
H wld chck, h wld, s mch s h cld,
nd chck s mch s  wdchck wld
f  wdchck cld chck wd.
```

Maak je eigen versie van het tekstje, run je programma en laat je tekst zonder klinkers lezen door iemand anders.
Meestal blijft deze tekst leesbaar. Klinkers zijn met andere woorden overbodig:
"Ht s vrbzngwkknd h gd nz hrsnn knn mgn mt ntrbrknd nfrmt."

---

## Oefening 3: Woorden tellen

- **Moeilijkheidsgraad:** ★★★☆☆

Een woord in een tekst wordt gedefinieerd als een zo lang mogelijke reeks letters. Alle karakters die geen letter zijn, worden dus beschouwd als scheidingstekens voor woorden. Gevraagd wordt:

Schrijf een **functie** `woorden_splitsen` waaraan de locatie van een tekstbestand (str) moet doorgegeven worden. De functie moet een lijst (list) teruggeven met de opeenvolgende woorden in het gegeven tekstbestand.

Schrijf een **functie** `woorden_tellen` waaraan de locatie van een tekstbestand (str) moet doorgegeven worden. De functie moet een lijst teruggeven, die elk woord in het gegeven tekstbestand afbeeldt op het aantal voorkomens van dat woord in het tekstbestand. De functie mag geen onderscheid maken tussen hoofdletters en kleine letters.

**Voorbeeldoutput:**
```python
>>> woorden_splitsen('data.txt')
['How', 'much', 'wood', 'would', 'a', 'woodchuck', 'chuck', 'If', 'a', 'woodchuck', 'could', 'chuck', 'wood', 'He', 'would', 'chuck', 'he', 'would', 'as', 'much', 'as', 'he', 'could', 'And', 'chuck', 'as', 'much', 'as', 'a', 'woodchuck', 'would', 'If', 'a', 'woodchuck', 'could', 'chuck', 'wood']
>>> woorden_tellen('data.txt')
[['how': 1], ['much', 3], ['wood', 3], ['would', 4], ['a', 4], ['woodchuck', 4], ['chuck', 5], ['if', 2], ['could', 3], ['he', 3], ['as', 4], ['and', 1]]
```


---

## Oefening 4: Geheimschrift

- **Moeilijkheidsgraad:** ★★★★☆

Schrijf een Python-programma dat een geheime boodschap creëert van een bestaand document door een permutatie van de letters door te voeren. Dit noemt **encryptie** en is een eenvoudige vorm van geheimschrift dat moeilijk te ontcijferen valt zonder sleutel! Een voorbeeld van een sleutel kun je zo programmeren:
```python
 # Voorbeeld substitutie-alfabet
origineel = "abcdefghijklmnopqrstuvwxyz"
sleutel   = "qwertyuiopasdfghjklzxcvbnm"
```
Dit betekent dat de letter 'a' moet vervangen worden door 'q', de letter 'b' -> 'w' enzovoort. Elke letter mag slechts één keer voorkomen in de sleutel. Dat zorgt ervoor dat de sleutel omkeerbaar is: vervang je de rol van `origineel` en `vervanging`, dan wordt de tekst weer ontsleuteld!

In onderstaand voorbeeld veronderstellen we dat het bestand `data.txt` bestaat en de uitvoer geschreven dient te worden naar `versleuteld.txt`

**Voorbeeldoutput:**
```python
>>> print(open('data.txt', 'r').read(), end='')
Hello World!
>>> Enigma('data.txt','versleuteld.txt',origineel,sleutel)
>>> print(open('versleuteld.txt', 'r').read(), end='')
Itssg Vgksr!
 # Je kan dit bestand nu veilig sturen naar je vriend(in).
 # Die kan dan de boodschap ontcijferen als volgt:
>>> Enigma('versleuteld.txt','ontcijferd.txt',sleutel,origineel)
>>> print(open('ontcijferd.txt', 'r').read(), end='')
Hello World!
```

Een toestel genaamd `Enigma` werd tijdens de tweede wereldoorlog gebruikt door de Duitsers om berichten te versleutelen. Een groep wetenschappers onder leiding van Alan Turing werkte in Engeland aan een machine om deze codes te breken en slaagde daarin. De ontcijfering van de Enigma wordt vaak aangehaald als een van de grootste prestaties in de Tweede Wereldoorlog die de alliantie de uiteindelijke overwinning zou hebben gebracht. Deze machine die hij bouwde hiervoor leidde tot de ontwikkeling van de computer!

---

## Oefening 5: Decryptie

- **Moeilijkheidsgraad:** ★★★★★

Laat ons nu even in de voetstappen treden van Alan Turing. Op smartschool bevindt zich een document dat werd onderschept van de Duitsers. Schrijf een programma dat dit ontcijfert door alle mogelijke sleutels te testen. (Dit noemt men **Brute force method**, maar meer daarover in de volgende cursus) 

Je mag aannemen dat de sleutels van het type met een vast `Caesarcijfer` zijn. Dit is een eenvoudige versleuteling waarin je elke letter vervangt door een letter die (cyclisch) n posities verder staat in het alfabet. Bv: als je Ceasarcijfer 3 neemt, dan komt dit overeen met de sleutels:
```python
 # Voorbeeld Ceasarcijfer 3:
origineel = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz0123456789"
sleutel   = "DEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz0123456789ABC"
```
Door ook hoodfletters en cijfers te versleutelen bekomen we zo 52 verschillende Ceasarcijfers. Maar dit is niet alles! Telkens als je een cijfer codeert, verhoogt het Ceasarcijfer met één eenheid. Dus als je start met Ceasarcijfer 3, werd de tweede letter gecodeerd met Ceasarcijfer 4 en de derde letter met Ceasarcijfer 5, enzovoort. Gaat het Ceasarcijfer boven de 51, dan wordt het terug op 0 gezet. Zulk mechanisme werd ook in het echte Enigma machine gebruikt!

Hoe weet je nu dat je de correcte sleutel gevonden hebt? Wel, we weten dat de Duitsers in elk bericht wel ergens de tekst "Heil Hitler!" gebruikten... En nu snel ontcijferen! Elke second kost mensenlevens!

