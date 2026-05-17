

# 3.4 Numerieke Afgeleiden

Stel je voor: je hebt een wiskundige functie, zoals f(x) = x². Je weet dat de exacte afgeleide f'(x) = 2x is. Maar wat als je een functie hebt zonder mooie formule, of alleen meetdata? Dan moet je de afgeleide **numeriek benaderen**.

In deze les duiken we in drie methodes om de afgeleide te schatten met Python. We ontdekken dat computers, door de manier waarop ze rekenen, een strijd voeren tussen twee soorten fouten. Het begrijpen van deze strijd is de sleutel tot het kiezen van de juiste methode.

---

## 1. De basis: de definitie van de afgeleide herhalen

De exacte afgeleide van f in punt x is gedefinieerd als een limiet:

![afgeleide](/images/afgeleide.png)

Numeriek differentiëren betekent dat we deze limiet niet exact nemen, maar een **hele kleine, maar eindige h** kiezen. Laten we dit direct in Python proberen voor f(x)=x² in het punt x=1 .

```python
def f(x):
    return x**2

x = 1.0
exact = 2*x # De echte afgeleide is 2

 # We proberen verschillende waarden voor h
for h in [0.1, 0.01, 0.001]:
    benadering = (f(x + h) - f(x)) / h
    fout = abs(exact - benadering)
    print(f"h={h:.3f} -> benadering={benadering:.6f}, fout={fout:.6f}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Logisch: hoe kleiner h, hoe beter de benadering. Maar dit blijkt **niet altijd waar** te zijn...

## Methode 1: Voorwaartse differentiatie

Dit is de formule die we net gebruikten. Het heet de voorwaartse methode omdat je vooruit kijkt van x naar x+h.

![voorwaarts](/images/voorwaarts.png)

Laten we voorgaande experiment herhalen, maar nu met extreem kleine h:

```python
def f(x):
    return x**2

x = 1.0
exact = 2.0

print("Voorwaartse differentiatie:")
print(f"{'h':<15} {'benadering':<20} {'fout'}")
print("-" * 45)

