# Herhalingsoefeningen: H4

Dit zijn herhalingsoefeningen bij hoofdstuk 4.
De oefeningen stammen uit oudere toetsen. Je zou ze m.a.w. zonder cursus moeten kunnen oplossen. Herhaal daarom eerst H4 indien deze leerstof niet vers in het geheugen zit. Probeer deze oefeningen daarna eerst zonder computer op te lossen, net als bij een toets. Controleer daarna je oplossing met behulp van python-IDLE.

---

## Oefening 1: Vertaal naar West-Vlaams
* **Moeilijkheidsgraad:** ★☆☆☆☆

Schrijf een programma dat de gebruiker vraagt om een tekst in te voeren. Vervang vervolgens alle voorkomens van de letter 'g' (zowel hoofdletter als kleine letter) door 'h'. Print de aangepaste tekst.

Voorbeeld:  
Invoer: `"Ge hebt goed gewerkt, gun uw geheugen gerust een pause."`  
Output: `"He hebt hoed hewerkt, hun uw heheugen herust een pause."`

---

## Oefening 2: Lijst-duplicaten verwijderen
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat een lijst met getallen ontvangt en alle duplicaten verwijdert. Gebruik een for-lus of while-loop om een nieuwe lijst te maken met alleen unieke waarden. Print de nieuwe lijst.

voorbeeld:
Input: `[1, 2, 3, 2, 4, 4, 5, 3]`
Output: `[1, 2, 3, 4, 5]`

---

## Oefening 3: Gemiddelde van positieve getallen
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat de gebruiker vraagt om getallen in te voeren totdat `0` wordt ingevoerd. Sla alleen de positieve getallen op in een lijst en bereken vervolgens het gemiddelde van deze positieve getallen. Gebruik een while-loop.

Voorbeeld:  
Invoer: `3, -1, 5, 0`  
Output: `Het gemiddelde van de positieve getallen is: 4.0`

---

## Oefening 4: Lijst sorteren zonder sort()
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat een lijst met getallen sorteert zonder gebruik te maken van de ingebouwde `sort()`-functie of `sorted()`. Gebruik een while-loop en een for-lus om de lijst in oplopende volgorde te plaatsen. Print de gesorteerde lijst.

Voorbeeld:  
Input: `[3, 1, 4, 1, 5, 9, 2]`  
Output: `[1, 1, 2, 3, 4, 5, 9]`

---

## Oefening 5: Lijst verschuiven
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat een lijst ontvangt en een getal `n`. Het programma moet de lijst `n` posities naar links verschuiven. Gebruik een for-lus of while-loop en zorg ervoor dat elementen die aan het begin verdwijnen, aan het einde terugkomen.

Voorbeeld:  
Lijst: `[1, 2, 3, 4, 5]`, n = 2  
Output: `[3, 4, 5, 1, 2]`

---

## Oefening 6: Lijst-flatten
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat een geneste lijst (bijvoorbeeld `[[1, 2], [3, 4], [5, 6]]`) omzet naar een platte lijst. Gebruik een while-loop of geneste for-lus. Print de platte lijst.

Verwachte output: `[1, 2, 3, 4, 5, 6]`



---

## Oefening 7: Regel van Horner
* **Moeilijkheidsgraad:** ★★★★★

Schrijf een programma dat de regel van Horner implementeert voor het delen van een polynoom door een eerstegraadsveelterm van de vorm `x - a`. Vraag de gebruiker om de coëfficiënten van het polynoom (bijvoorbeeld voor `3x³ + 2x² - 5x + 7` zou de invoer `[3, 2, -5, 7]` zijn) en een waarde voor `a`. Gebruik een while-loop of for-lus om de deling uit te voeren volgens de regel van Horner. Print het resultaat.

Voorbeeld:  
Polynoom coëfficiënten: `[3, 2, -5, 7]`  
Nulwaarde a: 2  
```text
   3 2 -5  7
     6 16 22
2 -----------
   3 8 11 29
```


---


