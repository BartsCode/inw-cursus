# 2.4 Greedy Algoritmen (Gretig)

## 🎯 Wat is een *Greedy algoritme*?

Een **greedy algoritme** (of *gretig algoritme*) bouwt stap voor stap
een oplossing op door **telkens de lokaal optimale keuze** te maken, in
de hoop dat deze leidt tot een **globaal optimale oplossing**.

Kenmerkend:

-   Op elk moment kies je wat *nu* het beste lijkt
-   Geen terugkijken of heroverwegen
-   Vaak zeer efficiënt (meestal O(n log n) of beter)
-   Werkt niet voor elk probleem, maar **als het werkt, is het snel én simpel**

------------------------------------------------------------------------

### 🧩 Basisidee

1.  Bepaal een **greedy-strategie** (hoe kies je lokaal de beste optie?).
2.  Pas deze strategie toe op elke stap, zonder terug te komen op vroegere keuzes.
3.  Eindig met een volledige oplossing.

Greedy-algoritmen zijn elegant, snel en krachtig --- mits het probleem ervoor geschikt is!

------------------------------------------------------------------------

# 💰 Voorbeeld: *Het Wisselgeldprobleem*

Gegeven een bedrag en beschikbare munten, geef terug met **zo weinig mogelijk munten**.

Voor het **Europese muntsysteem** werkt een greedy-aanpak perfect:

Strategie: Neem telkens de **grootste beschikbare munt** die niet groter is dan het resterende bedrag.

### ➤ Python-implementatie

``` python
def wisselgeld(bedrag, munten):
    resultaat = []
    for munt in sorted(munten, reverse=True):
        while bedrag >= munt:
            bedrag -= munt
            resultaat.append(munt)
    return resultaat

 # Voorbeeld
munten = [1, 2, 5, 10, 20, 50]
print(wisselgeld(93, munten))
 # Output: [50, 20, 20, 2, 1]
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### 📌 Opmerking: Greedy werkt hier omdat...

Het Europese muntsysteem is **canoniek**, wat betekent dat greedy altijd de optimale oplossing geeft.
In andere landen (bv. VS) werkt greedy niet altijd!

------------------------------------------------------------------------


# Voorbeeld: Dijkstra's algoritme

— Edsger Dijkstra, in an interview with Philip L. Frana, Communications of the ACM, 2001[5]:

"Wat is in het algemeen de kortste manier om van Rotterdam naar Groningen te reizen: van een gegeven stad naar een andere gegeven stad. Het is het algoritme voor het kortste pad, dat ik in ongeveer twintig minuten heb ontworpen. Op een ochtend was ik in Amsterdam aan het winkelen met mijn jonge verloofde en, moe, gingen we op een cafeterras zitten om een kop koffie te drinken. Terwijl ik daar zat, dacht ik na over de vraag of ik dit kon doen, en toen ontwierp ik het algoritme voor het kortste pad. Zoals ik al zei, het was een uitvinding van twintig minuten. In feite werd het pas in 1959 gepubliceerd, drie jaar later. De publicatie is nog steeds goed leesbaar; ze is zelfs behoorlijk mooi. Een van de redenen waarom ze zo mooi is, is dat ik haar heb ontworpen zonder potlood en papier. Later leerde ik dat een van de voordelen van ontwerpen zonder potlood en papier is dat je bijna gedwongen wordt om alle vermijdbare complexiteit te vermijden. Uiteindelijk werd dat algoritme, tot mijn grote verbazing, een van de hoekstenen van mijn bekendheid."

Idee van Dijkstra in het kort:

![Dijkstra](/images/Dijkstra.gif)

We zoeken de kortste afstand van één startknoop naar alle andere knopen

We houden bij:

- afstand[i] → huidige kortste afstand naar knoop i

- bezocht[i] → of knoop i al definitief is verwerkt

Elke stap:

- Kies de niet-bezochte knoop met de kleinste afstand

- Werk de afstanden van zijn buren bij


Implementatie in Python. Als voorbeeld implementeren we bovenstaande graaf

``` python
 # We hernummeren knopen: 0, 1, 2, ... , 5 
 # De graaf kan voorgesteld worden door een lijst van koppels:
 # Het nulde element in het koppel is de nummer van de buur,
 # Het eerste element in het koppel is de afstand tot de buur.

