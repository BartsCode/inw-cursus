# 2.4 Greedy Algoritmen (Gretig)

## **Greedy Algoritmen**

### 🎯 Wat is een *Greedy algoritme*?

Een **greedy algoritme** (of *gretig algoritme*) bouwt stap voor stap
een oplossing op door **telkens de lokaal optimale keuze** te maken, in
de hoop dat deze leidt tot een **globaal optimale oplossing**.

Kenmerkend:

-   Op elk moment kies je wat *nu* het beste lijkt\
-   Geen terugkijken of heroverwegen\
-   Vaak zeer efficiënt (meestal O(n log n) of beter)\
-   Werkt niet voor elk probleem, maar **als het werkt, is het snel én
    simpel**

------------------------------------------------------------------------

# 🧩 Basisidee

1.  Bepaal een **greedy-strategie** (hoe kies je lokaal de beste
    optie?).\
2.  Pas deze strategie toe op elke stap, zonder terug te komen op
    vroegere keuzes.\
3.  Eindig met een volledige oplossing.

------------------------------------------------------------------------

# 💰 Voorbeeld: *Het Wisselgeldprobleem*

Gegeven een bedrag en beschikbare munten, geef terug met **zo weinig
mogelijk munten**.

Voor het **Europese muntsysteem** werkt een greedy-aanpak perfect.

## ➤ Greedy-strategie

Neem telkens de **grootste beschikbare munt** die niet groter is dan het
resterende bedrag.

## ➤ Python-implementatie

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

------------------------------------------------------------------------

# 📌 Tip: Greedy werkt hier omdat...

Het Europese muntsysteem is **canoniek**, wat betekent dat greedy altijd
de optimale oplossing geeft.\
In andere landen (bv. VS) werkt greedy niet altijd!

------------------------------------------------------------------------

# 📦 Meer voorbeelden van Greedy Algoritmen

## 1. **Interval Scheduling**

Selecteer maximaal aantal niet-overlappende activiteiten door steeds de
activiteit met de vroegste eindtijd te nemen.

``` python
def interval_scheduling(intervals):
    intervals = sorted(intervals, key=lambda x: x[1])  # sorteer op eindtijd
    resultaat = []
    vorige_einde = 0

    for start, eind in intervals:
        if start >= vorige_einde:
            resultaat.append((start, eind))
            vorige_einde = eind

    return resultaat
```

------------------------------------------------------------------------

## 2. **Minimum aantal platformen (treinen)**

Kies steeds het vroegst eindigende spoor.

------------------------------------------------------------------------

## 3. **Huffman-codering** (optimale compressie)

Opbouwen van een binaire boom door steeds de kleinste frequenties te
combineren.

------------------------------------------------------------------------

# ✏️ Eenvoudige Oefeningen

## **Oefening 1 -- Wisselgeld uitbreiden**

Pas het wisselgeldprogramma aan zodat het ook **het aantal munten**
teruggeeft.

------------------------------------------------------------------------

## **Oefening 2 -- Interval scheduling**

Gegeven een lijst intervallen, schrijf zelf een greedy-functie die het
maximale aantal activiteiten kiest.

------------------------------------------------------------------------

## **Oefening 3 -- Fietstochten plannen**

Gegeven afstanden tussen oplaadpunten en beperkte batterijcapaciteit:\
maak steeds de verste haalbare keuze.

------------------------------------------------------------------------

# 🚀 Gemiddelde Oefeningen

## **Oefening 4 -- Minimale sprongen**

Gegeven een lijst waarbij elk getal aangeeft hoe ver je kunt springen:\
kies steeds de grootste sprong binnen bereik.

------------------------------------------------------------------------

## **Oefening 5 -- Minimale kosten**

Gegeven items met gewichten en waarden:\
neem steeds het item met de **beste waarde-per-gewicht** (fractional
knapsack).

------------------------------------------------------------------------

# 🔥 Uitdagend

## **Oefening 6 -- Huffman-codering**

Gebruik greedy stappen om een prefixvrije code te bouwen voor symbolen
met frequenties.

------------------------------------------------------------------------

## **Oefening 7 -- Minimale wachttijd**

Gegeven verwerkingstijden, sorteer taken zodanig dat totale wachttijd
minimaal is (kortste eerst).

------------------------------------------------------------------------

Greedy-algoritmen zijn elegant, snel en krachtig --- mits het probleem
ervoor geschikt is!
