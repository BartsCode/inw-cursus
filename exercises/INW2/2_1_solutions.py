"""
# oef1

for i in range(0,10):
    for j in range(0,10):
        print(i,j,sep="")
"""
"""
# oef2
# Hier is een kleine functie ter vervanging van module itertools:
def product(lijst1,lijst2):
    prod = []
    for i in lijst1:
        for j in lijst2:
            prod.append((i,j))
    return prod
            

 # Neem als voorbeeld deze twee verzamelingen:
colors = ['rood', 'groen']
sizes = ['S', 'M']

 # De productverzameling is de verzameling die alle mogelijke combinaties uit colors x sizes bevat:
combinaties = product(colors, sizes)
print(list(combinaties)) # Output: [('rood', 'S'), ('rood', 'M'), ('groen', 'S'), ('groen', 'M')]

 # Met repeat parameter
 # dice is de verzameling die alle mogelijke uitkomste bevat na 2x gooien met een dobbelsteen:
dice = product([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
print("Aantal mogelijke worpen:", len(list(dice)))  # 36
"""
"""
# oef3
# 4.3 Zoek Min/max
# 6.5 Decryptie  (typische toepassing Brute Force)
"""
"""
# oef4
# De brute force methode bestaat erin alle mogelijke posities in tekst te bevragen:
def vind(zin,woord):
    gevonden_index = -1  # Standaardwaarde als het woord niet gevonden wordt
    for i in range(0, len(tekst) - len(woord) + 1):
        if woord == tekst[i:i+len(woord)]:
            gevonden_index = i
            break  # Stop bij de eerste vindplaats

    if gevonden_index != -1:
        print(f"Woord gevonden op index: {gevonden_index}")
    else:
        print("Woord niet gevonden in de tekst.")
    return gevonden_index

#tekst = "Dit is een voorbeeld van een tekst"
#woord = "voor"
#vind(tekst,woord)
"""
"""
#oef5
from itertools import permutations
lijst = ["r","g","b"]
for i in permutations(lijst):
    print(i)
"""
"""
#oef 6
def is_priem(x):
    if x < 2:  # Priemgetallen zijn >= 2
        return False
    
    # Hier zit de Brute force:
    # Controleer alle getallen <X of er een deler tussen zit:
    for i in range(2, x):
        if x % i == 0:
            return False  # Stop meteen als een deler gevonden is
    
    return True
"""
"""
#oef 7
from itertools import permutations
D = "5"
for i in permutations(["0","1","2","3","4","6","7","8","9"]):
    (O,N,A,L,G,E,R,B,T) = i
    getal1 = int(D+O+N+A+L+D)
    getal2 = int(G+E+R+A+L+D)
    getal3 = int(R+O+B+E+R+T)
    if (getal1 + getal2 == getal3):
        print(getal1,"+",getal2,"=",getal3)
        break
"""
    
        

