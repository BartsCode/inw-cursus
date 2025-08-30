# 2.3 print()

Als je in Python een naam tegenkomt, gevolgd door haakjes zoals bij `print(...)`, dan weet je dat je te maken hebt met een functie. Functies zullen we later in detail behandelen, maar nu we weten wat variabelen en expressies zijn, kunnen we hier dieper ingaan hoe we print() juist kunnen gebruiken.

Kort gezegd drukt print(...) alle waarden af van de **argumenten** die tussen de haakjes staan. Deze argmumenten moeten steeds gescheiden worden door een komma. Een argument kan zowel een variabele naam zijn, of een **expressie**. 

Een expressie is een combinatie van één of meerdere waardes (zoals strings, integers, of floats) met behulp van operatoren, die dan een nieuwe waarde oplevert. Je kunt je expressies dus voorstellen als berekeningen.

<pre><code>a = "Hallo"
b = "Elise"

print(a,b) # voorbeeld van een aanroep met 2 argumenten (twee variabele namen).
print(2*(a+" ") + b) # voorbeeld van een aanroep met 1 argument (een expressie)
print("De som van",2,"en",3,"is",2+3) # voorbeeld van een aanroep met 5 argumenten
print(f"De som van 2 en 3 is {2+3}") # doet hetzelfde als vorige lijn met 1 expressie.
</pre></code>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Je ziet de aanhalingstekens van strings automatisch weggelaten worden. Expressies worden eerst uitgerekend en enkel de uitkomst wordt afgedrukt. Bij meerdere argumenten wordt de komma standaard vervangen door een spatie (" "). Elke printopdracht begint standaard op een nieuwe lijn.

Dit standaardgedrag kunnen we ook veranderen. Je doet dit door de betreffende variabele een andere waarde te geven. 

1. De variabele `sep` regelt de separatie van de uitvoer tussen de argumenten. Standaard is die ingesteld op `sep=" "`, zodat de komma's vervangen wordt door een spatie. Als dit OK is, moet je niets doen. Vervang je de separator door een komma (sep=","), dan worden alle argumenten bij uitvoer gescheiden door een komma.

2. De variabele `end` regelt het eindsymbool. Standaard is dit ingesteld op `end="\n"` , Dit is een speciaal karakter dat een *newline* symbool voorsteld. Hierdoor wordt de volgende print-opdracht op een nieuwe lijn gestart.  Vervang je dit door bv. een lege string (`end=""`), dan zal de volgende printopdracht achter de vorige printopdracht worden gezet zonder over te gaan naar een nieuwe lijn.

<pre><code>
print("De som van",2,"en",3,"is",2+3,sep=" / ",end=" $ ") # separator en 
print(f"De som van 2 en 3 is {2+3}") 					  # end-symbool vervangen
</pre></code>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


