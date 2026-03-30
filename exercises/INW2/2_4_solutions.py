'''
#oef1
def wisselgeld(bedrag, munten):
    aantallen  = [0]*len(munten)  # hier bewaar ik het aantal dat ik moet teruggeven 
    gesorteerd = sorted(munten, reverse=True)
    for i in range(len(munten)):
        while bedrag >= gesorteerd[i]:
            bedrag -= gesorteerd[i]
            aantallen[i] +=1
    return gesorteerd, aantallen

 # Voorbeeld
munten = [1, 2, 5, 10, 20, 50]
g,a = wisselgeld(93,munten)
for i in range(len(g)):
    print(a[i],"stukken van",g[i])
# Output: [50, 20, 20, 2, 1]
'''

'''
#oef2
graaf = [
    [[1,3], [3,4], [2,5]],   		# buren van knoop 0
    [[0,3], [4,3], [5,6]],   		# buren van knoop 1
    [[0,5], [3,2], [6,4]],   		# buren van knoop 2
    [[2,2], [0,4], [4,1], [7,5]],   	# buren van knoop 3
    [[3,1], [1,3], [5,2], [8,4]],   	# buren van knoop 4
    [[1,6], [4,2], [9,5]],   	        # buren van knoop 5
    [[2,4], [7,3], [10,6]],   	        # buren van knoop 6
    [[6,3], [3,5], [8,6], [10,7]],   	# buren van knoop 7
    [[7,6], [4,4], [9,3], [11,5]],   	# buren van knoop 8
    [[5,5], [8,3], [11,9]],   	        # buren van knoop 9
    [[6,6], [7,7], [11,8]],   	        # buren van knoop 10
    [[10,8], [8,5], [9,9]]   	        # buren van knoop 11
]

#Het programma Dijkstra is identiek aan dat in de cursus:
 # Implementatie van Dijkstra'zs algoritme:
def dijkstra(graaf, start):
    n = len(graaf)

    # Afstanden (oneindig groot getal)
    afstand = [float("inf")] * n
    afstand[start] = 0

    # Bezochte knopen
    bezocht = [False] * n

    for _ in range(n):
        # 1. Zoek knoop met kleinste afstand die nog niet bezocht is
        min_afstand = float("inf")
        huidige = -1

        for i in range(n):
            if not bezocht[i] and afstand[i] < min_afstand:
                min_afstand = afstand[i]
                huidige = i

        # Geen bereikbare knoop meer
        if huidige == -1:
            break

        # 2. Markeer als bezocht
        bezocht[huidige] = True

        # 3. Werk afstanden van buren bij
        for buur, gewicht in graaf[huidige]:
            nieuwe_afstand = afstand[huidige] + gewicht
            if nieuwe_afstand < afstand[buur]:
                afstand[buur] = nieuwe_afstand

    return afstand
	
	
 # Voorbeeldgebruik
print(dijkstra(graaf, 0))
'''

#oef 4
# Graaf werd overgenomen uit oef 2:
graaf = [
    [[1,3], [3,4], [2,5]],   		# buren van knoop 0
    [[0,3], [4,3], [5,6]],   		# buren van knoop 1
    [[0,5], [3,2], [6,4]],   		# buren van knoop 2
    [[2,2], [0,4], [4,1], [7,5]],   	# buren van knoop 3
    [[3,1], [1,3], [5,2], [8,4]],   	# buren van knoop 4
    [[1,6], [4,2], [9,5]],   	        # buren van knoop 5
    [[2,4], [7,3], [10,6]],   	        # buren van knoop 6
    [[6,3], [3,5], [8,6], [10,7]],   	# buren van knoop 7
    [[7,6], [4,4], [9,3], [11,5]],   	# buren van knoop 8
    [[5,5], [8,3], [11,9]],   	        # buren van knoop 9
    [[6,6], [7,7], [11,8]],   	        # buren van knoop 10
    [[10,8], [8,5], [9,9]]   	        # buren van knoop 11
]

def dijkstra(graaf, start, eind):
    n = len(graaf)
    afstand = [float("inf")] * n
    afstand[start] = 0
    bezocht = [False] * n
    vorige = [None] * n  # houdt bij via welke knoop we de kortste afstand vonden

    for _ in range(n):
        # Zoek knoop met kleinste afstand die nog niet bezocht is
        min_afstand = float("inf")
        huidige = -1
        for i in range(n):
            if not bezocht[i] and afstand[i] < min_afstand:
                min_afstand = afstand[i]
                huidige = i

        if huidige == -1:
            break

        bezocht[huidige] = True

        # Update buren
        for buur, gewicht in graaf[huidige]:
            nieuwe_afstand = afstand[huidige] + gewicht
            if nieuwe_afstand < afstand[buur]:
                afstand[buur] = nieuwe_afstand
                vorige[buur] = huidige  # onthoud via welke knoop we hier kwamen

    # Pad reconstrueren van eind naar start
    pad = []
    knoop = eind
    while knoop is not None:
        pad.append(knoop)
        knoop = vorige[knoop]
    pad.reverse()  # keer om zodat we van start naar eind gaan

    if pad[0] == start:
        return pad
    else:
        return None  # geen pad gevonden

print(dijkstra(graaf, 0, 11))

