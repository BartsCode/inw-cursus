# oef 1: Schrijf een functie count_elements(lst) die via divide-and-conquer
#        het aantal elementen in een lijst teruggeeft.


'''
def count_elements(lst):
    """
    Geeft het aantal elementen in een lijst terug via divide-and-conquer.
    
    Args:
        lst: De lijst waarvan we het aantal elementen willen tellen
        
    Returns:
        int: Het aantal elementen in de lijst
    """
    # Basisgeval: lege lijst
    if not lst:
        return 0
    
    # Basisgeval: lijst met 1 element
    if len(lst) == 1:
        return 1
    
    # Verdeel de lijst in twee helften
    midden = len(lst) // 2
    linker_helft = lst[:midden]
    rechter_helft = lst[midden:]
    
    # Combineer: tel de aantallen van beide helften bij elkaar op
    return count_elements(linker_helft) + count_elements(rechter_helft)

mijn_lijst=[1,2,4,5,7,8,"a","b",["c","d"]]
print(count_elements(mijn_lijst))
'''




'''
# oef 2:
def binary_search(lijst, zoekwaarde, begin=None, eind=None):
    # Initialiseer begin en eind bij de eerste aanroep
    if begin is None:
        begin = 0
    if eind is None:
        eind = len(lijst)
    
    # Basisgeval: zoekruimte is leeg
    if begin >= eind:
        return -1
    
    # Vind het midden
    midden = (begin + eind) // 2
    
    # Basisgeval: gevonden!
    if lijst[midden] == zoekwaarde:
        return midden
    
    # Divide-and-conquer
    if lijst[midden] > zoekwaarde:
        # Zoek in linkerhelft (begin tot midden)
        return binary_search(lijst, zoekwaarde, begin, midden)
    else:
        # Zoek in rechterhelft (midden+1 tot eind)
        return binary_search(lijst, zoekwaarde, midden + 1, eind)
    
mijn_lijst=[1,2,4,5,7,8,9,11]
print(binary_search(mijn_lijst,7))
'''





'''
#oef 3:
def is_palindrome(tekst):
    # Basisgeval: lege string of 1 teken
    if len(tekst) <= 1:
        return True
    
    # Controleer eerste en laatste teken
    if tekst[0] != tekst[-1]:
        return False
    
    # Recursie op de string zonder eerste en laatste teken
    return is_palindrome(tekst[1:-1])

print("lepel:",is_palindrome("lepel"))
print("vork :",is_palindrome("vork"))
'''

#oef4
#orde nog niet gezien - eerst H1 zien!