graaf = [
    [[1, 7], [2,  9], [5,14]],   		# buren van knoop 0
    [[0, 7], [2, 10], [3,15]],          # buren van knoop 1
    [[0, 9], [1, 10], [3, 11], [5, 2]],	# buren van knoop 2
    [[1,15], [2, 11], [4, 6]], 		# buren van knoop 3
    [[3, 6], [5, 9]], 				# buren van knoop 4
    [[0,14], [2, 2], [4, 9]] 			# buren van knoop 5
]


 # Implementatie van Dijkstra'zs algoritme:
def dijkstra(graaf, start):
    n = len(graaf)

    # Afstanden (oneindig groot getal)
    afstand = [float("inf")] * n
    afstand[start] = 0

    # Bezochte knopen
    bezocht = [False] * n

    for _ in range(n):
        # 1. Zoek knoop met kleinste afstand die nog niet bezocht is
        min_afstand = float("inf")
        huidige = -1

        for i in range(n):
            if not bezocht[i] and afstand[i] < min_afstand:
                min_afstand = afstand[i]
                huidige = i

        # Geen bereikbare knoop meer
        if huidige == -1:
            break

        # 2. Markeer als bezocht
        bezocht[huidige] = True

        # 3. Werk afstanden van buren bij
        for buur, gewicht in graaf[huidige]:
            nieuwe_afstand = afstand[huidige] + gewicht
            if nieuwe_afstand < afstand[buur]:
                afstand[buur] = nieuwe_afstand

    return afstand
	
	
 # Voorbeeldgebruik
print(dijkstra(graaf, 0))
 # [0, 7, 9, 20, 20, 11]
	
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


------------------------------------------------------------------------

# ✏️  Oefeningen

• Moeilijkheidsgraad: ★☆☆☆☆

1. Pas het wisselgeldprogramma aan zodat het ook **het aantal munten** teruggeeft.

2. Los volgende graaf op en vind de korste afstanden om van knoop 0 naar een andere knoop te gaan

![Dijkstra](/images/Dijkstra.png)

• Moeilijkheidsgraad: ★★☆☆☆

3. Op smartschool vind je een implementatie van Dijksta's algoritme om labyrinten op te lossen.
   Probeer dit programma uit en los daarna volgende vragen op:
   - Wat zijn de knooppunten in deze graaf?
   - Wat zijn de buren van elk knooppunt, en waarom kan het algoritme niet schuin bewegen?
   - Hoe zou je ervoor kunnen zorgen dat het algoritme ook schuine bewegingen toelaat?
   - Zijn de oplossingen van de paden hier uniek?

• Moeilijkheidsgraad: ★★★★★

4. Pas bovenstaand algoritme van Dijkstra aan zodat het programma teruggeeft HOE je van a naar b kan gaan.  
   Hiervoor zul je naast de huidige implementatie ook steeds moeten noteren lans welke **buur** de kortste weg werd bekomen. Als voorbeeld:
   
   `dijkstra(graaf, 0, 4)` genereert het kortste pad om van knooppunt 0 naar knooppunt 4 te gaan.
   Bij de graaf in het probleem levert dit:
   
   `dijkstra(graaf, 0, 4) = [0,2,5,4]` of van node nul ga je naar 2, dan naar 5 en zo naar 4.
   
   gebruik dit op het kortste pad tussen knoop 0 en knoop 12 te vinden in oefening 2.
   
   
   

------------------------------------------------------------------------


