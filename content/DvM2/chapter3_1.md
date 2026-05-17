# 3.1 Introductie: Exact vs. Benaderend

Wanneer we voor het eerst leren programmeren, gaan we er vaak vanuit dat de computer perfect rekent. 10/2 is altijd 5, en 0.1 + 0.2 zou 0.3 moeten zijn. In de echte wereld van digitale rekenkracht is dat laatste helaas niet altijd waar.

Dit hoofdstuk introduceert het fundamentele onderscheid tussen **exacte wiskunde** (zoals we die op papier doen) en **numerieke benadering** (zoals de computer die uitvoert).

## Waarom numerieke methoden?

In de wiskunde en natuurkunde bestaan er exacte, analytische oplossingen. Denk aan de stelling van Pythagoras (a² + b² = c²) of het oplossen van een eenvoudige tweedegraadsvergelijking.

Echter, in de praktijk van wetenschap en techniek stuiten we op problemen die **niet exact op te lossen zijn met pen en papier**:
- Het voorspellen van het weer (chaotische differentiaalvergelijkingen).
- Het berekenen van de baan van een raket met variabele zwaartekracht.
- Het vinden van de wortel van een vergelijking als \(x⁵ -3x + 1 = 0\).

Voor deze problemen gebruiken we **Numerieke Methoden** (Numerieke Wiskunde). Dit is de kunst om een wiskundig probleem te vertalen naar een reeks eenvoudige optellingen, vermenigvuldigingen en vergelijkingen die een computer wél kan uitvoeren. Het resultaat is geen perfect exact antwoord, maar een **benadering** die *goed genoeg* is.

## Beperkingen van computers: De valkuil van Floating-Point

De belangrijkste reden waarom we niet blind kunnen vertrouwen op 0.1 + 0.2 == 0.3 is de manier waarop computers getallen opslaan.

Computers werken binair (met nullen en enen). Gehele getallen (integers) kunnen exact worden weergegeven. Maar zodra we een kommagetal (een *floating-point number*) introduceren, treden er inherente beperkingen op.

**Het bekende voorbeeld:**
Probeer het volgende in Python (of een andere taal):

```python
print(0.1 + 0.2)
 # Verwachte output: 0.3
 # Werkelijke output: 0.30000000000000004
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>
 
 
Waarom gebeurt dit?
Net zoals wij in het decimale stelsel de breuk 1/3 niet exact kunnen opschrijven (het wordt 0.3333...), kan de computer de breuk 1/10 (0.1) niet exact opslaan in het binaire stelsel. Het wordt een oneindig repeterende binaire breuk. Omdat het computergeheugen eindig is, moet de computer deze breuk afkappen of afronden.

Deze kleine afrondingsfout is meestal verwaarloosbaar klein (ongeveer 10⁻¹⁶), maar kan zich opstapelen tot catastrofale fouten in lange berekeningen of simulaties.

## Gevolgen voor de programmeur

In de numerieke wiskunde moeten we daarom twee belangrijke lessen onthouden:

1. Vergelijk nooit floats met == (is gelijk aan).
Gebruik in plaats daarvan een tolerantie (epsilon) om te kijken of twee getallen "dicht genoeg" bij elkaar liggen.

```python
 # FOUT
if x == 0.3: ...

 # GOED
epsilon = 1e-9
if abs(x - 0.3) < epsilon: ...
```

2. Bewustzijn van foutaccumulatie.
Naast het simpelweg vergelijken van getallen, is het tweede grote gevaar van numerieke benadering **foutaccumulatie**. Dit is het fenomeen waarbij minuscule afrondingsfouten zichzelf versterken naarmate een berekening langer duurt of meer stappen doorloopt.

Dit principe wordt ook aangehaald door de wiskundige Dr. Ian Malcolm in Jurassic Park, die waarschuwt voor de onvoorspelbaarheid die ontstaat wanneer uitgestorven diersoorten opnieuw worden geïntroduceerd in een ecosysteem waarin ze niet thuishoren. Hij illustreert dit door twee waterdruppels over de hand van zijn tegenspeler te laten lopen: door minimale verschillen in de beginpositie volgen deze druppels een duidelijk verschillend pad. Hij vernoemt hierbij het **vlindereffect**:
![ButterflyEffect](/images/ButterflyEffect.png)

## Voorbeeld: De Lorenz-attractor (Het Vlindereffect)

Een klassiek en visueel voorbeeld van hoe kleine numerieke fouten gigantische gevolgen hebben, is de **Lorenz-attractor**. Dit model werd in de jaren '60 ontdekt door meteoroloog Edward Lorenz toen hij probeerde het weer te voorspellen met een vroege computer.

Hij gebruikte een stelsel van drie eenvoudige bewegingsvergelijkingen:
1. `vₓ = σ(y − x)`
2. `vᵧ = x(ρ − z) − y`
3. `vz = xy − βz`

**Het legendarische verhaal:**
Lorenz wilde een simulatie opnieuw afspelen vanaf het midden. Hij typte de waarden van x, y, z over van een eerdere printout. Omdat de computer intern met 6 decimalen rekende, maar de printout er slechts 3 toonde (`0.506` in plaats van `0.506127`), startte hij de simulatie met een **fout van minder dan 0.1%**.

Na een korte tijd volgde de weersvoorspelling op het scherm een totaal andere weg dan de eerste run. Een minuscule afrondingsfout in de beginvoorwaarde leidde tot een compleet andere uitkomst. Dit werd later bekend als **"Het Vlindereffect"** : *Kan het fladderen van een vlindervleugel in Brazilië een tornado in Texas veroorzaken?*



#### Visualisatie in Python (Foutaccumulatie)

Hieronder zie je een vereenvoudigd Python-script dat twee simulaties van de Lorenz-attractor naast elkaar laat lopen. Blauw is de 'exacte' start, Rood start met een fout van `0.001` in de z-coordinaat.

```python
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from scipy.integrate import solve_ivp

 # Lorenz systeem: geeft de snelheid weer als functie van de positie
