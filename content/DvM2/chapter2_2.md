# 2.2 Recursie

![Recursie](/images/recursie.png)

##   Herhaling vanuit functieperspectief
##   Voorbeelden: Faculteit, Fibonacci
##   Voorbeelden: Fractalen
##   Conceptuele uitleg eenvoudige sorteeralgoritmes (bv. selection sort)

## **Recursie**

### 🔁 Wat is *Recursie*?

**Recursie** betekent dat een functie **zichzelf aanroept** om een
kleiner deel van hetzelfde probleem op te lossen.\
Dit werkt wanneer een probleem een **natuurlijk kleiner subprobleem**
bevat.

Elke recursieve functie heeft twee belangrijke elementen:

1.  **Basisgeval** -- wanneer moet de functie stoppen?\
2.  **Recursieve stap** -- hoe wordt het probleem kleiner gemaakt?

------------------------------------------------------------------------

# 🧩 Recursie vanuit functieperspectief

``` python
def functie(n):
    if n is klein genoeg:  # basisgeval
        return oplossing
    return functie(n - 1)  # recursieve stap
```

------------------------------------------------------------------------

# 📌 Klassieke Voorbeelden

## 1. **Faculteit (n!)**

``` python
def faculteit(n):
    if n <= 1:   # basisgeval
        return 1
    return n * faculteit(n - 1)
```

------------------------------------------------------------------------

## 2. **Fibonacci**

``` python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

------------------------------------------------------------------------

# 🌿 Fractalen

Recursie is ideaal om fractalen te tekenen.

### Voorbeeld: Fractale Boom

``` python
import turtle

def teken_boom(lengte):
    if lengte < 5:
        return
    turtle.forward(lengte)
    turtle.left(30)
    teken_boom(lengte * 0.7)
    turtle.right(60)
    teken_boom(lengte * 0.7)
    turtle.left(30)
    turtle.backward(lengte)
```

------------------------------------------------------------------------

# 🔍 Recursieve Sorteeralgoritmes

## **Selection Sort -- recursief gedacht**

``` python
def selection_sort(lst):
    if len(lst) <= 1:
        return lst
    kleinste = min(lst)
    lst.remove(kleinste)
    return [kleinste] + selection_sort(lst)
```

------------------------------------------------------------------------

# ✏️ Oefeningen

## **Eenvoudig**

1.  Schrijf een recursieve functie die de som `1 + ... + n` berekent.\
2.  Schrijf een functie die recursief telt hoeveel cijfers een getal
    heeft.\
3.  Implementeer een recursieve machtfunctie: `a^b`.

------------------------------------------------------------------------

## **Gemiddeld**

4.  Print recursief alle getallen van `n` naar `0`.\
5.  Tel recursief hoe vaak een element in een lijst voorkomt.

------------------------------------------------------------------------

## **Uitdagend**

6.  Schrijf een recursieve binary search.\
7.  Maak een versie van selection sort die de originele lijst niet
    wijzigt.

------------------------------------------------------------------------

Recursie vormt de basis voor veel krachtige algoritmes. In deel 4 volgt
**Dynamisch Programmeren**!
