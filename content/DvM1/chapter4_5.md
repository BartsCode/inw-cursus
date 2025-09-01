# 4.5 Oefeningen: While Loops

In dit hoofdstuk ga je de concepten die je hebt geleerd over while-loops in de praktijk brengen. De oefeningen variëren in moeilijkheidsgraad, zodat er voor elke leerling uitdagende opdrachten zijn. Je kunt de oefeningen uitwerken in een nieuw `.py`-bestand in IDLE of een andere teksteditor.



---

### Oefening 1: Aftellen
* **Moeilijkheidsgraad:** ★☆☆☆☆

Schrijf een programma dat aftelt van 10 naar 1 en vervolgens "Start!" print. Gebruik een while-loop.

---

### Oefening 2: Raad het Getal
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat een willekeurig getal genereert tussen 1 en 100. De gebruiker moet dit getal raden. Na elke gok moet het programma aangeven of het getal te hoog, te laag of correct is. Het programma moet doorgaan totdat de gebruiker het juiste getal heeft geraden of opgeeft door 'q' in te voeren.

*Tip:* Gebruik de `random` module om een willekeurig getal te genereren.

---

### Oefening 3: Wachtwoordvalidatie
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat de gebruiker vraagt om een wachtwoord in te voeren. Het wachtwoord moet aan de volgende criteria voldoen:
- Minimaal 8 karakters lang
- Bevat ten minste één hoofdletter
- Bevat ten minste één cijfer
- Bevat ten minste één speciaal karakter (bijv. !@#$%^&*)

Het programma moet blijven vragen om een wachtwoord totdat aan alle criteria is voldaan.

*Tip:* Gebruik de `any()` functie en list comprehensions om te controleren of aan de criteria wordt voldaan.

---

### Oefening 4: Rekenmachine
* **Moeilijkheidsgraad:** ★★★☆☆

Maak een eenvoudige rekenmachine die de gebruiker vraagt om twee getallen en een operator (+, -, *, /). Het programma moet de berekening uitvoeren en het resultaat weergeven. Gebruik een while-loop om het programma te laten doorgaan totdat de gebruiker besluit te stoppen.

Voorbeeld:
```bash
Voer het eerste getal in: 5
Voer de operator in (+, -, *, /): *
Voer het tweede getal in: 3
Resultaat: 5 * 3 = 15

Wil je nog een berekening uitvoeren? (ja/nee): ja
...
```

---

### Oefening 5: Fibonacci-reeks
* **Moeilijkheidsgraad:** ★★★★☆

Schrijf een programma dat de Fibonacci-reeks genereert tot een door de gebruiker opgegeven limiet. De Fibonacci-reeks begint met 0 en 1, en elk volgend getal is de som van de twee voorgaande getallen (0, 1, 1, 2, 3, 5, 8, 13, ...).

Gebruik een while-loop om de reeks te genereren en sla de getallen op in een lijst. Print vervolgens de volledige reeks.

---

### Oefening 6: Priemgetallen
* **Moeilijkheidsgraad:** ★★★★☆

Schrijf een programma dat alle priemgetallen vindt tot een door de gebruiker opgegeven limiet. Een priemgetal is een getal groter dan 1 dat alleen deelbaar is door 1 en zichzelf.

Gebruik een while-loop voor de hoofditeratie en een geneste loop om te controleren of een getal een priemgetal is.

*Uitbreiding:* Implementeer de Zeef van Eratosthenes voor een efficiëntere berekening van priemgetallen.

---

### Oefening 7: Woordenspel
* **Moeilijkheidsgraad:** ★★★★☆

Maak een woordenspel waarbij de computer een willekeurig woord kiest uit een lijst en de gebruiker dit woord moet raden. De gebruiker raadt één letter per keer. Als de letter in het woord voorkomt, wordt deze onthuld; zo niet, dan verliest de gebruiker een leven.

Gebruik een string om bij te houden welke letters al zijn geraden en een while-loop om het spel te laten doorgaan totdat de gebruiker het woord heeft geraden of alle levens heeft verloren.

Voorbeeld:
```python
Woord: _ _ _ _ _
Levens: 6
Raad een letter: a
Goed geraden!
Woord: _ a _ _ _
Levens: 6
Raad een letter: z
Helaas, de letter z komt niet voor in het woord.
Woord: _ a _ _ _
Levens: 5
...
```

---

### Oefening 8: Quiz
* **Moeilijkheidsgraad:** ★★★★★

Maak een quizprogramma met behulp van lijsten en while-loops. De quiz moet meerdere vragen bevatten, elk met meerdere antwoordopties. De gebruiker moet het juiste antwoord kiezen.

Gebruik een Lijst om de vragen, antwoordopties en juiste antwoorden op te slaan. Gebruik een while-loop om door de vragen te itereren en de score bij te houden.

Voorbeeld:
```python
vraag0 = ["Wat is de hoofdstad van Frankrijk?", 
	   ["A. Londen", "B. Parijs", "C. Berlijn", "D. Rome"],
	   "B"]
vraag1 = ["Wie is de uitvinder van de telefoon?", 
	   ["A. Samsung", "B. Jobs", "C. Bell", "D. Proximus"],
	   "C"]
 # Voeg zelf meer vragen toe
quiz = [vraag0,vraag1]
}
```

Het programma moet:
1. De vragen in willekeurige volgorde stellen
2. De score bijhouden
3. Aan het einde de totale score weergeven
4. De mogelijkheid bieden om de quiz opnieuw te spelen