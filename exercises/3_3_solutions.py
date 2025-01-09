#oefening 1
getal = int(input("Voer een getal in: "))
if getal % 2 == 0:
    print(f"Het getal {getal} is even")
else:
    print(f"Het getal {getal} is oneven")

#oefening 2
leeftijd_string = input("Voer je leeftijd in: ")
leeftijd = int(leeftijd_string)
met_volwassene = input("Ben je met een volwassene? (ja/nee): ")

if leeftijd >= 16 and met_volwassene == "ja":
    print("Je mag naar de film")
else:
    print("Sorry, je mag niet naar de film")

#oefening 3
geheim_getal = 5
getal_string = input("Raad het getal tussen 1 en 10: ")
getal = int(getal_string)
if getal == geheim_getal:
    print("Goed gedaan!")
else:
    print("Helaas, dat is niet het goede getal.")

#oefening 4
getal = int(input("Voer een getal in: "))
if getal > 0:
    print("Het getal is positief")
elif getal < 0:
    print("Het getal is negatief")
else:
    print("Het getal is 0")

#oefening 5
cijfer = int(input("Wat is je cijfer in procenten? "))
aanwezigheid = int(input("Wat is je aanwezigheid in procenten? "))

if cijfer >= 50 and aanwezigheid >= 80:
    print("Je bent geslaagd!")
else:
    print("Je bent niet geslaagd!")

#oefening 6
jaar = int(input("Voer een jaartal in: "))
if (jaar % 4 == 0 and jaar % 100 != 0) or (jaar % 400 == 0):
    print(f"{jaar} is een schrikkeljaar")
else:
    print(f"{jaar} is geen schrikkeljaar")

#oefening 7
getal = int(input("Voer een getal tussen 1 en 100 in: "))
if getal >= 1 and getal <= 100:
    print("Het getal ligt binnen het interval")
else:
    print("Het getal ligt buiten het interval")

#oefening 8
bedrag = int(input("Voer het aankoopbedrag in: "))
korting = 0

if bedrag > 100:
    korting = 0.1
elif bedrag > 50:
    korting = 0.05

print(f"Je krijgt {korting * 100}% korting")
print(f"De uiteindelijke prijs is: {bedrag - bedrag * korting}")
