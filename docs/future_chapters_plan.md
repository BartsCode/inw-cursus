# Plan voor Hoofdstukken 1-3 (INW2)

Dit document schetst de voorgestelde structuur en inhoud voor de hoofdstukken 1,2 en 3 van de cursus "INW2: Algoritmische en numerieke methoden". Deze structuur volgt logisch op de voorgaande hoofdstukken (1-6)(INW1) en richt zich op het realiseren van de elementen van **SMD 07.01.01** uit het leerplan (`leerplan_wewi.md`), met name:

*   Algoritmen en datastructuren
*   Algoritmische technieken
*   Numerieke methodes
*   Efficiëntie en duurzaamheid

## Hoofdstuk 1: Introductie tot Algoritmen en Efficiëntie

*   **1.1 Wat is een Algoritme?**
    *   Definitie, eigenschappen (correctheid, eindigheid, etc.)
    *   Voorbeelden buiten code (bv. recepten)
*   **1.2 Efficiëntie: Waarom is het Belangrijk?**
    *   Introductie tijd- vs. ruimtecomplexiteit
    *   Impact van grote datasets
    *   Link naar 'duurzaamheid' (energieverbruik, geheugengebruik)
*   **1.3 Meten van Efficiëntie: Big O Notatie**
    *   Conceptuele introductie: O(1), O(log n), O(n), O(n²), O(2^n)
    *   Focus op vergelijken van groeisnelheden, niet op formele afleiding
*   **1.4 Analyse van Eenvoudige Algoritmen**
    *   Analyse van lussen (for, while)
    *   Basis lijstoperaties (zoeken, toevoegen)
    *   Vergelijking: lineair zoeken O(n) vs. index toegang O(1)
*   **1.5 Oefeningen: Analyse en Vergelijking**
    *   Eenvoudige codefragmenten analyseren op complexiteit
    *   Vergelijken van verschillende (simpele) oplossingen voor een probleem

## Hoofdstuk 2: Algoritmische Technieken

(Gebaseerd op leerplan LPD 5)

*   **2.1 Verdeel en Heers (Divide and Conquer)**
    *   Concept uitleggen
    *   Voorbeeld: Binair zoeken (vereist gesorteerde lijst)
*   **2.2 Greedy Algoritmen (Gretig)**
    *   Concept: lokaal optimale keuzes maken
    *   Voorbeeld: Wisselgeldprobleem
*   **2.3 Recursie (Verdieping)**
    *   Herhaling vanuit functieperspectief
    *   Complexere voorbeelden: Faculteit, Fibonacci
    *   Conceptuele uitleg eenvoudige sorteeralgoritmes (bv. selection sort)
*   **2.4 Brute Force**
    *   Concept: alle mogelijkheden proberen
    *   Eenvoudige voorbeelden (bv. wachtwoord raden met beperkte set)
*   **2.5 Oefeningen: Toepassen van Technieken**
    *   Problemen oplossen met de aangeleerde technieken

## Hoofdstuk 3: Numerieke Methoden

(Gebaseerd op leerplan LPD 6)

*   **3.1 Introductie: Exact vs. Benaderend**
    *   Waarom numerieke methoden?
    *   Beperkingen van computers (bv. floating-point)
*   **3.2 Fouten in Numerieke Methoden**
    *   Korte bespreking afrondingsfouten, truncatiefouten
*   **3.3 Toepassing: Nulpuntbepaling**
    *   Conceptuele uitleg/voorbeeld van een methode (bv. Bisectiemethode)
*   **3.4 Toepassing: Numerieke Integratie**
    *   Conceptuele uitleg/voorbeeld (bv. Trapeziumregel)
*   **3.5 Gebruik van Softwarebibliotheken**
    *   Benutten van bestaande bibliotheken (`math`, eventueel `numpy` introductie)
    *   Belang van documentatie lezen
*   **3.6 Oefeningen: Implementatie/Gebruik**
    *   Eenvoudige methoden zelf implementeren
    *   Bestaande bibliotheekfuncties gebruiken voor complexere problemen

## Verdere Overwegingen

*   **Softwarebibliotheken:** Blijven integreren doorheen de hoofdstukken waar relevant. 