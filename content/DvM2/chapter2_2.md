# 2.2 Recursie

![Recursie](/images/recursie.png)


## 🧩 Recursie in de wiskunde

**Recursie** is een manier om functies te definiëren door ze te beschrijven in termen van **zichzelf**, maar dan voor **kleinere of eenvoudigere gevallen**.

Een recursieve definitie bestaat typisch uit twee delen:
1. **Basisgeval**: het startpunt waarvoor de waarde expliciet gekend is, wat we **beginvoorwaarde(n)** noemen,
2. **Recursiestap**: een regel die het huidige geval herleidt tot een kleiner geval.

### Voorbeeld 1: Faculteit
De faculteit van een natuurlijk getal \(n\) is gedefinieerd als:
- 0! = 1
- 1! = 1
- 2! = 2.1 = 2
- 3! = 3.2.1 = 6
- 4! = 4.3.2.1 = 24
- 5! = 5.4.3.2.1 = 120
- n! = n.(n-1).(n-2)...(2).1 

Je ziet dat de faculteit van een getal snel berekend is als je de faculteit van het voorgaande getal kent:
- 5! = 5 . 4!

Dit is een recusieve berekening van 5!.
De faculteit van een natuurlijk getal \(n\) kunnen we algemeen recursief gedefinieren als:
- 0! = 1  								(beginvoorwaarde)
- n! = n . (n-1)! voor \(n <= 1\)       (recursiestap)

Recursie wordt veel gebruikt in de wiskunde, onder andere bij
getaltheorie, combinatoriek en bewijstechnieken zoals **inductie**.

###   Voorbeeld 2: Fibonacci

![Fibonacci](/images/Fibonacci.png)


In zijn boek Liber Abaci stelde Fibonacci, een Italiaans wiskundige uit de 13e eeuw, een eenvoudige vraag over de groei van een konijnenpopulatie. Wat als een konijnenpaar elke maand een nieuw paar voortbrengt, en die jongen na één maand zelf vruchtbaar worden? Maand na maand bleek het aantal paren te groeien volgens een vast patroon. Elk nieuw getal ontstond uit de som van de twee voorgaande: 

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

Deze rij kan je ook makkelijk recursief defniniëren als volgt:
- F(0) = 0  (1ste beginvoorwaarde)
- F(1) = 1  (2de  beginvoorwaarde)
- F(n) = F(n-1) + F(n-2) voor n >= 1  (recursiestap)

Wat begon als een gedachtenexperiment groeide uit tot een van de beroemdste reeksen in de wiskunde. De rij dook later op in onverwachte plaatsen: in de spiralen van zonnebloemen, de rangschikking van bladeren aan een stengel en zelfs in kunst en architectuur. Alsof de natuur zelf dezelfde regels volgde die Fibonacci ooit op papier zette.


###   Voorbeelden: Fractalen

Fractalen zijn meetkundige vormen die ontstaan door het herhaald toepassen van een recursieve regel. Een opvallend kenmerk van fractalen is zelfgelijkheid: elk deel van de figuur lijkt, ongeacht de schaal, op het geheel. Daardoor vertonen fractalen een oneindige complexiteit, ook al zijn ze opgebouwd uit simpele stappen.

Een klassiek voorbeeld is de sneeuwvlok van Koch. Deze fractaal ontstaat door te beginnen met een gelijkzijdige driehoek. Op elke zijde wordt het middelste derde deel vervangen door twee lijnstukken die samen een nieuwe, kleinere gelijkzijdige “punt” vormen. Deze bewerking wordt steeds opnieuw toegepast op alle ontstane zijden. Na elke stap wordt de rand ingewikkelder, terwijl de vorm herkenbaar blijft.

![Koch](/images/SnowflakeKoch.png)

De sneeuwvlok van Koch illustreert een verrassend idee uit de wiskunde: de omtrek van de figuur groeit zonder grens, terwijl de ingesloten oppervlakte eindig blijft. Fractale figuren zoals deze spelen een belangrijke rol in de moderne wiskunde en helpen bij het beschrijven van natuurlijke structuren zoals kustlijnen, wolken en sneeuwkristallen.


