# Oefening 1
print("Oefening 1")
print("__________\n")

voornaam = "Ribbe"
achternaam = "De Bie"
leeftijd = 18
print(f"Hallo, ik ben {voornaam} {achternaam} en ik ben {leeftijd} jaar oud")


# Oefening 2
print()
print("Oefening 2")
print("__________\n")

zin = "Python programmeren is leuk!"
print(zin.upper())
print(zin.replace("leuk","geweldig"))
print(len(zin))

# Oefening 3
print()
print("Oefening 3")
print("__________\n")

geld = 50
boek = 12.50
tijdschrift = 3.75
over = round(geld - 2*boek -3*tijdschrift,2)
print(f"Na het kopen van 2 boeken en 3 tijdschriften heb ik nog €{over} over")


# Oefening 4
print()
print("Oefening 4")
print("__________\n")


geboortejaar = "2001"
jaar = 2030
leeftijd = jaar - int(geboortejaar)
print(f"In {jaar} zul je {leeftijd} jaar oud zijn")

# Oefening 5
print()
print("Oefening 5")
print("__________\n")

a = 4
b = 5

print(f"a is groter dan b is {a>b}")
print(f"b is kleiner of gelijk aan 2a is {b<=(2*a)}")
print(f"de rest bij deling van b door a is kleiner dan a is {(b%a)<a}")


# Oefening 6
print()
print("Oefening 6")
print("__________\n")

gewicht = float(input("Geef je gewicht in kg:"))
lengte = float(input("Geef je gewicht in meter:"))
BMI = gewicht/(lengte*lengte)
print(f"Je BMI is {round(BMI,1)}")

# Oefening 7
print()
print("Oefening 7")
print("__________\n")


F = float(input("Geef de temperatuur in Fahrenheit:"))
C = (F - 32) * 5/9
print(f"{F}°F is gelijk aan {round(C,1)}°C")


# Oefening 8
print()
print("Oefening 8")
print("__________\n")


naam = input("Geef je naam:")
functie = input("Geef je functie:")

lengte = len(naam)+len(functie)
print("+"+lengte*"-"+"+")

opvul = (lengte - len(naam))//2
rest = lengte - len(naam)-2*opvul
print("I"+opvul*" "+naam+(opvul+rest)*" "+"I")

opvul = (lengte - len(functie))//2
rest = lengte - len(functie)-2*opvul
print("I"+opvul*" "+functie+(opvul+rest)*" "+"I")

print("+"+lengte*"-"+"+")


# Oefening 9
print()
print("Oefening 9")
print("__________\n")


bedrag = float(input("Geef bedrag:"))
koers = 1.18
print(f"{bedrag} EUR is gelijk aan {round(bedrag*koers,2)} USD")


# Oefening 10
print()
print("Oefening 10")
print("___________\n")


# Dit zijn de oorspronkelijke waarden:
a = 2
b = 3.0
 # We wisselen de waarden in a en b:
c = b
b = a
a = c
 # We drukken beide waarden af:
print(f"de waarden zijn a:{a} en b:{b}")