for h in [1e-5, 1e-10, 1e-15, 1e-17]:
    benadering = (f(x + h) - f(x)) / h
    fout = abs(exact - benadering)
    print(f"{h:<15} {benadering:<20.15f} {fout:.15f}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

**Wat gebeurt hier?!** Eerst wordt de fout kleiner, maar bij h=10⁻¹⁵ is hij ineens enorm, en bij h=10⁻¹⁷ slaat de benadering volledig op hol.


### De oorzaak: twee soorten fouten in gevecht

De totale fout in onze benadering is de som van twee concurrerende problemen:

**📐 A. Truncatiefout (afbreekfout)** – Dit is de wiskundige fout die we maken door de limiet te negeren.  
Als h halveert, halveert de truncatiefout. → Om dit type fout te minimaliseren moeten we een **zo klein mogelijke h**.

**💻 B. Afrondingsfout (ronding)** – Een computer slaat getallen op met een beperkt aantal decimalen (ongeveer 15-16 significante cijfers voor een float). Bij de berekening f(x+h)−f(x) trekken we twee bijna gelijke getallen van elkaar af. We verliezen dan veel significante cijfers. Dit heet **'catastrophic cancellation'**.

Stel dat de computer f(x+h) en f(x) met een kleine relatieve fout ϵ opslaat (de machineprecisie). De absolute fout in de teller is dan ongeveer ϵ⋅f(x). Als we dit delen door een heel kleine h, wordt deze fout uitvergroot tot ϵ⋅f(x)/h. Als we h halveren, verdubbelt de afrondingsfout! → Om deze fout te minimalizeren willen we een **zo groot mogelijke h**.

**⚖️ Optimale h** – De optimale h ligt dus niet bij heel grote h-waarden, noch bij heel kleine h-waarden, maar ergens tussenin waar de truncatiefout en de afrondingsfout van dezelfde orde worden. Via een speciale techniek (genaamd Taylor reeksen) kan men bewijzen dat de beste h gegeven wordt door de functie:

![h1](/images/h1.png)

Hierin is ε<sub>f</sub> de machine-precisie waarmee de berekening wordt uitgevoerd (bv voor float in Python is dat van de orde 10⁻¹⁵)
en x<sub>c</sub> is de typische schaal waarover de functie van vorm verandert. Bij afwezigheid van enige informatie over deze schaal, kan men dikwijls x<sub>c</sub>=x gebruiken (tenzij natuurlijk x=0).


## Methode 2: Achterwaartse differentiatie 

Deze methode is bijna identiek, maar kijkt achteruit:

![achterwaarts](/images/achterwaarts.png)

De prestaties en problemen zijn exact hetzelfde als bij de voorwaartse methode. De truncatiefout is opnieuw orde h en de afrondingsfout is identiek. In de praktijk maakt het dus niet uit welke van de twee je kiest.

## Methode 3: Centrale differentiatie - de slimme truc

Door het gemiddelde te nemen van bovenstaande methoden (voorwaartse diff. + achterwaartse diff.)/2,  gebruiken we informatie van beide kanten van het punt x. Dit levert volgende benadering voor de afgeleide:

![centraal](/images/centraal.png)

Men noemt dit **centrale differentiatie**. Is dit zoveel beter? Laten we dezelfde test doen.

```python
def f(x):
    return x**2

x = 1.0
exact = 2.0

print("\nCentrale differentiatie:")
print(f"{'h':<15} {'benadering':<25} {'fout'}")
print("-" * 50)

for h in [1e-4, 1e-5, 1e-10, 1e-15, 1e-17]:
    benadering = (f(x + h) - f(x - h)) / (2 * h)
    fout = abs(exact - benadering)
    print(f"{h:<15} {benadering:<25.15f} {fout:.15f}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

De fout bij h=10⁻⁵ is al nul tot machineprecisie! Zelfs bij h=10⁻¹⁵ is de fout nog steeds duizend keer kleiner dan de fout bij de voorwaartse methode met dezelfde h. Waarom? Men kan bewijzen dat, in tegenstelling tot voorgaande methoden, de truncatiefout niet meer van orde h is, maar van orde h^2, wat veel sneller klein wordt.

Zoals bij de voorwaartse of achterwaartse differentiatie kan men bij de centrale differentiatie op analoge manier schatten welke h-waarde optimaal werkt.
Deze schatting levert:

![h2](/images/h2.png)

Ga na welke optimale h-waarde deze formule voorspelt voor voorgaand probleem.


---

## Vuistregels voor je eigen projecten

> 💡 **Begin met Centraal**  
> Tenzij je een heel goede reden hebt, gebruik altijd de centrale differentiatie. De nauwkeurigheid is vele malen beter voor dezelfde rekenkosten.

> 📏 **Optimale h**  
> Voor de centrale methode ligt een goede startwaarde voor h rond de derdemachtswortel van de machineprecisie. In Python met float64 is dat (10⁻¹⁵)^(1/3) ≈ 10⁻⁵. Experimenteer hier een beetje omheen.

> ⚠️ **Begrijp de limiet**  
> Onthoud dat een kleinere h **niet altijd beter** is. Als je resultaten onverwacht slechter worden bij een hele kleine h, ben je de afrondingsgrens aan het overschrijden.

📚 **Verder lezen:** Er bestaan ook methoden om de kleinste fout op te zoeken, zoals **de methode van Ridders**. Deze vallen echter buiten de scope van deze inleidende cursus.
	
---
# Oefeningen


- Schrijf een klein programma dat de machineprecisie ε van jouw computer bepaalt.  
Dit is de kleinste waarde waarvoor 1.0 + ε ≠ 1.0 in floating-point.  
Tip: Gebruik een while-lus die ε steeds halveert tot 1.0 + ε == 1.0.

- Zoek in de module `numpy` de functie `gradient()` op. Hoe werkt deze?  
  Welke differentiemethode gebruikt numpy standaard? Test hem op f(x)=x² in x=1.

- Schrijf een programma dat voor x=1 de waarde van a zoekt waarvoor 
  f(x) = a<sup>x</sup> gelijk is aan zijn eigen afgeleide (dus f(x) = f'(x)). 
  Gebruik numerieke differentiatie en een zoekalgoritme naar keuze.
  (Tip: de analytische oplossing is a ≈ 2.71828).
  
- Breid je kennis uit naar de tweede afgeleide. De centrale differentie voor f''(x) is:  
![tweedeAfgeleide](/images/tweedeAfgeleide.png)  
Test deze formule voor f(x) = x⁴ in x=1 (exact: f''(1) = 12)  
Zoek experimenteel de optimale h via een tabel zoals we voor centrale afgeleide in de theorie deden.