##  🧩  Recursie in programmeren

**Recursie** in het programmeren betekent dat een functie **zichzelf aanroept** 
om een kleiner deel van hetzelfde probleem op te lossen.
Dit werkt wanneer een probleem een **natuurlijk kleiner subprobleem** bevat.


Elke recursieve functie heeft twee belangrijke elementen:

1.  Als de **beginvoorwaarde** aangeroepen wordt kan de recursie stoppen.
2.  **Recursieve stap** -- hoe wordt het probleem kleiner gemaakt?


In pseudocode kun je een recursief programma voorstellen als volgt:

``` python
def functie(n):
    if n is klein genoeg:  # beginvoorwaarde
        return "oplossing beginvoorwaarde"
    return "berekening met functie(n - 1)"  # recursieve stap
```

Om te verhinderen dat recursie oneindig diep doorgaat, en het programma vastloopt, 
is er een **limiet** ingesteld in python aan het aantal recursieve aanroepen.  
Je kan deze limiet opvragen als volgt:

``` python
import sys
print(sys.getrecursionlimit())
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


------------------------------------------------------------------------

## 📌 Klassieke Voorbeelden

### Voorbeeld 1: **Faculteit (n!)**

``` python
def faculteit(n):
    if n <= 1:     # randvoorwaarden: 
        return 1   # 0! = 1. en 1! = 1
    return n * faculteit(n - 1)

for i in range(10):
	print(faculteit(i))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Voorbeeld 2: **Fibonacci**

``` python
def fib(n):
    if n <= 1: 		# randvoorwaarden:
        return n	# fib(0) = 0 en fib(1) = 1
    return fib(n - 1) + fib(n - 2)
	
for i in range(10):
	print(fib(i))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


###  Voorbeeld 3: **Fractalen** 🌿

Recursie is ideaal om fractalen te tekenen.
We maken hier gebruik van de **module turtle** om lijnen te tekenen.

``` python
import turtle

def boom(lengte, niveau):
    if niveau == 0:
        return
    turtle.forward(lengte)
    turtle.right(30)
    boom(lengte * 0.7, niveau - 1)
    turtle.left(60)
    boom(lengte * 0.7, niveau - 1)
    turtle.right(30)
    turtle.backward(lengte)

