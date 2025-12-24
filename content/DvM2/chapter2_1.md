# 2.1 Brute Force

## **Brute Force**

### 🔨 Wat is *Brute Force*?

**Brute Force** is de meest directe, maar vaak minst efficiënte
oplossingsstrategie. Het idee is eenvoudig:

> **Probeer alle mogelijke oplossingen en kies de juiste.**
Ofwel: los een probleem op via de meest voor de hand liggende (recht-
toe-recht-aan) methode, meestal door eenvoudigweg de definitie van een
oplossing te gebruiken. Vaak ook: alle mogelijkheden proberen.

### 🧩 Basisconcept

Een brute-force algoritme bestaat meestal uit:

1.  **Genereer alle mogelijke combinaties / oplossingen**
2.  **Test elke mogelijkheid**
3.  **Selecteer de oplossing die voldoet aan de voorwaarden**

Brute force garandeert een correcte oplossing, maar kost vaak veel tijd
bij grote zoekruimtes. Soms is zelfs de snelste computer niet snel genoeg
om alle mogelijkheden van een probleem door te rekenen binnen een aanvaardbare tijd.

### 📌 Waarom is Brute Force toch nuttig?

-   **Eenvoudig te begrijpen**
-   **Altijd correct**
-   **Goede benchmark voor efficiëntere algoritmes**
-   **Geschikt voor kleine inputgroottes**


------------------------------------------------------------------------


# Voorbeelden 

### Voorbeeld 1: GGD van twee getallen

vind de grootste gemene deler GGD(m,n) van twee getallen m en n.
door van alle mogelijke integers ≥ 2 ( en ≤ min(m, n)) te proberen of ze zowel m als n delen.  

``` python
def ggd(m, n):
    ggd = 1
    for k in range(2, min(m, n) + 1):
        if m % k == 0 and n % k == 0:
            ggd = k
    return ggd

print(ggd(644,345))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


(Opmerking: Dit kan veel efficienter door gebruik te maken van het **algoritme van Euclides**, wat zich perfect leent voor een opolossing via **recursie** (zie volgend hoofdstuk)).

### 🔐 Voorbeeld 2: Wachtwoord Raden

![BruteForce2](/images/BruteForce2.png)

In films zien we vaak hoe beveiligde deuren kunnen geopend worden met een beetje elektronica,
die alle mogelijke codes één voor één test. Dit is de brute force. In de praktijk wordt hiertegen bebeiligd door het aantal pogingen dat je mag dien om een code in te geven te beperken tot 3 of 5. Een voorbeeld hiervan is je smartphone. Films zijn daarom grotendeels fictie. Maar stel dat we dat kunnen omzeilen...


Een veel voorkomend probleem is het genereren van alle mogelijke combinaties die je uit twee of meerdere verzamelingen kan maken. Hiervoor heeft men een speciale module gemaakt genaamd `itertools` (hoewel je deze functies ook zelf makkelijk kan schrijven). Itertools laat je toe makkelijk deze productverzameling maken. Hier een voorbeeld hoe dit gebruikt kan worden:

``` python
from itertools import product
 # Neem als voorbeeld deze twee verzamelingen:
colors = ['rood', 'groen']
sizes = ['S', 'M']

 # De productverzameling is de verzameling die alle mogelijke combinaties uit colors x sizes bevat:
combinaties = product(colors, sizes)
print(list(combinaties)) # Output: [('rood', 'S'), ('rood', 'M'), ('groen', 'S'), ('groen', 'M')]

 # Met repeat parameter
 # dice is de verzameling die alle mogelijke uitkomste bevat na 2x gooien met een dobbelsteen:
dice = product([1, 2, 3, 4, 5, 6], repeat=2)
print("Aantal mogelijke worpen:", len(list(dice)))  # 36
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Met deze productverzamelingen kunnen we makkelijk volgend probleem oplossen:   
Stel: een wachtwoord bestaat uit drie karakters, elk gekozen uit
`['a', 'b', 'c']`.

Met brute force probeer je alle **combinaties**. Omdat het maken van combinaties veel voorkomt in Brute Force methoden zullen we hiervoor gebruik maken van de module **itertools** die dit eenvoudig voor ons oplost (al kan je dat zeker zonder doen ook!). Hier een klein voorbeeld wat deze module biedt:

``` python
from itertools import product

def raad_wachtwoord(doel):
    chars = ['a', 'b', 'c']
    for combinatie in product(chars, repeat=3):
        poging = combinatie[0]+combinatie[1]+combinatie[2]
        if poging == doel:
            return poging
        else: 
            print(poging)
    return None

print("wachtwoord is:",raad_wachtwoord("cab"))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Wat zou je moeten veranderen aan het programma als het wachtwoord uit 4 cijfers ['a', 'b', 'c', 'd'] bestond?

### 💰 Voorbeeld 3: Geld teruggeven

Stel je hebt een cassa waarin geld zit. Er zit juist één stuk van 1 en 2 euro in,
en juist één briefje van respectievelijk 5 en 10 euro.  
Maak een routine die nagaat of je een bepaald bedrag kan teruggeven.

De brute force manier zal hier proberen om alle mogelijke combinaties die je kan maken uit [1, 2, 5, 10]
op te tellen, en checkt dan of deze overeenstemt met het terug te geven bedrag.
Om subsets te vinden maken we hier gebruik van de routine `combinations` van itertools.
Deze laat ons toe makkelijk alle mogelijke deelverzamelingen van een verzameling te vinden:

``` python
from itertools import combinations
 # Veronderstel volgende verzameling
numbers = [1, 2, 5, 10]
 # print alle deelverzamelingen met exact 3 elementen: 
for comb in combinations(numbers, 3):
    print(comb)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Hiemee kunnen we makkelijk het probleem van teruggave programmeren:

``` python
from itertools import combinations

def Geef_terug(cassa, bedrag):
    for r in range(len(cassa) + 1):
        for comb in combinations(cassa, r):
            if sum(comb) == bedrag:
                return list(comb)
    return None

print(Geef_terug([1,2,5,10], 16))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>



------------------------------------------------------------------------

# ✏️ Oefeningen

• Moeilijkheidsgraad: ★☆☆☆☆

1.  Genereer via brute force alle 2-cijferige PIN-codes (00 t/m 99) zonder gebruik te maken van itertools.
2.  Herschrijf voorbeeld 2 - GGD - door gebruik te maken van de itertools module.
3.  Zoek een oefening uit vorige hoofdstukken die je zonder het toen te beseffen al hebt opgelost met brute force.


• Moeilijkheidsgraad: ★★☆☆☆

4.  Zoek een woord in een tekst.
5.  Vind alle permutaties van een lijst van drie elementen met `itertools`.
6.  Maak een brute-force functie die controleert of een getal een priemgetal is.

Kun je ook de efficientie van je routines berekenen/meten?


• Moeilijkheidsgraad: ★★★★☆

7.  Puzzel...
![BruteForce](/images/BruteForce.png)

Elke letter stelt een cijfer voor (0, 1, . . . , 9) en verschillende letters corresponderen met verschillende cijfers. Het cijfer 0 komt niet voor als meest
linkse cijfer in een getal. (Dus i.h.b. is D != 0, G != 0 en R != 0.)
Om het makkelijker te maken is gegeven dat D = 5.

los de DONALD + GERALD = ROBERT puzzel op door alle 9! (er was
al gegeven dat D = 5) mogelijke antwoorden te proberen.
