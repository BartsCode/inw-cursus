# 3.2 Itereren over Lijsten

In het programmeren is iteratie een fundamenteel concept dat verwijst naar het herhaaldelijk uitvoeren van een set instructies over een verzameling gegevens. Bij lijsten betekent dit dat we over elk element in de lijst gaan en er een bewerking op uitvoeren. In dit hoofdstuk bespreken we de algemene concepten van het itereren over lijsten en hoe dit efficiënt kan worden gedaan. De algemene principes zijn van toepassing op vrijwel alle programmeertalen.

## Wat is Iteratie?

Iteratie is het proces waarbij een reeks instructies meerdere keren wordt uitgevoerd, meestal één keer voor elk element in een collectie zoals een lijst. Dit stelt ons in staat om herhalende taken uit te voeren zonder de code telkens opnieuw te schrijven.

## Manieren om over Lijsten te Itereren

Er zijn verschillende manieren om over de elementen van een lijst te itereren:

### 1. Gebruik van een `for`-lus

De meest gebruikelijke manier om over een lijst te itereren is met een `for`-lus. Hierbij wordt elk element in de lijst één voor één benaderd.

**Voorbeeld:**
```python
cijfers = [1, 2, 3, 4, 5]
for cijfer in cijfers:
  print(cijfer)
```

**Uitleg:**

- `for cijfer in cijfers:` betekent dat de lus over elk element in de lijst `cijfers` loopt.
- `cijfer` is een variabele die bij elke iteratie de waarde van het huidige element in de lijst aanneemt.
- `print(cijfer)` voert een actie uit met het huidige element. In dit geval wordt het getal uitgeprint.

Het code blok (dat de bewerkingen bevat die in de lus op elk element uitgevoerd moeten worden) komt steeds na het dubbele punt en moet je altijd indenteren. D.w.z. dat het code blok altijd naar rechts geschoven moet worden. We gebruiken hier twee spaties voor de indentatie.

### 2. Itereren over Geneste Lijsten

Bij lijsten die andere lijsten bevatten (geneste lijsten) kunnen we geneste lussen gebruiken om over alle elementen te itereren.

**Voorbeeld:**
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for rij in matrix:
    for element in rij:
        print(element)
```

**Uitleg:**

- De eerste `for`-lus itereert over elke rij in de matrix.
- De tweede `for`-lus itereert over elk element in de huidige rij.


## Veelvoorkomende Toepassingen van Iteratie

- **Gegevenstransformatie:** Toepassen van een functie of bewerking op elk element in de lijst.

  ```python
  getallen = [1, 2, 3, 4]
  kwadraten = []

  for num in getallen:
      kwadraten.append(num ** 2)

  print(kwadraten)  # Output: [1, 4, 9, 16]
  ```

- **Filteren:** Selecteren van elementen die aan een bepaalde voorwaarde voldoen.

  ```python
  getallen = [1, 2, 3, 4, 5, 6]
  even_getallen = []

  for num in getallen:
      if num % 2 == 0:
          even_getallen.append(num)

  print(even_getallen)  # Output: [2, 4, 6]
  ```

- **Sommeren:** Berekenen van de som van alle elementen in de lijst.

  ```python
  getallen = [1, 2, 3, 4, 5]
  som = 0

  for num in getallen:
      som += num

  print(som)
```