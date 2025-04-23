# Plan voor Hoofdstukken 6-8 (INW - 5BCW)

Dit document schetst de voorgestelde structuur en inhoud voor de hoofdstukken 6, 7 en 8 van de cursus "INW - 5BCW: Introductie tot Python". Deze structuur volgt logisch op de voorgaande hoofdstukken (1-5) en richt zich op het realiseren van de elementen van **SMD 07.01.01** uit het leerplan (`leerplan_wewi.md`), met name:

*   Algoritmen en datastructuren
*   Algoritmische technieken
*   Numerieke methodes
*   Efficiëntie en duurzaamheid

## Hoofdstuk 6: Introductie tot Algoritmen en Efficiëntie

*   **6.1 Wat is een Algoritme?**
    *   Definitie, eigenschappen (correctheid, eindigheid, etc.)
    *   Voorbeelden buiten code (bv. recepten)
*   **6.2 Efficiëntie: Waarom is het Belangrijk?**
    *   Introductie tijd- vs. ruimtecomplexiteit
    *   Impact van grote datasets
    *   Link naar 'duurzaamheid' (energieverbruik, geheugengebruik)
*   **6.3 Meten van Efficiëntie: Big O Notatie**
    *   Conceptuele introductie: O(1), O(log n), O(n), O(n²), O(2^n)
    *   Focus op vergelijken van groeisnelheden, niet op formele afleiding
*   **6.4 Analyse van Eenvoudige Algoritmen**
    *   Analyse van lussen (for, while)
    *   Basis lijstoperaties (zoeken, toevoegen)
    *   Vergelijking: lineair zoeken O(n) vs. index toegang O(1)
*   **6.5 Oefeningen: Analyse en Vergelijking**
    *   Eenvoudige codefragmenten analyseren op complexiteit
    *   Vergelijken van verschillende (simpele) oplossingen voor een probleem

## Hoofdstuk 7: Algoritmische Technieken

(Gebaseerd op leerplan LPD 5)

*   **7.1 Verdeel en Heers (Divide and Conquer)**
    *   Concept uitleggen
    *   Voorbeeld: Binair zoeken (vereist gesorteerde lijst)
*   **7.2 Greedy Algoritmen (Gretig)**
    *   Concept: lokaal optimale keuzes maken
    *   Voorbeeld: Wisselgeldprobleem
*   **7.3 Recursie (Verdieping)**
    *   Herhaling vanuit functieperspectief
    *   Complexere voorbeelden: Faculteit, Fibonacci
    *   Conceptuele uitleg eenvoudige sorteeralgoritmes (bv. selection sort)
*   **7.4 Brute Force**
    *   Concept: alle mogelijkheden proberen
    *   Eenvoudige voorbeelden (bv. wachtwoord raden met beperkte set)
*   **7.5 Oefeningen: Toepassen van Technieken**
    *   Problemen oplossen met de aangeleerde technieken

## Hoofdstuk 8: Numerieke Methoden

(Gebaseerd op leerplan LPD 6)

*   **8.1 Introductie: Exact vs. Benaderend**
    *   Waarom numerieke methoden?
    *   Beperkingen van computers (bv. floating-point)
*   **8.2 Fouten in Numerieke Methoden**
    *   Korte bespreking afrondingsfouten, truncatiefouten
*   **8.3 Toepassing: Nulpuntbepaling**
    *   Conceptuele uitleg/voorbeeld van een methode (bv. Bisectiemethode)
*   **8.4 Toepassing: Numerieke Integratie**
    *   Conceptuele uitleg/voorbeeld (bv. Trapeziumregel)
*   **8.5 Gebruik van Softwarebibliotheken**
    *   Benutten van bestaande bibliotheken (`math`, eventueel `numpy` introductie)
    *   Belang van documentatie lezen
*   **8.6 Oefeningen: Implementatie/Gebruik**
    *   Eenvoudige methoden zelf implementeren
    *   Bestaande bibliotheekfuncties gebruiken voor complexere problemen

## Verdere Overwegingen

*   **Datastructuren:** Andere structuren (stack, queue, tree, graph) kunnen later of geïntegreerd worden indien nodig voor specifieke algoritmes/problemen.
*   **Externe Gegevensbronnen (LPD 3):** Kan een apart hoofdstuk worden (bv. H9: Werken met Bestanden - tekst, CSV, JSON) of eerder geïntegreerd worden.
*   **Softwarebibliotheken:** Blijven integreren doorheen de hoofdstukken waar relevant. 