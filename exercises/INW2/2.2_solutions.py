# oef1 ---------------------------------
"""
def som(x):
    # eenvoudig geval: direct oplossen
    if x == 0:
        return 0
    # algemeen geval: recursief oplossen
    return x + som(x-1)

print(som(4))
"""
# oef2 ---------------------------------
"""
def cijfers(x):
    # eenvoudig geval: direct oplossen
    if x < 10:
        return 1
    # algemeen geval: recursief oplossen
    return 1 + cijfers(x//10)

print(cijfers(4567))
"""
# oef3 ---------------------------------
"""
def macht(a,n):
    # eenvoudig geval: direct oplossen
    if n==0:
        return 1
    # algemeen geval: recursief oplossen
    return a*macht(a,n-1)

print(macht(2,0))
"""
# oef4 ---------------------------------
"""
def print_r(x):
    # eenvoudig geval: direct oplossen
    if x==0:
        print(x)
        return
    # algemeen geval: recursief oplossen
    print(x)
    print_r(x-1)
    return 

print_r(5)
"""
# oef5 ---------------------------------
"""
def tel(woord,lijst):
    if lijst == []:
        return 0
    if lijst[0] == woord:
        return 1+tel(woord,lijst[1:])            
    else:
        return tel(woord,lijst[1:])

mijnLijst=["b","p","a","appel","z","appel","a"]
print(tel("appel",mijnLijst))
"""
# oef6 ---------------------------------
"""
def functie(x):
    # eenvoudig geval: direct oplossen
    if x == 1:
        return 0
    # algemeen geval: recursief oplossen
    return 1+functie(x//2)

# nu vergelijken met de log_2 functie:

import matplotlib.pyplot as plt
import math

x = y1 = y2 = []
for i in range(10):
    x.append(i)
    y1.append(functie(2**i))
    y2.append(math.log2(2**i))

plt.plot(x, y1, '*', label='functie')   # '-' = gewone lijn
plt.plot(x, y2, '-', label='log_2')     # '*' = alleen sterretjes

plt.show()
"""
# oef7 ---------------------------------
"""
def ggd(a, b):
    # Basisgeval: als b gelijk is aan 0, dan is a de GGD
    if b == 0:
        return a
    else:
        # Recursieve stap: GGD(a, b) = GGD(b, a mod b)
        return ggd(b, a % b)

# Testen van de functie
print("ggd(48, 18) =", ggd(48, 18))  # Verwacht: 6
"""
# oef8 ---------------------------------

"""
# versie 1
import turtle

def boom(lengte, niveau):
    if niveau == 0:
        turtle.circle(3)
        return
    turtle.forward(lengte)
    turtle.right(45)
    boom(lengte * 0.5, niveau - 1)
    turtle.left(45)
    boom(lengte * 0.9, niveau - 1)
    turtle.left(45)
    boom(lengte * 0.5, niveau - 1)
    turtle.right(45)
    turtle.backward(lengte)

turtle.speed(0) # traag = 1 - 10 = snelst
turtle.penup()
turtle.goto(0, -200)  # ← HIER beweeg je naar startpositie
turtle.pendown()
turtle.left(90)  # Boom groeit omhoog
boom(100, 6)     # Lengte 100, 5 recursieniveaus
turtle.done()
"""
"""
# versie 4
import turtle

def boom(lengte, niveau):
    if lengte < 5:
        return
    turtle.forward(lengte)
    turtle.right(30)
    boom(lengte * 0.9, niveau - 1)
    turtle.left(60)
    boom(lengte * 0.5, niveau - 1)
    turtle.right(30)
    turtle.backward(lengte)

turtle.speed(0) # traag = 1 - 10 = snelst
turtle.penup()
turtle.goto(-100, -200)  # ← HIER beweeg je naar startpositie
turtle.pendown()
turtle.left(90)  # Boom groeit omhoog
boom(100, 6)     # Lengte 100, 5 recursieniveaus
turtle.done()
"""
# oef9 ---------------------------------
"""
def hanoi(n, bron="A", hulp="B", doel="C"):
    #Los het Torens van Hanoi probleem op voor n schijven.
    
    #Parameters:
    #n: aantal schijven
    #bron: starttoren (default "A")
    #hulp: hulptoren (default "B")
    #doel: doeltoren (default "C")

    if n == 1:
        print(f"Schijf {n} van {bron} naar {doel}")
    else:
        # Verplaats n-1 schijven van bron naar hulp
        hanoi(n-1, bron, doel, hulp)
        
        # Verplaats grootste schijf van bron naar doel
        print(f"Schijf {n} van {bron} naar {doel}")
        
        # Verplaats n-1 schijven van hulp naar doel
        hanoi(n-1, hulp, bron, doel)

# test programma met 3 schijven:
hanoi(3,"A","B","C")
"""
