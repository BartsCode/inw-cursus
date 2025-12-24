# 2.3 Verdeel en Heers (Divide and Conquer)



Introductie:

Gegeven $n$ identiek uitziende munten. E´en ervan is vals. Bekend is dat
de valse munt lichter is dan de andere. Tevens is een balans beschikbaar.
Bepaal door weging de valse munt.


![VerdeelEnHeers](/images/VerdeelEnHeers.png)


Je zou de munten natuurlijk twee per twee kunnen wegen. Je moet dan $n/2$ paren wegen. Dit kunnen we stellen is de "Brute force" methode. Maar het kan sneller:

Verdeel de munten in twee stapels van $n/2$
en —indien n oneven— een losse munt. Als de twee stapels even zwaar
zijn (best case) is de losse munt de valse. Zo niet, dan bevindt de valse
zich in de lichtste van de twee stapels.

Als je wil bepalen hoeveel keer je hiervoor moet wegen, kan je dat als volgt doen: Stel $O(n)$ het aantal keer je de weegschaal moet gebruiken voor een stapel van $n$ wegingen. Als je één weging doet, moet je daarna de lichtste stapel verder onderzoeken. Je bekomt daardoor:

$$O(n) = 1+ O(n/2)$$


Zo een probleem noemen we een recursieve functie.
Deze heeft als randvoorwaarde dat: 

$$ O(1) = 0 $$ 

want als je slechts één munt als lichtste over hebt, moet die wel vals zijn.
De oplossing van dit recusief probleem is (zie oefeningen recursie):

$$ O(n) = ln_2(n) $$

Omdat logaritmische functies zeer traag stijgen als functie van $n$, heb je met deze techniek veel sneller het antwoord gevonden dan indien je alle munten 2 per 2 zou testen.

------------------------------------------------------------------------

## 🎯 Wat is *Verdeel en Heers*?

**Verdeel en Heers** is een strategie waarbij je een probleem oplost door:

1.  Het probleem op te **splitsen** in twee of meer kleinere delen
2.  De kleinere delen op te lossen, diwijls gebeurt dit **recursief**
3.  De deeloplossingen **combineren** tot een oplossing van het oorspronkelijke probleem

### 🧩 Basisstructuur in Python

Je kan symbolisch een algemeen schema geven van een verdeel-en-heers- als volgt:

``` python
def divide_and_conquer(probleem):
    if is_klein(probleem):
        return los_op(probleem)

    deel1, deel2 = splits(probleem)
	# deelproblemen recursief oplossen:
    oplossing1 = divide_and_conquer(deel1)
    oplossing2 = divide_and_conquer(deel2)

    return combineer(oplossing1, oplossing2)
```

Verdeel en heers kan ook winst opleveren als je **meerdere processoren** ter beschikking hebt.
Indien je n processoren hebt, kun je het probleem opsplitsen in n deelproblemen. Elk deelprobleem kan dan
in parallel door een verschillende processor worden opgelost. Op deze manier wordt het proces een factor n versneld. 

------------------------------------------------------------------------

# 📌 Voorbeelden

Mergesort kan je makkelijk aantonen met behulp van een spel kaarten...   
Om een spel kaarten te sorteren, deel je de kaarten in 2 stapels.
Elke stapel geef je een verschillende leerling om te sorteren.
Als je de gesorteerde stapels terugkrijgt, moet je slechts één maal door beide stapels gezamelijk gaan
om er één gesorteerde stapel van te maken.

Deze methode noemt men **mergesort** en is een schoolvoorbeeld van verdeel en heers.
De twee leerlingen die elk een deel van de kaarten kregen kunnen op hun beurt de stapel sorteren
door die in twee te delen en twee andere leerlingen elk een deel van de stapel te geven met opdracht die te sorteren.
Dit is het **recursieve** deel van het algoritme.


### Voorbeeld 1: Sorteeralgoritme **Mergesort** 

Hier volgt een implementatie van het algoritme Mergesort:

``` python
def mergesort(lst):
	# Als er maar één element in de lijst is, hoef je niet te sorteren:
    if len(lst) <= 1:
        return lst

	# Anders: deel de lijst in 2 gelijke delen, en sorteer ze recursief:
    mid = len(lst) // 2
    left = mergesort(lst[:mid])
    right = mergesort(lst[mid:])

	# Als de delen gesorteerd zijn, gaan we ze samenvoegen (zie hieronder)
    return merge(left, right)

def merge(left, right):
	# Deze routine voegt twee gesorteerde rijen samen tot één gesorteerde rij:
    resultaat = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            resultaat.append(left[i])
            i += 1
        else:
            resultaat.append(right[j])
            j += 1

    resultaat.extend(left[i:])
    resultaat.extend(right[j:])
    return resultaat
	
rij = [14,7,3,12]
print(mergesort(rij))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Hoe het werkt:
![MergeSort](/images/MergeSort.png)

Het voordeel van deze methode is dat ze veel sneller is (O(nlog_2(n))) dan een Brute force (0(n^2)) sorteermethode.


------------------------------------------------------------------------

### 2. **Maximale waarde vinden in een lijst** met divide-and-conquer

Ook andere zaken van een lijst zoals het maximum, minimum, som, product,... laten zich ook via verdeel en heers berekenen. Al is deze methode niet sneller dan zijn simpel alternatief (éénmaal door de lijst lopen). Beide methodes hebben orde O(n). Hier demonstreren we hoe je het maximium in een lijst kan vinden via verdeel en heers:

``` python
def max_divide_and_conquer(lst):
    if len(lst) == 1:
        return lst[0]

    mid = len(lst) // 2
    left_max = max_divide_and_conquer(lst[:mid])
    right_max = max_divide_and_conquer(lst[mid:])

    return left_max if left_max > right_max else right_max
	
rij = [14,7,3,12,18,2,9,5]
print(max_divide_and_conquer(rij))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

------------------------------------------------------------------------

# ✏️ Oefeningen 

• Moeilijkheidsgraad: ★☆☆☆☆

1. Schrijf een functie `count_elements(lst)` die via divide-and-conquer het **aantal elementen** in een lijst teruggeeft.


• Moeilijkheidsgraad: ★★★☆☆

2. Zoek een element (zoekwaarde) in een **gesorteerde** lijst.  
   Je kan dit programma bv noemen:
   `def BinarySearch(lijst,zoekwaarde)`

   Zo ga je tewerk: In plaats van elk element één voor één te bekijken:
   - Kijk naar het middelste element in de lijst
   - Vergelijk het met de zoekwaarde
   - Gooi de helft van de lijst weg
   - Herhaal op de overblijvende helft
    
	Elke stap halveert zo het probleem, vandaar dat dit een **binairy search** algoritme wordt genoemd.

• Moeilijkheidsgraad: ★★★★☆


3. Gebruik divide-and-conquer om te controleren of een string een palindroom is.

4. Kijk of mergesort effectief O(nlog_2(n)) is door de tijd op te meten die het programma nodig heeft voor lijsten met verschillende n. Maak een grafiek van deze tijd en vergelijk met de theoretische voorspelling.



