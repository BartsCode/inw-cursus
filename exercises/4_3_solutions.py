#oefening 4
aantal_getallen = int(input("Hoeveel getallen wil je invoeren? "))
getallen = []
som = 0

for i in range(aantal_getallen):
    getal = int(input(f"Voer getal {i+1} in: "))
    som += getal

gemiddelde = som / aantal_getallen
print(f"Het gemiddelde van de {aantal_getallen} getallen is {gemiddelde}")

#oefening 5
woorden = ["Python", "is", "Leuk"]
omgekeerde_woorden = []

for woord in woorden:
    omgekeerd_woord = ""
    for letter in woord:
        # !opgelet: dit is niet hetzelfde als omgekeerd_woord += letter
        omgekeerd_woord = letter + omgekeerd_woord
    omgekeerde_woorden.append(omgekeerd_woord)

print(omgekeerde_woorden)

#alternatieve oplossing oefening 5
woorden = ["Python", "is", "Leuk"]
omgekeerde_woorden = []

for woord in woorden:
    omgekeerd_woord = ""
    for letterpositie in range(len(woord)):
        omgekeerd_woord += woord[len(woord) - letterpositie - 1]
    omgekeerde_woorden.append(omgekeerd_woord)

print(omgekeerde_woorden)

#oefening 6
getallen = range(1,21)
even_getallen = []
oneven_getallen = []

for getal in getallen:
    if getal % 2 == 0:
        even_getallen.append(getal)
    else:
        oneven_getallen.append(getal)

print(f"Even getallen: {even_getallen}")
print(f"Oneven getallen: {oneven_getallen}")

#oefening 7
kwadraten = []
for getal in range(1, 11):
    kwadraten.append(getal ** 2)

print(kwadraten)

#oefening 8
breedte = int(input("Voer de breedte in: "))
hoogte = int(input("Voer de hoogte in: "))

for i in range(hoogte):
    print("*" * breedte)

#oefening 9
hoogte = int(input("Voer de hoogte in: "))

for i in range(hoogte):
    print("*" * (i+1))

#oefening 10
import random

getallen = []

for i in range(10):
    getallen.append(random.randint(1, 100))

print(getallen)

maximum = getallen[0]
minimum = getallen[0]

for getal in getallen:
    if getal > maximum:
        maximum = getal
    if getal < minimum:
        minimum = getal

print(f"Het maximum is {maximum} en het minimum is {minimum}")

#oefening 11
priemgetallen = []

for getal in range(2,51):
    is_priem = True
    for noemer in range(2, getal):
        if getal % noemer == 0:
            is_priem = False
            # break
    if is_priem:
        priemgetallen.append(getal)

print(priemgetallen)

