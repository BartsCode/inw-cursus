# 3.2 Fouten in Numerieke Methoden


## Absolute en relatieve fout: Wanneer is een fout "klein"?

Bij het afschatten van fouten stuiten we op een belangrijk onderscheid. Stel dat we twee metingen doen:

- De afstand van de aarde tot de maan: we zitten er 10 kilometer naast.
- De lengte van je smartphone: we zitten er 10 kilometer naast.

Beide metingen hebben dezelfde **absolute fout** (10 km). Toch voelt de eerste fout acceptabel (de maan staat immers bijna 400\,000 km ver) en de tweede absurd. Dit verschil in beleving vangen we met het begrip **relatieve fout**.

---

### Absolute fout

De absolute fout is het eenvoudigste concept: het ruwe verschil tussen de benaderde waarde x<sup>*</sup> en de exacte waarde x:

![AbsoluteFout](/images/AbsoluteFout.png)

**Wanneer gebruiken?**
Absolute fout is nuttig als alle resultaten dezelfde grootte-orde hebben, bijvoorbeeld als je telkens getallen rond de $3$ verwacht. Maar zodra getallen sterk in grootte variëren, schiet dit tekort.

---

### Relatieve fout

De relatieve fout zet de absolute fout af tegen de grootte van de exacte waarde. Het geeft een **procentueel** beeld van de afwijking:

![RelatieveFout](/images/RelatieveFout.png)

Vaak wordt dit uitgedrukt als percentage door met 100 te vermenigvuldigen.

**Voorbeeld:**

De relatieve fout van 10km op de afstand aarde-maan bedraagt 10km/400000km = 2,5×10⁻⁴.    
De relatieve fout van 10km op de grootte van een GSM (zeg 10cm) bedraagt 10km/1,0×10⁻⁴km = 10⁵.  
Je ziet hier duidelijk dat de relatieve fout op de afstand aarde-maan zeer klein is,
terwijl de relatieve fout op de grootte van de GSM belachelijk groot is.

**Wanneer gebruiken?**
Relatieve fout is bijna altijd de betere keuze, omdat het de fout **in verhouding** tot het antwoord plaatst. Een fout van 0.001 op een getal van 0.002 is gigantisch (50\%). Diezelfde fout op een getal van 1000 is verwaarloosbaar (0.0001\%).

---

### Vuistregels voor interpretatie

| Relatieve fout | Interpretatie |
|----------------|---------------|
| > 10\% 		 | Zeer onnauwkeurig. Herzie je methode of gebruik meer rekenkracht. |
| 1\% - 10\% 	 | Ruwe schatting. Bruikbaar voor eerste inzichten. |
| 0.1\% - 1\% 	 | Redelijk nauwkeurig. Geschikt voor de meeste toepassingen. |
| 0.001\% - 0.1\% | Zeer nauwkeurig. Voldoende voor technische berekeningen. |
| < 0.001\% 	 | Uitzonderlijk nauwkeurig. Vaak overbodig tenzij voor wetenschappelijk onderzoek. |

**Let op:** in domeinen zoals medische fysica of luchtvaart kan 0,1% al catastrofaal zijn. De tabel is daarom een richtlijn voor algemene technische berekeningen, niet absoluut.

---

### Een valkuil bij relatieve fout

De formule voor relatieve fout deelt door de **exacte waarde**. In de praktijk kennen we die exacte waarde vaak niet (anders hoefden we geen benadering te maken). Daarom gebruiken we in de praktijk een **schatting** van de relatieve fout:

![RelatieveFoutBenaderd](/images/RelatieveFoutBenaderd.png)

Zolang de benadering x<sup>*</sup> niet extreem ver van de waarheid ligt, is dit een aanvaardbare benadering.


---

### De gulden regel

> **Rapporteer nooit alleen een getal. Zeg altijd hoe nauwkeurig dat getal is.**

In de lessen fysica leerde je reeds dat je niet meer cijfers dient op te geven dan echt gekend zijn.  
Als echter de absolute fout gekend is, kan men dat nog professioneler doen door de fout expliciet te vermelden.

**De kernregels voor het weergeven van absolute fouten:**

1. **Absolute fout** → afronden op maximaal 2 beduidende cijfers:  
   - Eerste cijfer ≥ 2 → **1** beduidend cijfer  
   - Eerste cijfer = 1 → **2** beduidende cijfers

2. **Meting / benadering** → afronden op **dezelfde decimale positie** als de absolute fout

3. **Notatie** → `(waarde ± absolute fout)` met geschikte eenheid

❌ Dus niet: *"De oppervlakte is 2.99571 m²."*  
✅ Maar wel: *"De oppervlakte is (2.996 ± 0.015) m² ",   
wat overeenkomt met een relatieve fout van ongeveer 0,5%.*

## Hoe schat ik de fout in mijn numerieke berekening?

(Het vervolg van deze tekst maakt meer zin nadat je de oefeningen op nulwaardebepalen, integralen en afgeleiden hebt gemaakt.)

Je hebt gezien dat fouten zich kunnen opstapelen. Maar hoe weet je nu of het antwoord dat jouw berekening oplevert, betrouwbaar is? Hier zijn drie eenvoudige technieken die je bij élk numeriek probleem uit deze cursus kunt toepassen.

### 1. De "Halveringscheck" (bv. voor integralen en afgeleiden)


Dit is de meest intuïtieve methode: **doe de berekening nog eens, maar nu met de helft van de stapgrootte.**  
Het **absolute verschil** tussen deze twee resultaten is een goede schatting van de fout op het fijnste resultaat:

**Vuistregel:** Blijft het resultaat tot bijvoorbeeld vier decimalen gelijk wanneer je de stapgrootte halveert? Dan mag je die vier decimalen vertrouwen. Verandert de derde decimaal al? Dan is je resultaat slechts tot twee decimalen nauwkeurig.

### 2. De "Intervalcheck" (voor nulwaarden)

Bij methoden voor het vinden van nulpunten, zoals de bisectiemethode, werk je steeds met een interval $[a, b]$ waarvan je zeker weet dat het nulpunt erin zit. Het mooie hier is dat de fout **letterlijk zichtbaar is als de breedte van dat interval**.

Zodra het interval smaller is dan jouw gewenste nauwkeurigheid, stop je de berekening. De werkelijke fout op het midden van dat interval is dan gegarandeerd kleiner dan de helft van de intervalbreedte.

**Voorbeeld:** Als jouw laatste interval loopt van a=1.4142 tot b=1.4143, dan weet je dat het nulpunt ergens in die 0.0001 brede zone ligt. Kies je het midden als antwoord, dan is de maximale fout 0.00005.

### 3. De "Stagnatiecheck" (voor extrema en iteratieve methoden)

Bij methoden die een oplossing stap voor stap verfijnen, zie je een duidelijk patroon: de opeenvolgende antwoorden veranderen steeds minder. Het proces **stagneert** richting de ware waarde.

Zodra de verandering kleiner is dan een vooraf bepaalde tolerantie, stop je. De grootte van die laatste verandering is meteen ook een realistische schatting van de resterende fout.

**Vuistregel:** Als de waarde van je resultaat in de laatste stap nog slechts veranderde met $0.000001$, dan is je antwoord vermoedelijk correct tot op vijf decimalen.

