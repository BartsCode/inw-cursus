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


Zo een probleem noemen we een **recursief** probleem.
Deze heeft als **randvoorwaarde** dat: 

$$ O(1) = 0 $$ 

want als je slechts één munt als lichtste over hebt, moet die wel vals zijn.
De oplossing van dit recusief probleem is:

$$ O(n) = ln_2(n) $$

(Ga na dat deze formule voldoet)
Omdat logaritmische functies zeer traag stijgen als functie van $n$, heb je met deze techniek veel sneller het antwoord gevonden.

------------------------------------------------------------------------

### 🎯 Wat is *Verdeel en Heers*?

**Verdeel en Heers** is een strategie waarbij je een probleem oplost door:

1.  Het probleem op te **splitsen** in twee of meer kleinere delen\
2.  Los de kleinere delen op, meestal **recursief** \
3.  **Combineer** deze twee (of meer) oplossingen tot een oplossing van de oorspronkelijke (grotere) instantie

------------------------------------------------------------------------

## 🧩 Basisstructuur in Python

Je kan symbolisch een algemeen schema geven van een verdeel-en-heers-

``` python
def divide_and_conquer(problem):
    if is_klein(problem):
        return los_op(problem)

    deel1, deel2 = verdeel(problem)
    oplossing1 = divide_and_conquer(deel1)
    oplossing2 = divide_and_conquer(deel2)

    return combineer(oplossing1, oplossing2)
```

------------------------------------------------------------------------

# 📌 Voorbeelden



## 1. **Mergesort** (klassiek divide-and-conquer sorteeralgoritme)

``` python
def mergesort(lst):
    if len(lst) <= 1:
        return lst

    mid = len(lst) // 2
    left = mergesort(lst[:mid])
    right = mergesort(lst[mid:])

    return merge(left, right)

def merge(left, right):
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
```

------------------------------------------------------------------------

## 2. **Maximale waarde vinden in een lijst** met divide-and-conquer

``` python
def max_divide_and_conquer(lst):
    if len(lst) == 1:
        return lst[0]

    mid = len(lst) // 2
    left_max = max_divide_and_conquer(lst[:mid])
    right_max = max_divide_and_conquer(lst[mid:])

    return left_max if left_max > right_max else right_max
```

------------------------------------------------------------------------

## 3. **Som van een lijst** via divide-and-conquer

``` python
def sum_divide_and_conquer(lst):
    if len(lst) == 0:
        return 0
    if len(lst) == 1:
        return lst[0]

    mid = len(lst) // 2
    return sum_divide_and_conquer(lst[:mid]) + sum_divide_and_conquer(lst[mid:])
```

------------------------------------------------------------------------

# ✏️ Oefeningen (Eenvoudig)

## **Oefening 1 -- Teller van elementen**

Schrijf een functie `count_elements(lst)` die via divide-and-conquer het
**aantal elementen** in een lijst teruggeeft.

------------------------------------------------------------------------

## **Oefening 2 -- Minimum zoeken**

Schrijf een functie `min_divide_and_conquer(lst)` die het **kleinste
element** in een lijst recursief bepaalt.

------------------------------------------------------------------------

## **Oefening 3 -- Tellen van even getallen**

Schrijf een functie `count_even(lst)` die het aantal **even** getallen
telt met divide-and-conquer.

------------------------------------------------------------------------

# ✏️ Oefeningen (Gemiddeld)

## **Oefening 4 -- Grootste verschil**

Vind het **grootste absolute verschil** tussen twee elementen in een
lijst via divide-and-conquer.

------------------------------------------------------------------------

## **Oefening 5 -- Zoek of een waarde voorkomt**

Schrijf een functie `contains(lst, target)` die recursief controleert of
`target` in de lijst zit.

------------------------------------------------------------------------

# 🚀 Uitdagender

## **Oefening 6 -- Palindroomcheck**

Gebruik divide-and-conquer om te controleren of een string een
palindroom is.

------------------------------------------------------------------------

## **Oefening 7 -- Aantal keer dat een element voorkomt**

Schrijf `count_occurrences(lst, x)` waarbij je de lijst splitst en
counts combineert.

------------------------------------------------------------------------

## 1. Algoritme van Euclides
Dit is gebaseerd op: ggd(m, n) = ggd(n, m mod n)

Probleem:
Gegeven: twee niet-negatieve gehele getallen m en n (niet beide nul).
Vraag: wat is de grootste gemeenschappelijke deler, genoteerd als ggd(m,n),
van m en n?
Voorbeelden:
ggd(60,24) = 12;
ggd(25,0) = 25;
ggd(200, 441) = 1;
ggd(588,495) = 3.
Het algoritme van Euclides is gebaseerd op het herhaald gebruiken van
ggd(m, n) = ggd(n, m mod n),
totdat de tweede parameter nul wordt.
Voorbeeld: ggd(60,24) = ggd(24, 12) = ggd(12, 0) = 12

------------------------------------------------------------------------

## 1.Torens van Hannoi

------------------------------------------------------------------------
