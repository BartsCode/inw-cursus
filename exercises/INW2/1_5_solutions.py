
# Oef1 ###############################################

#snippet A:  O(n) 

def snippet_a(n):
    totaal = 0            # O(1)
    for i in range(n):    # n keer orde body:
        totaal += i       # O(1)
    print(totaal)         # O(1)

#snippet B: worst case scenario: O(1)

def snippet_b(lst):
    if len(lst) > 0:            # O(1)
        print(lst[0])           # O(1)
    else:
        print("Lege lijst")     # O(1)


#snippet C: O(n^2)

def snippet_c(n):
    for i in range(n):          # n keer orde body:
        for j in range(n):      #   n keer orde body:
            print(i * j)        #       O(1)

# snippet D: O(n) + O(n) = O(n)

def snippet_d(lst):
    for item in lst:        # O(n)
        print(item)
    for item in lst:        # O(n)
        print(item)

# snippet E: O(log(n))

def snippet_e(n):
    i = 1
    while i < n:            # wordt log(n) keer uitgevoerd
        print(i)            # body O(1)
        i *= 2 # Let op: i verdubbelt elke keer

# Oef2 ###############################################

# 1: worst case: O(n)
# 2: best case: O(1)
# 3: worst case: we zoeken een bovengrens aan de tijdsduur.

# Oef3 ###############################################
"""
buitenste lus: i -> n aanroepen
binnenste lus: j loopt van i+1 tot n-1, dus gemiddeld (n-1/2) stappen
totaal aantal aanroepen van binnenste lus is daarom n.(n-1)/2
Hierdoor heeft deze routine O(n^2)
"""

# 1: O(n^2)
# 2: sets hebben we niet gezien.
#   moest je dit met lists doen dan heeft
#   if element in gezien: # Zoeken in een lijst is gemiddeld O(n)
#   voor sets is dit sneller. Hierdoor wordt de ganse routine O(n)
# 3: Door het efficient zoeken in sets is v2 het efficientst.
