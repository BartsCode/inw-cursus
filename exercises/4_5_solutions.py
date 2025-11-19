
# oefening 1 #####################################
getal = 10
while getal > 0:
    print(getal)
    getal -= 1
print("Start")


# oefening 2  #####################################

from random import randint

te_raden = randint(1,99)
getal = -1
while getal != te_raden:
    getal = input("Raad het getal of 'q' voor te stoppen:")
    if (getal == "q"):
        break
    getal = int(getal)
    if getal < te_raden:
        print("Hoger!")
    elif getal > te_raden:
        print("Lager!")
    else:
        print("Correct!")
        


# oefening 3  #####################################


wwoord = ""
OK = False

while not OK:
    wwoord = input("Geef wachtwoord:")

    #Kijk voor lengte:
    min8karakters = False
    if len(wwoord) >= 8:
        min8karakters = True

    #Kijk voor hoofdletters:
    min1hoofdletter = False
    for i in wwoord:
        if i in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            min1hoofdletter = True
            break

    #Kijk voor cijfers:
    min1cijfer = False
    for i in wwoord:
        if i in "0123456789":
            min1cijfer = True
            break
    
    #Kijk voor speciaal karakter:
    min1Speciaalkarakter = False
    for i in wwoord:
        if i in "!@#$%^&*":
            min1Speciaalkarakter = True
            break

    OK = min8karakters and min1hoofdletter and min1cijfer and min1Speciaalkarakter
    if not min8karakters:
        print("woord is te kort")
    if not min1hoofdletter:
        print("geen hoofdletter")
    if not min1cijfer:
        print("geen cijfer")
    if not min1Speciaalkarakter:
        print("geen speciaal karakter")

            

# oefening 4  #####################################

antwoord = "ja"

while antwoord == "ja":
    getal1 = float(input("Voer het eerste getal in: "))
    opera  = input("Voer de operator in: ")
    getal2 = float(input("Voer het tweede getal in: "))
    if opera == "+":
        print(f"Resultaat: {getal1} {opera} {getal2} = {getal1 + getal2}")
    elif opera == "-":
        print(f"Resultaat: {getal1} {opera} {getal2} = {getal1 - getal2}")
    elif opera == "*":
        print(f"Resultaat: {getal1} {opera} {getal2} = {getal1 * getal2}")
    elif opera == "/":
        print(f"Resultaat: {getal1} {opera} {getal2} = {getal1 / getal2}")
    else:
        print("Ongeldige bewerking")
    antwoord = input("Wil je nog een berekening uitvoeren? (ja/nee): ")



# oefening 5  #####################################
max = 100
# twee beginwaarden:
x0 = 0 
x1 = 1
lijst = [x0,x1]
while True:
    # de volgende is de som van de twee laatste in de lijst:
    x = lijst[-1]+lijst[-2]
    # voeg element toe aan lijst:
    if x < max:
        lijst.append(x)
    else:
        break

print(lijst)
    
    
#oefening 6  #####################################
max = int(input("Geef maximale waarde: "))
x = 1
while x <= max:
    priem = True
    for i in range(2,x):
        if x%i == 0 :
            priem = False
    if priem:
        print(x)
    x += 1


    
# oefening 7  #####################################

from random import randint

woorden = ["python", "code", "stiepel", "computer", "kwiebus"]
index = randint(0,len(woorden))
woord = woorden[index]
geraden = ["_"] * len(woord)
levens = 6

print("Welkom! Raad het woord:")

while levens > 0 and "_" in geraden:
    letter = input("Raad een letter: ").lower()
    
    if letter in woord:
        for i in range(len(woord)):
            if woord[i] == letter:
                geraden[i] = letter
        print("Goed geraden!")
    else:
        levens -= 1
        print(f"Helaas, de letter {letter} komt niet in het woord voor.")

    print("Woord: ",geraden)
    print("Levens: ",levens)

if "_" not in geraden:
    print(f"Gefeliciteerd! Het woord was: {woord}")
else:
    print(f"Game over! Het woord was: {woord}")


#oefening 8  #####################################
vragen = [
    {
        "vraag": "Wat is de hoofdstad van Frankrijk?",
        "opties": ["A. Londen", "B. Berlijn", "C. Parijs", "D. Madrid"],
        "antwoord": "C"
    },
    {
        "vraag": "Hoeveel poten heeft een spin?",
        "opties": ["A. 6", "B. 8", "C. 10", "D. 12"],
        "antwoord": "B"
    },
    {
        "vraag": "Welke programmeertaal is dit?",
        "opties": ["A. Java", "B. C++", "C. Python", "D. Chinees"],
        "antwoord": "C"
    }
]

score = 0
huidige_vraag = 0

print("Welkom bij de quiz!\n")

while huidige_vraag < len(vragen):
    vraag_data = vragen[huidige_vraag]
    
    print(f"Vraag {huidige_vraag + 1}: {vraag_data['vraag']}")
    for optie in vraag_data["opties"]:
        print(optie)
    
    antwoord = input("\nJouw antwoord (A/B/C/D): ").upper()
    
    if antwoord == vraag_data["antwoord"]:
        print("Correct!\n")
        score += 1
    else:
        print(f"Fout! Het juiste antwoord was: {vraag_data['antwoord']}\n")
    
    huidige_vraag += 1

print(f"Quiz afgelopen! Je score: {score}/{len(vragen)}")