turtle.left(90)  # Boom groeit omhoog
turtle.speed(5)  # traag = 1 - 10 = snelst 
boom(100, 5)     # Lengte 100, 5 recursieniveaus
turtle.done()
```

Run dit in IDLE. Als alles goed gaat, moet je een boomstructuur als volgt zien:

![Boom](/images/RecursieveBoom.png)

Andere gekende voorbeelden van recursieve figuren zijn:
- sierpinski driehoek,
- sneeuwvlok van Koch (zie hierboven)
- Hilbert curve
- Pythagoras boom
- Draak curve
- Varenblad van Barnsley
Je kan hiervoor makkelijk AI om een voorbeeldprogramma vragen geschreven met turtle.



------------------------------------------------------------------------


# ✏️ Oefeningen

• Moeilijkheidsgraad: ★☆☆☆☆

1.  Schrijf een recursieve functie die de som `1 + ... + n` berekent.
2.  Schrijf een functie die recursief telt hoeveel cijfers een getal heeft.
3.  Schrijf een recursieve functie `macht(a, n)` die `a^n` berekent, waarbij n een natuurlijk getal is.


• Moeilijkheidsgraad: ★★☆☆☆

4.  Print recursief alle getallen van `n` naar `0`.
5.  Tel recursief hoe vaak een element in een lijst voorkomt (zonder count() te gebruiken)
6.  Los volgende recursieformule op: `F(n) = 1+ F(n//2)`, met beginvoorwaarde dat `F(1) = 0`.
    Toon aan dat de oplossing expliciet kan geschreven worden als de logarimische functie: F(n) = ^2log(n)
	
Twee grafieken kan je makkelijk als volgt plotten door gebruik te maken van de module **matplotlib**:

``` python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4]
y1 = [0, 1, 4, 9, 16]
y2 = [0, 1, 2, 3, 4]

plt.plot(x, y1)
plt.plot(x, y2)

plt.show()
```


• Moeilijkheidsgraad: ★★★★☆

7.  Schrijf een recursieve functie `ggd(a, b)` die gebruik maakt van de stelling van Euclides.

Deze stelling stelt dan de grootste gemene deler (GGD) van twee getallen a en b 
ook een deler is van de rest bij deling van a door b. Recursief kan je dat zo wiskundig definiëren:

![GGD](/images/GGD.png)


8. Probeer zelf wat variaties op voorbeeld 3 - de fractale boom te maken.  
   Hier zijn alvast enkele van mijn probeersels te zien:

![Boom2](/images/MeerBomen.png)


• Moeilijkheidsgraad: ★★★★★

9.  De torens van Hanoi.

De Torens van Hanoi is een puzzel die gebruik maakt van drie palen, die A, B, en C genoemd worden. 
Paal A bevat een stapel schijven van verschillende grootte; de schijven zijn genummerd volgens hun grootte. 
De kleinste schijf is 1, de volgende 2, de volgende 3, etcetera. De grootste schijf is . 
Typische waardes voor zijn 4 en 5;
De schijven zijn op paal A gestapeld volgens hun grootte, met de grootste schijf onderaan en de kleinste bovenaan. 
Je moet nu alle schijven verplaatsen van paal A naar paal C, waarbij je vier regels in acht moet nemen:

1. je mag mag maar één schijf per keer verplaatsen;
2. je mag alleen maar schijven verplaatsen tussen de palen;
3. je mag alleen een schijf verplaatsen die bovenop een stapel ligt,  
   en je kunt hem alleen verplaatsen naar de top van een andere stapel;
4. je mag nooit een schijf plaatsen op een schijf die kleiner is.

![Hanoi](/images/Hanoi.png)

Opgave

Schrijf een functie hanoi die deze puzzel oplost voor een willekeurige waarde van n. 
De funtie met de oplossing printen als een recept, met regels als

    Schijf 1 van A naar C.

Druk aan het einde van het recept het aantal benodigde stappen af.

`Tip`

Voor een recursieve oplossing, bedenk het volgende: Stel dat je de puzzel moet oplossen waarbij de grootste schijf 10 is. Dit is niet moeilijk als je hem op kunt lossen voor grootte 9. Je gebruikt dan de procedure voor grootte 9 om de bovenste 9 schijven te verplaatsen van paal A naar paal B (zie tekening hierboven), je verplaatst vervolgens schijf 10 van paal A naar paal C, en tenslotte gebruik je de procedure voor grootte 9 om de overgebleven 9 schijven te verplaatsen van paal B naar paal C. Maar hoe los je de puzzel op met de grootste schijf 9? Dat is niet moeilijk als je hem kunt oplossen voor grootte 8… Je kunt je voorstellen waar dit heengaat. Je kunt de complexiteit van het probleem stap-voor-stap reduceren, totdat je stelt “het is gemakkelijk om het probleem op te lossen voor grootte 2 als je het kunt oplossen voor grootte 1.” Oplossen voor grootte 1 is triviaal: je verplaatst gewoon de schijf naar de paal waar hij heen moet.

Voorbeeld:
```bash
>>> hanoi(4,"A","B","C")
Schijf 1 van A naar B
Schijf 2 van A naar C
Schijf 1 van B naar C
Schijf 3 van A naar B
Schijf 1 van C naar A
Schijf 2 van C naar B
Schijf 1 van A naar B
Schijf 4 van A naar C
Schijf 1 van B naar C
Schijf 2 van B naar A
Schijf 1 van C naar A
Schijf 3 van B naar C
Schijf 1 van A naar B
Schijf 2 van A naar C
Schijf 1 van B naar C
```



`