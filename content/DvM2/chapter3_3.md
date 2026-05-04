
# 3.3 Toepassing: Nulpuntbepaling

## Het probleem:
Je kent een functie, die kan je biijvoorbeeld zo implementeren:

```python
def fun(x):
    return x**5 - 3*x + 1
```

Stel nu je kent een interval [a, b] waarbinnen een nulwaarde ligt.
Definieer een functie die het nulpunt vindt met maximaal een absolute fout `tol` (van tolerantie).
De functie kan m.a.w. zo aangeroepen worden:

`nulwaarde(functie,a,b,tol)`

![Nulpunt](/images/Nulpunt.png)

Je kan met andere woorden `functies ook als argument meegeven` in python!  
Op deze manier kunnen we algoritmen bouwen op functies zonder te specifieren over welke functie het gaat.

Maak nu zelf deze algoritmen volgens de tips hieronder beschreven:

---

## De Gridsearch-methode

Dit is een **Brute force** methode, waarbij we het gegeven interval [a,b] doorstappen in gelijke intervalstappen,
en dit proces herhalen op het interval dat het nulpunt bevat.


- Gebruik dit principe om een algoritme `Gridsearch(functie,a,b,tol)` op te stellen via de Brute force methode

**Kenmerken:**
- Eenvoudig te implementeren
- Zeer robuust (vindt altijd een nulpunt als de stapgrootte klein genoeg is)
- Traag en inefficiënt in vergelijking met andere methoden
- Vereist een vooraf gedefinieerde stapgrootte of recursieve verfijning

---

## De Bissectie-methode

**Voorwaarde voor deze methode:** De functie moet continu zijn op het interval \([a, b]\) en \(f(a)\) en \(f(b)\) moeten een verschillend teken hebben (tussenwaardestelling).

De bissectiemethode (ook wel halveringsmethode) steunt op de stelling van Bolzano ( of soms ook nulpuntstelling genoemd )
die zegt dat een continue functie op een interval [a,b] waarbij f(a).f(b) < 0, steeds een nulpunt moet bevatten.  


![Bolzano](/images/Bolzano.png)

- Gebruik deze wet om een algoritme `Bissectie(functie,a,b,tol)` op te stellen dat werkt via het principe van **verdeel en heers**

**Kenmerken:**
- Gegarandeerde convergentie (bij continue functies met tekenwissel)
- Elk iteratie halveert het interval → convergeert snel
- Robuust, maar trager dan secant

---

## De Secant-methode

De secant-methode kan je zien als een variant van de Bissectie-methode, waarbij je het nulpunt schat door te veronderstellen dat de functie zich lineair gaat gedragen als [a,b] zeer klein wordt. Het nulpunt van een lineaire functie is dan beter te schatten door het nulpunt te bepalen van de rechte die door de punten (a,f(a)) en (b,f(b)) gaat. Dit nulpunt zal dichter liggen bij het echte nulpunt dan de arbitraire schatting van (a+b)/2 zoals in de Bissectie-methode wordt aangenomen.

![Secant](/images/Secant.png)

- Gebruik het idee van de Secant-methode en implementeer dit in het Bissectie-algoritme.

Er bestaat nog een gelijkaardige techniek: de Newton-Raphson methode. Zoek zelf maar eens uit hoe die werkt...

**Kenmerken:**
- Snellere convergentie dan bissectie 
- Vereist geen afgeleide (in tegenstelling tot Newton-Raphson)

---
---

## Praktijkvoorbeeld

We testen de methoden die je ontwikkelde met de functie: f(x)=x5−3x+1f(x)=x5−3x+1   in het interval [0,1]

Hoe wordt dit in math bibliotheek geimplementeerd?