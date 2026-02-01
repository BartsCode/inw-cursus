# 6.1 Openen van bestanden

We kunnen al heel wat op de computer programmeren, maar alles gaat nu nog verloren als we de computer uitschakelen. Dat is spijtig. Hoog tijd dus dat we leren onze belangrijke data weg schrijven naar de harde schijf.

## Soorten bestanden

Er zijn twee soorten bestanden:

1. **Tekstbestanden** zijn bestanden die alleen leesbare tekens bevatten (zoals letters, cijfers en symbolen) en die bestaan uit charakters zoals je die op een toetsenbord intypt. Ze kunnen worden bewerkt met een willekeurige teksteditor en hebben vaak extensies zoals .txt, .csv of .xml.
   
2. **Binaire bestanden** zijn bestanden die je niet rechtstreeks kunt lezen met een teksteditor. Het zijn bestanden die data opslaan in binair formaat (nullen en enen) die door specifieke software moet worden geïnterpreteerd. Voorbeelden zijn afbeeldingen, uitvoerbare programma's of gecomprimeerde bestanden (bijv. .jpg, .exe, .zip).

In dit hoofdstuk zullen we ons beperken tot het lezen en schrijven van tekstbestanden.

## Handles en pointers

Het lezen van tekstbestanden werkt via twee kernconcepten:

1. De **Handle** wordt gecreerd als je een bestand opent. Het is een soort digitale toegangspas tot het fysieke bestand op harde schijf. 

2. Een **pointer** (een aanwijzer) onthoudt waar je bent in het bestand, net zoals bij het lezen van een boek: daar gebruik je je vinger om bij te houden waar je aan het lezen bent.

## Openen en sluiten

Om een tekstbestand te lezen, moet je het bestand eerst openen, dan de inhoud lezen, en tenslotte het bestand sluiten.

Om een bestand te openen, gebruik je de `open()` functie. Deze functie krijgt twee argumenten: 

1. Het eerste argument is **de naam van het bestand**. Als het bestand niet in de huidige directory staat, moet je het complete pad naar het bestand opgeven zodat Python het kan vinden. 

2. Het tweede argument is **de modus**. Deze geeft aan hoe Python het bestand moet behandelen. De mogelijke waarden zijn:
	- "r" (read) voor het lezen van bestanden
	- "w" (write) voor het schrijven van bestanden
	- "a" (append) voor het toevoegen aan bestaande bestanden

`open()` returnt de handle die je verder nodig hebt om in het programma naar het betreffende document te verwijzen. Hier een voorbeeld van het openen van een bestand met naam "data.txt":

```python
fp = open("data.txt", "r") # fp bevat nu de file-pointer
```

Eindigen met hete bestand doe je met `close()`. Deze functie heeft geen parameters nodig, maar je dient de filepointer ervoor te zetten die het moet afsluiten, gescheiden door een punt. Het is belangrijk dat elk bestand dat je opent ook gesloten wordt voor het programma eindigt, anders kan je bestand beschadigd raken. Het bewerken van een bestand ziet er dus steeds zo uit:

```python
mijnPointer = open("data.txt", "r") 
 # Hier volgen de bewerkingen met het bestand...
 # Nu sluiten we het bestand:
mijnPointer.close() 
```
Deze speciale manier van de combinatie `filepointer.close()` komt omdat `close()` een **methode** is van het **object** filepointer. Objecten en de methoden die je op objecten kunt toepassen worden in python gebundeld in zogenaamde **klassen**. Het gebruik van klassen noemen we **Object-georienteerd programmeren**. Dit komt daarom heel vaak voor. Wie meer wil weten over Python raad ik zeker aan om klassen verder te doorgronden!