def lorenz(t, xyz):
    x, y, z = xyz
    return [10*(y - x), x*(28 - z) - y, x*y - 8/3*z]

 # Tijd en startpunten: de "beginvoorwaarden"
t = np.linspace(0, 20, 2000)
start1 = [1, 1, 14]
start2 = [1, 1, 14.001]

 # Simuleer: bereken het pad van beide deeltjes:
traj1 = solve_ivp(lorenz, [0,20], start1, t_eval=t).y
traj2 = solve_ivp(lorenz, [0,20], start2, t_eval=t).y

 #------------------------------------------------------
 # De rest dient om de grafieken te maken - 
fig = plt.figure(figsize=(10,7))
ax = fig.add_subplot(111, projection='3d')
ax.set_xlim([-20, 20])
ax.set_ylim([-30, 30])
ax.set_zlim([0, 50])
ax.set_xlabel("X"); ax.set_ylabel("Y"); ax.set_zlabel("Z")
ax.set_title("Simulatie: De Lorenz-attractor")

lijn1, = ax.plot([], [], [], 'b-',  linewidth=1.5, label="traject1")
lijn2, = ax.plot([], [], [], 'r--', linewidth=1.5, label="traject2")

 # Huidige positie als dikke stip
punt1, = ax.plot([], [], [], 'bo', markersize=8, label="_nolegend_")
punt2, = ax.plot([], [], [], 'rs', markersize=8, label="_nolegend_")
ax.legend()

 # Initialisatie: maak lijnen leeg
def init():
    lijn1.set_data([], []); lijn1.set_3d_properties([])
    lijn2.set_data([], []); lijn2.set_3d_properties([])
    punt1.set_data([], []); punt1.set_3d_properties([])
    punt2.set_data([], []); punt2.set_3d_properties([])
    return lijn1, lijn2, punt1, punt2

 # Update functie: toon data tot en met frame i
def update(i):
    # Bepaal het venster: van max(0, i-100) tot i
    start_idx = max(0, i - 100)
    
    # Toon alleen de laatste 100 punten als "staart"
    lijn1.set_data(traj1[0, start_idx:i], traj1[1, start_idx:i])
    lijn1.set_3d_properties(traj1[2, start_idx:i])
    
    lijn2.set_data(traj2[0, start_idx:i], traj2[1, start_idx:i])
    lijn2.set_3d_properties(traj2[2, start_idx:i])
    
    # Toon huidige positie als apart punt
    punt1.set_data([traj1[0, i-1]], [traj1[1, i-1]])
    punt1.set_3d_properties([traj1[2, i-1]])
    
    punt2.set_data([traj2[0, i-1]], [traj2[1, i-1]])
    punt2.set_3d_properties([traj2[2, i-1]])
    
    return lijn1, lijn2, punt1, punt2

 # Animatie
anim = FuncAnimation(fig, update, frames=len(t), 
                     init_func=init, interval=20, blit=False)
plt.show()
```
Copieer dit programma naar Idle en run het programma. (Vergeet de bibliotheken *mathplotlib* en *scipy* niet te installeren indien dit nog niet gebeurd is)
Verander de startposities in het voorbeeld, en zie wat de gevolgen zijn voor het verdere verloop van deze functie.

# Conclusie

De gulden regel van numerieke wiskunde:

**"Een numeriek resultaat zonder foutafschatting is geen resultaat, maar een gok."** 

Of concreter: tracht bij numerieke benaderingen altijd de grootte-orde van de fout te kennen. Is de fout 10⁻³ of 10⁻¹²?  
Dat verschil bepaalt of je simulatie bruikbaar is of niet.

Het vlindereffect herinnert ons eraan dat we nooit mogen vergeten dat de computer een **benaderend rekenapparaat** is,  
geen perfect wiskundig orakel. Want voor je het weet loopt er een Tyrannosaurus los in je achtertuin! 🦖


