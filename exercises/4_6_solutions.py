# oefening 2

import random


zin = input("geef een zin in: ")
woorden = zin.split()
woordenboek = {}

for woord in woorden:
    if woord in woordenboek:
        woordenboek[woord] += 1
    else:
        woordenboek[woord] = 1

for woord, aantal in woordenboek.items():
    print(f"{woord}: {aantal}")


# oefening 6

teller = 10

while teller > 0:
    print(teller)
    teller -= 1


# oefening 7

getal = random.randint(1, 100)
while True:
    tekst = input("geef een getal in: ")
    if tekst == "q":
        break
    
    gok = int(tekst)
    
    if gok == getal:
        print("goed geraden!")
        break
    elif gok < getal:
        print("te laag")
    else:
        print("te hoog")




