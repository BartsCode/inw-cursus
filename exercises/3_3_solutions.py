
# Oefeningen H3


# Oefening 1:
"""
getal = int(input("Voer een geheel getal in:"))
if (getal %2 == 0):
    print(f"Het getal {getal} is even")
else:
    print(f"Het getal {getal} is oneven")
"""

# Oefening 2:
"""
leeftijd = int(input("Wat is je leeftijd? "))
begeleid = input("Ben je met een volwassene? (ja/nee): ")

if (leeftijd < 16):
    if (begeleid == "ja"):
        print("Je mag naar de film")
    else:
        print("Sorry, Je mag niet naar de film")
else:
    print("Je mag naar de film")
"""

# Oefening 3:
"""
x = float(input("Voer een getal in: "))
if (x > 0):
    print("Het getal is positief")
elif x<0:
    print("Het getal is negatief")
else:
    print("Het getal is nul.")
"""

# Oefening 4:
"""
x = float(input("geef eerste getal: "))
maximum = x
y = float(input("geef tweede getal: "))
if (y > maximum):
    maximum = y
z = float(input("geef derde getal : "))
if (z > maximum):
    maximum = z

print("Het maximum bedraagt",maximum)
"""

# Oefening 5:
"""
a = float(input("Geef zijde a: "))
b = float(input("Geef zijde b: "))
c = float(input("Geef zijde c: "))

if a + b > c and a + c > b and b + c > a:
    if a == b == c:
        print("Gelijkzijdige driehoek")
    elif a == b or b == c or a == c:
        print("Gelijkbenige driehoek")
    else:
        print("Ongelijkzijdige driehoek")
else:
    print("Dit is geen geldige driehoek.")
"""

# Oefening 6:
"""
cijfer  = float(input("Wat is je cijfer? "))
percent = float(input("Wat is je aanwezigheid in procenten? "))
if (cijfer >= 50) and (percent >= 80):
    print("Gefeliciteerd, je bent geslaagd voor het vak!")
else:
    print("Sorry, je bent niet geslaagd voor het vak!")
"""

# Oefening 7:
"""
jaar = int(input("Geef een jaar: "))

if (jaar % 4 == 0 and jaar % 100 != 0) or (jaar % 400 == 0):
    print(f"{jaar} is een schrikkeljaar.")
else:
    print(f"{jaar} is geen schrikkeljaar.")
"""

# Oefening 8:
"""
x = float(input("Voer een getal tussen 1 en 100 in:"))
if (x>1) and (x<100):
    print("Het getal ligt binnen het interval")
else:
    print("Het getal ligt buiten het interval")
"""

# Oefening 9:
"""
bedrag = float(input("Voer het aankoopbedrag in: "))

if bedrag > 100:
    percent = 10.0
elif bedrag > 50:
    percent = 5.0
else:
    percent = 0
    
bedrag -= bedrag * percent /100
print(f"De uiteindelijke prijs is: {bedrag}")
"""

#Oefening 10:

from math import sqrt as wortel

a = float(input("Geef a: "))
b = float(input("Geef b: "))
c = float(input("Geef c: "))

D = b**2 - 4*a*c
print("Discriminant: D =", D)

import math

if D > 0:
    x1 = (-b + wortel(D)) / (2*a)
    x2 = (-b - wortel(D)) / (2*a)
    print("Er zijn 2 oplossingen:")
    print("x1 =", x1)
    print("x2 =", x2)

elif D == 0:
    x = -b / (2*a)
    print("Er is 1 oplossing:")
    print("x =", x)

else:
    print("Er zijn geen reële oplossingen.")



