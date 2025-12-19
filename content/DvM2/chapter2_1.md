# 2.1 Brute Force

## **Brute Force**

### 🔨 Wat is *Brute Force*?

**Brute Force** is de meest directe, maar vaak minst efficiënte
oplossingsstrategie.\
Het idee is eenvoudig:

> **Probeer alle mogelijke oplossingen en kies de juiste.**
Ofwel: los een probleem op via de meest voor de hand liggende (recht-
toe-recht-aan) methode, meestal door eenvoudigweg de definitie van een
oplossing te gebruiken. Vaak ook: alle mogelijkheden proberen.

Brute force garandeert een correcte oplossing, maar kost vaak veel tijd
bij grote zoekruimtes. 



------------------------------------------------------------------------

# 🧩 Basisconcept

Een brute-force algoritme bestaat meestal uit:

1.  **Genereer alle mogelijke combinaties / oplossingen**\
2.  **Test elke mogelijkheid**\
3.  **Selecteer de oplossing die voldoet aan de voorwaarden**

------------------------------------------------------------------------


# Voorbeelden 

Voorbeeld 1: vind de grootste gemene deler GGD(m,n) van twee getallen m en n.
door van alle mogelijke integers ≥ 2 ( en ≤ min(m, n)) te proberen of ze zowel m als n delen. 


Voorbeeld 2: 

![BruteForce](/images/BruteForce.png)

Elke letter stelt een cijfer voor (0, 1, . . . , 9) en verschillende letters corresponderen met verschillende cijfers. Het cijfer 0 komt niet voor als meest
linkse cijfer in een getal. (Dus i.h.b. is D != 0, G != 0 en R != 0.)
Om het makkelijker te maken is gegeven dat D = 5.

los de DONALD + GERALD = ROBERT puzzel op door alle 9! (er was
al gegeven dat D = 5) mogelijke antwoorden te proberen.



# 🔐 Eenvoudig Voorbeeld: Wachtwoord Raden

Stel: een wachtwoord bestaat uit drie karakters, elk gekozen uit
`['a', 'b', 'c']`.

Met brute force probeer je **alle combinaties**:

``` python
import itertools

def raad_wachtwoord(doel):
    chars = ['a', 'b', 'c']
    for combinatie in itertools.product(chars, repeat=3):
        poging = ''.join(combinatie)
        if poging == doel:
            return poging
    return None

print(raad_wachtwoord("cab"))
```

------------------------------------------------------------------------

# 🎲 Voorbeeld: Getallen Optellen

Zoek een subset van getallen die samen een target bereiken.

Brute force probeert **alle subsets**:

``` python
from itertools import combinations

def brute_subset_sum(lst, target):
    for r in range(len(lst) + 1):
        for comb in combinations(lst, r):
            if sum(comb) == target:
                return list(comb)
    return None

print(brute_subset_sum([2, 3, 5, 7], 10))
```

------------------------------------------------------------------------

# 📌 Waarom is Brute Force toch nuttig?

-   **Eenvoudig te begrijpen**\
-   **Altijd correct**\
-   **Goede benchmark voor efficiëntere algoritmes**\
-   **Geschikt voor kleine inputgroottes**

------------------------------------------------------------------------

# ✏️ Oefeningen

## **Eenvoudig**

1.  Genereer via brute force alle 2-cijferige PIN-codes (00 t/m 99).\
2.  Zoek een woord in een lijst door elk element te testen.

------------------------------------------------------------------------

## **Gemiddeld**

3.  Vind alle permutaties van een lijst van drie elementen met
    `itertools`.\
4.  Maak een brute-force functie die controleert of een getal een
    priemgetal is.

------------------------------------------------------------------------

## **Uitdagend**

5.  Los het *subset-sum* probleem op voor grotere lijsten (tot \~20
    elementen).\
6.  Maak een brute-force versie van het *Travelling Salesman Problem*
    voor 5 steden.
