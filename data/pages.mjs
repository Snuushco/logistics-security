export const site = {
  baseUrl: "https://logisticsecurity.nl",
  name: "Logistic Security by Praesidion",
  providerName: "Praesidion Security",
  providerUrl: "https://www.praesidion.eu/",
  email: "info@praesidion.nl",
  phoneHref: ["+31", "46", "240", "2401"].join(""),
  phoneLabel: "+31 46 240 2401",
  updated: "2026-07-10"
};

export const regions = [
  {
    kind: "region",
    slug: "logistieke-beveiliging-limburg",
    title: "Logistieke beveiliging Limburg",
    metaTitle: "Logistieke beveiliging Limburg | Regionale aanpak",
    description: "Logistieke beveiliging in Limburg voor warehouses, distributiecentra en transportlocaties, met een locatiegerichte risicoanalyse en heldere werkafspraken.",
    label: "Limburg",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Een samenhangend beveiligingsplan voor één of meer logistieke locaties in Limburg.",
    intro: "Limburg verbindt logistieke locaties langs onder meer de A2, A67 en A73 met bestemmingen in Nederland, België en Duitsland. Die positie brengt uiteenlopende processen samen: warehouses met vaste ploegen, distributiecentra met wisselende vervoerders, buitenterreinen en locaties die ook buiten kantooruren actief zijn. Logistic Security vertaalt het feitelijke proces op uw locatie naar controlepunten, instructies en rapportage. De naam van een regio is daarbij nooit het plan; de toegang, goederenstroom en verantwoordelijkheden op het terrein vormen het vertrekpunt.",
    context: [
      "Een Limburgse operatie kan bestaan uit één compact magazijn, maar ook uit meerdere vestigingen met verschillende openingstijden en huurders. De beveiligingsvraag verandert mee met dockbezetting, piekseizoenen, nachtelijke aankomsten en de scheiding tussen kantoor, opslag en buitenterrein. Daarom brengen we per locatie de normale situatie én bekende afwijkingen in kaart.",
      "Grensoverschrijdend verkeer betekent niet automatisch een hoger risico, maar wel meer variatie in documenten, talen, aankomsttijden en vervoerders. Een werkbare instructie maakt duidelijk welke gegevens een beveiliger controleert, wie een afwijking beoordeelt en waar een voertuig mag wachten. Zo blijft de poort onderdeel van het logistieke proces in plaats van een los controlepunt.",
      "Voor organisaties met meerdere Limburgse locaties is vergelijkbaarheid van rapportages belangrijk. Een gedeelde basis voor incidentcategorieën en overdracht helpt, terwijl iedere vestiging eigen zones, contactpersonen en uitzonderingen behoudt. Dat voorkomt dat een generieke instructie lokale laadvensters, terreinindeling of bevoegdheden overschrijft."
    ],
    risks: [
      { title: "Verschillende toegangsregimes", text: "Personeel, uitzendkrachten, bezoekers en chauffeurs volgen niet altijd dezelfde route. Onduidelijke uitzonderingen kunnen tot ongecontroleerde toegang of onnodige vertraging leiden." },
      { title: "Overdracht tussen diensten", text: "Openstaande voertuigen, sleutels, defecte poorten en tijdelijke instructies moeten aantoonbaar naar de volgende ploeg of locatieverantwoordelijke worden overgedragen." },
      { title: "Docks en buitenterrein", text: "Een sluitende gevel zegt weinig als laadkuilen, trailerplaatsen of nevenpoorten buiten het afgesproken controlerondje vallen." },
      { title: "Verspreide verantwoordelijkheid", text: "Bij meerdere huurders of vestigingen moet vooraf vaststaan wie beslist over toegang, escalatie en herstelmaatregelen; de beveiliger vervangt die bedrijfsverantwoordelijkheid niet." }
    ],
    approach: [
      { title: "Locatiescan", text: "We bespreken verkeersstromen, risicovolle zones, openingstijden, bestaande techniek en de momenten waarop het normale proces verandert." },
      { title: "Werkbare postinstructie", text: "Controlehandelingen, bevoegdheden, uitzonderingen en meldlijnen worden concreet vastgelegd. Onbekende situaties krijgen een stop- en escalatiestap." },
      { title: "Gerichte uitvoering", text: "De mogelijke inzet kan bestaan uit toegangscontrole, objectbewaking, openings- en sluitrondes of toezicht op afgesproken zones, afhankelijk van de intake." },
      { title: "Evaluatie op feiten", text: "Rapportages, terugkerende afwijkingen en wijzigingen in het logistieke proces vormen de basis voor bijstelling; niet een vooraf beloofd standaardpakket." }
    ],
    faq: [
      { question: "Voor welke logistieke locaties in Limburg is deze aanpak bedoeld?", answer: "De aanpak is bedoeld voor onder meer warehouses, distributiecentra, fulfilmentlocaties, transportterreinen en logistieke bedrijfsverzamelterreinen. Of fysieke beveiliging passend is, hangt af van het risico, het bestaande proces en de gewenste controledoelen." },
      { question: "Kan één plan voor meerdere Limburgse vestigingen worden gebruikt?", answer: "Een gedeelde basis is mogelijk voor rapportage, rollen en escalatie. Per vestiging blijven een eigen terreinindeling, contactlijst, openingstijden en lokale uitzonderingen nodig. Tijdens de intake bepalen we welke onderdelen uniform kunnen zijn." },
      { question: "Hoe wordt de benodigde bezetting bepaald?", answer: "We kijken naar taken, verkeerspieken, looptijden, risicogebieden en bestaande technische maatregelen. Daarna volgt een voorstel met afgebakende werkzaamheden en aannames. We doen geen generieke toezegging over bezetting voordat de locatie is beoordeeld." }
    ],
    related: ["beveiliging-distributiecentrum-venlo", "logistieke-beveiliging-sittard-geleen", "warehouse-beveiliging", "toegangscontrole-logistiek-centrum"]
  },
  {
    kind: "region",
    slug: "beveiliging-distributiecentrum-venlo",
    title: "Logistieke beveiliging Venlo en Trade Port",
    metaTitle: "Logistieke beveiliging Venlo | Trade Port-regio",
    description: "Beveiliging voor distributiecentra en warehouses in Venlo en de Trade Port-regio, gericht op poort, docks, chauffeursstromen en terreincontrole.",
    label: "Venlo / Trade Port",
    updated: "2026-07-10",
    areaServed: ["Venlo", "Trade Port", "Greenport Venlo", "Noord-Limburg"],
    intent: "Grip op toegang, wachtrijen, docks en terreinbewegingen rond logistieke knooppunten in Venlo.",
    intro: "Venlo en de Trade Port-regio liggen bij de A67 en A73 en kennen een sterke concentratie van distributie, warehousing en internationaal wegvervoer. Op locaties met veel voertuigbewegingen moet beveiliging aansluiten op tijdsloten, slagbomen, dockplanning en veilige wachtposities. Logistic Security richt de inzet daarom in rondom de route van aankomst tot vertrek, met heldere beslismomenten voor afwijkende chauffeurs of zendingen.",
    context: [
      "Op een Venlose distributielocatie kunnen vroege aankomsten, wisselende vervoerders en pieken aan het begin van een shift tegelijk bij de toegang samenkomen. Een controle die alleen een naam afvinkt, geeft dan onvoldoende houvast. De instructie moet bepalen welke combinatie van ritnummer, kenteken, bedrijf en contactpersoon nodig is en wat er bij een mismatch gebeurt.",
      "Grote terreinen hebben vaak verschillende logistieke functies: inbound, outbound, retouren, lege emballage en parkeer- of opstelruimte. De toegestane route verschilt per bezoeker. Bewegwijzering, communicatie en fysieke controle moeten elkaar ondersteunen, zodat een chauffeur niet onbedoeld in een verkeerde zone belandt.",
      "Docks zijn een overdrachtspunt tussen vervoerder en warehouse. Openstaande deuren, gewijzigde docktoewijzing of een trailer die buiten planning blijft staan verdienen een herkenbare meldroute. De beveiliger registreert de waarneming en volgt de afgesproken escalatie; operationele vrijgave blijft bij de bevoegde locatiefunctionaris."
    ],
    risks: [
      { title: "Afwijkende vooraanmelding", text: "Een ander kenteken, vervoerder of tijdslot hoeft niet onrechtmatig te zijn, maar moet wel worden geverifieerd voordat toegang wordt verleend." },
      { title: "Druk op de poort", text: "Wachtrijen kunnen medewerkers verleiden controles in te korten. Een apart proces voor ontbrekende gegevens houdt de reguliere stroom beheersbaar." },
      { title: "Verkeerde terreinroute", text: "Chauffeurs die de taal, locatie of dockindeling niet kennen kunnen buiten de bedoelde route komen. Eenduidige aanwijzingen en zonering beperken die kans." },
      { title: "Onbewaakte overgangsmomenten", text: "Shiftwissels, pauzes en nachtovergangen vragen expliciete overdracht van voertuigen die nog wachten, tijdelijke passen en openstaande incidenten." }
    ],
    approach: [
      { title: "Poort-dock-keten uittekenen", text: "We leggen vast welke gegevens op welk moment beschikbaar zijn, wie een wijziging mag accepteren en hoe de chauffeur naar de juiste positie wordt geleid." },
      { title: "Uitzonderingen scheiden", text: "Voertuigen zonder volledige match gaan naar een afgesproken wacht- en verificatieproces, zodat snelheid nooit de enige reden voor toelating wordt." },
      { title: "Rondes op logistieke momenten", text: "Controlerondes worden gekoppeld aan relevante momenten en zones, zoals sluiting van docks of overgang naar nachtbedrijf, niet aan een willekeurige standaardroute." },
      { title: "Terugkoppeling aan planning", text: "Terugkerende afwijkingen worden herkenbaar gerapporteerd. De organisatie kan vervolgens brongegevens, vervoerdersafspraken of terreinrouting verbeteren." }
    ],
    faq: [
      { question: "Werkt Logistic Security voor locaties in de hele Venlose Trade Port-regio?", answer: "De regio kan onderdeel zijn van het werkgebied. Een concrete inzet wordt pas voorgesteld na beoordeling van adres, planning, taken en risico's. De vermelding van Trade Port beschrijft uitsluitend de geografische logistieke context." },
      { question: "Kan de beveiliger wijzigingen in een transportboeking goedkeuren?", answer: "Alleen wanneer bevoegdheden en verificatiestappen daar vooraf expliciet voor zijn vastgelegd. Bij twijfel of ontbrekende gegevens wordt de aangewezen locatiefunctionaris geraadpleegd; de beveiliger verzint geen operationele uitzondering." },
      { question: "Hoe voorkomt u dat toegangscontrole de dockplanning onnodig vertraagt?", answer: "Door de normale documentenstroom, piekmomenten en uitzonderingen vooraf te analyseren. Een duidelijke wachtroute en snelle interne verificatielijn helpen, maar een concrete doorlooptijd kan pas op basis van het locatieproces worden beoordeeld." }
    ],
    related: ["logistieke-beveiliging-limburg", "logistieke-beveiliging-sittard-geleen", "warehouse-beveiliging", "transportbeveiliging", "toegangscontrole-logistiek-centrum"]
  },
  {
    kind: "region",
    slug: "logistieke-beveiliging-sittard-geleen",
    title: "Logistieke beveiliging Sittard-Geleen en Holtum",
    metaTitle: "Logistieke beveiliging Sittard-Geleen en Holtum",
    description: "Locatiegerichte logistieke beveiliging in Sittard-Geleen en Holtum voor transportterreinen, warehouses, contractors en wisselende goederenstromen.",
    label: "Sittard-Geleen / Holtum",
    updated: "2026-07-10",
    areaServed: ["Sittard-Geleen", "Holtum", "Zuid-Limburg", "Westelijke Mijnstreek"],
    intent: "Een controleerbare beveiligingsorganisatie voor logistieke en industrieel-logistieke locaties rond Sittard-Geleen en Holtum.",
    intro: "Sittard-Geleen en Holtum liggen in een gebied waar logistieke terreinen, industrie, transportverbindingen en woonkernen dicht bij elkaar liggen. Via de A2 en nabijgelegen regionale verbindingen bewegen chauffeurs, medewerkers en contractors op uiteenlopende tijden door het gebied. Voor een beveiligingsplan is vooral van belang waar het private terrein begint, welke activiteiten naast elkaar plaatsvinden en wie buiten de reguliere bezetting beslissingsbevoegd is. Logistic Security maakt die lokale grenzen en verantwoordelijkheden uitvoerbaar.",
    context: [
      "Holtum en de noordzijde van Sittard-Geleen kennen locaties met ruime buitenterreinen, trailers en verbindingen richting de omgeving van Born. Op zulke terreinen kan dezelfde poort worden gebruikt door vaste medewerkers, transporteurs en technische leveranciers. Zonder onderscheid in doel, zone en geldigheidsduur wordt een bezoekersregistratie snel slechts administratie.",
      "Industrieel-logistieke omgevingen hebben vaker werkzaamheden door derden, onderhoudsvensters of leveringen die afwijken van de standaard dockstroom. Beveiliging toetst dan niet de technische inhoud van het werk, maar wel identiteit, opdrachtgever, toegestane route en het gemelde tijdvenster volgens de instructie.",
      "De fysieke afstand tussen poort, opslag, parkeerzone en laadlocatie kan groot zijn. Dat vraagt om prioriteiten: welke zones worden bij openen of sluiten gecontroleerd, welke waarnemingen vereisen directe melding en welke worden in de dienstrapportage opgenomen. De route wordt gebaseerd op het terrein, niet gekopieerd van een andere vestiging."
    ],
    risks: [
      { title: "Contractors buiten het normale proces", text: "Onderhoud en projectwerk brengen andere contactpersonen en tijdstippen mee. Zonder geldige opdrachtbevestiging is niet duidelijk wie toegang mag autoriseren." },
      { title: "Trailer- en sleutelbeheer", text: "Sleutels, passen en trailerposities kunnen tussen teams wisselen. Een controleerbare uitgifte en overdracht voorkomen zoekwerk en onbevoegde beschikbaarheid." },
      { title: "Meervoudig terrein gebruik", text: "Wanneer logistieke en andere bedrijfsactiviteiten naast elkaar plaatsvinden, moet vaststaan welke zones en instructies onder de beveiligingsopdracht vallen." },
      { title: "Beperkte bezetting in daluren", text: "Bij avond- of weekendactiviteiten zijn minder operationele beslissers aanwezig. De escalatielijst moet dan actueel en taakgebonden zijn." }
    ],
    approach: [
      { title: "Rollenmatrix", text: "Per type bezoek leggen we vast wie aanvraagt, controleert, toegang autoriseert en na afloop verantwoordelijk is voor afmelding of inname van middelen." },
      { title: "Terrein in functionele zones", text: "Poort, parkeerplaatsen, opslag, docks en contractorlocaties krijgen een eigen controleniveau en herkenbare route in de postinstructie." },
      { title: "Uitgifte aantoonbaar maken", text: "Voor tijdelijke passen, sleutels en andere middelen bepalen we registratievelden, geldigheidsduur en het proces bij niet-terugbrengen." },
      { title: "Daluren vooraf organiseren", text: "We toetsen welke beslissingen 's avonds of in het weekend kunnen voorkomen en welke bevoegde contactpersoon daarbij hoort." }
    ],
    faq: [
      { question: "Is deze aanpak alleen bedoeld voor grote distributiecentra in Holtum?", answer: "Nee. Ook een kleiner warehouse, transportterrein of gedeelde locatie kan baat hebben bij heldere toegang en overdracht. De omvang van de inzet wordt afgestemd op de feitelijke taken en risico's, niet op de naam of grootte van het bedrijventerrein." },
      { question: "Kan toegangscontrole voor contractors worden opgenomen?", answer: "Ja, mits de opdrachtgever bepaalt welke bewijsstukken, contactpersonen en zones gelden. De beveiliger kan die afgesproken voorwaarden controleren, maar neemt geen technische werkvergunning of werkgeversverantwoordelijkheid over." },
      { question: "Wat gebeurt er als een levering buiten het aangekondigde tijdvenster aankomt?", answer: "De vooraf vastgelegde uitzonderingsprocedure bepaalt of de chauffeur wacht, intern wordt geverifieerd of wordt geweigerd. Wie daarover mag beslissen wordt tijdens de intake expliciet vastgelegd." }
    ],
    related: ["logistieke-beveiliging-limburg", "logistieke-beveiliging-born-stein", "beveiliging-bedrijventerrein-logistiek", "nachtbeveiliging-transportbedrijf"]
  },
  {
    kind: "region",
    slug: "logistieke-beveiliging-roermond",
    title: "Logistieke beveiliging Roermond",
    metaTitle: "Logistieke beveiliging Roermond | Warehouses en terreinen",
    description: "Logistieke beveiliging in Roermond voor warehouses en transportterreinen, afgestemd op A73/N280-verkeer, toegang, docks en avonduren.",
    label: "Roermond",
    updated: "2026-07-10",
    areaServed: ["Roermond", "Midden-Limburg", "Herten", "Swalmen"],
    intent: "Praktische beveiliging voor logistieke locaties rond Roermond met een duidelijke scheiding tussen openbare route en privaat terrein.",
    intro: "Roermond ligt aan de A73 en de oost-westverbinding N280. Logistiek verkeer deelt er de regionale infrastructuur met woon-werkverkeer, bezoekers en stedelijke activiteiten. Locaties rond de stad verschillen sterk in schaal: van een warehouse op een bedrijventerrein tot een transportterrein met beperkte ruimte bij de poort. Logistic Security stemt de controle af op die werkelijke terreinindeling, zodat aankomst, wachten en doorrijden duidelijk zijn zonder aannames over de omgeving.",
    context: [
      "Op een compact terrein kan een te vroege vrachtwagen de toegang, openbare weg of manoeuvreerruimte blokkeren. De beveiligingsinstructie moet daarom niet alleen zeggen wie naar binnen mag, maar ook waar een voertuig veilig en toegestaan kan wachten en wie de planning benadert.",
      "Roermondse locaties kunnen een duidelijke dagpiek hebben en daarna met een kleine bezetting doorgaan. Het risico verschuift dan van verkeersafhandeling naar sluitrondes, alleenwerkende medewerkers, openstaande docks en toegang door schoonmaak of leveranciers. Dag- en avondinstructies hoeven daarom niet identiek te zijn.",
      "Bij terreinen met meerdere ondernemingen is de grens tussen gedeelde route, eigen parkeerplaatsen en beveiligde opslag niet altijd visueel vanzelfsprekend. Een beveiliger heeft een kaart, zonebeschrijving en contactstructuur nodig die past bij de contractuele grenzen van de opdracht."
    ],
    risks: [
      { title: "Terugslag naar de openbare route", text: "Ongeplande aankomsten of onvoldoende wachtruimte kunnen onveilige of hinderlijke situaties creëren. Verkeersafhandeling en toegangsbesluit moeten van elkaar worden onderscheiden." },
      { title: "Van dag- naar avondbedrijf", text: "Docks of neveningangen die overdag normaal zijn, kunnen na de piek onbedoeld open blijven wanneer eigenaarschap van de sluitcontrole ontbreekt." },
      { title: "Gedeelde terreinonderdelen", text: "Een algemene ronde over een bedrijventerrein mag niet worden verward met controle van iedere afzonderlijke huurder of afgesloten ruimte." },
      { title: "Onvolledige incidentlocatie", text: "Op een langgerekt of gedeeld terrein vertraagt een vage melding de interne opvolging. Zonecodes en herkenbare referentiepunten verbeteren de overdracht." }
    ],
    approach: [
      { title: "Aankomstscenario's", text: "We beschrijven reguliere, te vroege, onbekende en afgewezen aankomsten met een passende wacht- en belroute per situatie." },
      { title: "Dag- en avondprofiel", text: "Taken worden per periode bepaald, bijvoorbeeld verkeerscontrole tijdens piekuren en gerichte sluit- of terreincontrole wanneer de operatie afneemt." },
      { title: "Opdrachtgrenzen markeren", text: "Plattegrond en instructie maken duidelijk welke gemeenschappelijke en private zones worden gecontroleerd en waar een andere verantwoordelijke nodig is." },
      { title: "Melden met locatiecontext", text: "Rapportages gebruiken afgesproken zone- of poortnamen, tijd, waarneming en genomen stap, zodat de opdrachtgever gericht kan beoordelen." }
    ],
    faq: [
      { question: "Kan Logistic Security een gedeeld bedrijventerrein in Roermond beveiligen?", answer: "Een inzet op gedeelde delen is mogelijk wanneer opdrachtgrenzen, bevoegdheden en financiering duidelijk zijn. Voor private gebouwen of huurderspecifieke zones zijn afzonderlijke afspraken nodig; een ronde op het algemene terrein dekt die niet automatisch." },
      { question: "Is nachtbewaking altijd nodig voor een warehouse?", answer: "Niet per definitie. Bestaande techniek, goederen, bereikbaarheid, openingstijden en incidenthistorie bepalen welke combinatie van maatregelen passend is. Een locatiebeoordeling gaat vooraf aan een voorstel." },
      { question: "Hoe worden vrachtwagens zonder tijdslot afgehandeld?", answer: "De locatie bepaalt vooraf of verificatie, wachten of weigeren van toepassing is. De beveiliger volgt die instructie en registreert de afwijking; hij wijzigt niet zelfstandig de logistieke planning." }
    ],
    related: ["logistieke-beveiliging-limburg", "logistieke-beveiliging-weert", "warehouse-beveiliging", "toegangscontrole-logistiek-centrum"]
  },
  {
    kind: "region",
    slug: "logistieke-beveiliging-weert",
    title: "Logistieke beveiliging Weert",
    metaTitle: "Logistieke beveiliging Weert | Transport en warehouse",
    description: "Beveiliging voor logistieke locaties in Weert, met aandacht voor regionale transportstromen, compacte terreinen, nachtelijke aankomst en overdracht.",
    label: "Weert",
    updated: "2026-07-10",
    areaServed: ["Weert", "Midden-Limburg", "Stramproy", "Nederweert"],
    intent: "Een proportionele beveiligingsaanpak voor warehouses en transportbedrijven in en rond Weert.",
    intro: "Weert ligt aan de A2 op de overgang tussen Limburg, Noord-Brabant en de Belgische grensregio. Logistieke locaties kunnen daardoor regionale distributie combineren met doorgaand vervoer en leveringen buiten vaste kantoortijden. Niet ieder terrein heeft een aparte portiersloge of ruime buffer voor voertuigen. Logistic Security ontwerpt daarom een proportionele aanpak: controles die uitvoerbaar zijn op een compacte locatie en duidelijke alternatieven voor momenten waarop de normale contactpersoon niet aanwezig is.",
    context: [
      "Een middelgrote warehouse- of transportlocatie heeft vaak medewerkers met meerdere rollen. De planner, warehousecoördinator of ondernemer kan overdag snel een uitzondering beoordelen, maar 's nachts niet op dezelfde plek zijn. De beveiligingsinstructie moet voor beide situaties een realistische beslisroute bevatten.",
      "Regionale ritten kennen korte omlooptijden en wijzigingen kunnen laat in de planning ontstaan. Dat maakt actuele vooraanmelding belangrijk. Een lijst die niet wordt bijgewerkt, verplaatst het probleem naar de poort; een goede werkwijze legt ook vast wie brongegevens aanlevert en tot welk moment een wijziging geldig kan worden doorgegeven.",
      "Compacte terreinen vragen om zorgvuldige scheiding van personenauto's, vrachtwagens, fietsers en voetgangers. Beveiliging kan afgesproken routes bewaken en afwijkingen signaleren, maar verkeersinrichting en veilige fysieke voorzieningen blijven onderdeel van het terreinbeheer van de opdrachtgever."
    ],
    risks: [
      { title: "Afhankelijkheid van één beslisser", text: "Als alleen één planner afwijkingen kan bevestigen, ontstaat buiten diens werktijd een onwerkbare instructie. Een begrensde back-uplijn is noodzakelijk." },
      { title: "Late planningswijzigingen", text: "Een legitieme rit kan als onbekend verschijnen wanneer bronlijsten en poortgegevens niet synchroon lopen. Tijdstempel en wijzigingsbevoegdheid horen bij de controle." },
      { title: "Beperkte manoeuvreerruimte", text: "Wachten op of direct voor het terrein kan andere bewegingen blokkeren. Een vooraf gekozen uitwijk- of terugmeldprocedure voorkomt improvisatie." },
      { title: "Alleenwerk in daluren", text: "Een melding van een medewerker op een verder leeg terrein vraagt heldere contact- en escalatieafspraken zonder dat de beveiliger medische of operationele rollen overneemt." }
    ],
    approach: [
      { title: "Minimale controledataset", text: "We bepalen welke gegevens echt nodig en beschikbaar zijn voor toelating, zodat de controle sterk blijft zonder overbodige administratie." },
      { title: "Back-upbevoegdheid", text: "Voor avond, nacht en weekend wordt vastgelegd wie uitzonderingen mag beoordelen en wanneer geen besluit betekent dat toegang wordt uitgesteld." },
      { title: "Route en wachtruimte", text: "De instructie benoemt toegestane rijrichting, parkeerzones en de stap bij volle of onbeschikbare wachtruimte, passend bij de locatie." },
      { title: "Periodieke actualisatie", text: "Contactlijsten, plattegrond en procesafspraken worden opnieuw bekeken zodra werktijden, huurders, deuren of logistieke stromen veranderen." }
    ],
    faq: [
      { question: "Is beveiliging haalbaar zonder permanente portiersloge?", answer: "Dat kan, afhankelijk van taken, terrein en faciliteiten. Tijdens de intake beoordelen we waar controles veilig kunnen plaatsvinden, welke middelen beschikbaar zijn en of een vaste post, rondes of een andere combinatie passend is." },
      { question: "Kan Logistic Security ook alleen avond- en nachtdiensten verzorgen?", answer: "Een tijdgebonden inzet kan worden besproken. De voorgestelde taken moeten wel aansluiten op de risico's en op wat overdag wordt voorbereid, zoals actuele bezoekers- en transportgegevens." },
      { question: "Wie blijft verantwoordelijk voor verkeersveiligheid op het terrein?", answer: "De opdrachtgever blijft verantwoordelijk voor inrichting, onderhoud en bedrijfsprocessen. Beveiligers kunnen afgesproken routes controleren, afwijkingen melden en instructies uitvoeren binnen hun opdracht en bevoegdheid." }
    ],
    related: ["logistieke-beveiliging-limburg", "logistieke-beveiliging-roermond", "transportbeveiliging", "nachtbeveiliging-transportbedrijf"]
  },
  {
    kind: "region",
    slug: "logistieke-beveiliging-born-stein",
    title: "Logistieke beveiliging Born en Stein",
    metaTitle: "Logistieke beveiliging Born en Stein | Terreincontrole",
    description: "Logistieke beveiliging in Born en Stein voor transport- en industrieterreinen, met zonering, contractorcontrole, buitenterrein en daluren.",
    label: "Born / Stein",
    updated: "2026-07-10",
    areaServed: ["Born", "Stein", "Sittard-Geleen", "Westelijke Mijnstreek"],
    intent: "Beveiliging van uitgestrekte logistieke en industrieel-logistieke terreinen rond Born en Stein.",
    intro: "Born en Stein liggen langs de A2 in een omgeving met logistieke, industriële en havengebonden functies. Iedere locatie heeft daarbij eigen exploitanten, processen en toegangsregels. Op uitgestrekte terreinen zijn perimeter, poorten, parkeerzones en werkgebieden niet altijd vanaf één post te overzien. Logistic Security maakt daarom onderscheid tussen toegang, mobiele controle en opvolging, met een exacte afbakening van het terrein waarop de opdracht betrekking heeft.",
    context: [
      "In de omgeving van Born kunnen wegvervoer en, afhankelijk van de specifieke locatie, activiteiten nabij water- of railverbindingen naast elkaar voorkomen. Dat betekent niet dat één beveiliger alle modaliteiten controleert. De intake bepaalt welke overgangspunten relevant zijn en welke operationele partij verantwoordelijk blijft voor lading, terminalproces of technische veiligheid.",
      "Ruime buitenterreinen hebben vaak objecten die op verschillende momenten aandacht vragen: trailers, hekwerk, nevenpoorten, opslag en tijdelijke contractorzones. Een ronde zonder prioriteit levert vooral kilometers op. Een bruikbare ronde koppelt observatiepunten aan risico, tijdstip en concrete meldcriteria.",
      "Contractors en leveranciers kunnen via een centrale toegang binnenkomen maar naar verschillende werkgebieden gaan. Registratie aan de poort is pas waardevol als opdrachtgever, bestemming, tijdvenster en afmelding met elkaar verbonden zijn. De beveiliger controleert de afgesproken toegangseisen; werktoezicht blijft bij de aangewezen bedrijfsverantwoordelijke."
    ],
    risks: [
      { title: "Grote afstanden en blinde zones", text: "Niet iedere plek kan continu zichtbaar zijn. Prioritering van rondepunten en goede meldbaarheid zijn nodig om schijnzekerheid te voorkomen." },
      { title: "Overgang tussen functies", text: "Poort, parkeerterrein, opslag en eventueel terminalgebied kunnen onder verschillende verantwoordelijken vallen. Een incident moet direct bij de juiste rol terechtkomen." },
      { title: "Tijdelijke werkgebieden", text: "Onderhoud of projecten veranderen routes en afsluitingen. Verouderde plattegronden en passen kunnen dan toegang geven tot een zone die niet meer passend is." },
      { title: "Beweging buiten kernuren", text: "Een voertuig of contractor in de nacht kan gepland zijn. Zonder actuele lijst en locatiegegevens is dat onderscheid niet verantwoord te maken." }
    ],
    approach: [
      { title: "Afbakening per zone", text: "We leggen opdrachtgrens, eigenaar van het besluit en relevante toegangspunten per terreinfunctie vast, inclusief uitgesloten gebieden." },
      { title: "Risicogestuurde ronde", text: "Route, frequentie en observatiepunten worden onderbouwd met terreinindeling, gebruiksmomenten en bestaande detectie, niet met een universele norm." },
      { title: "Contractorroute", text: "Aanmelding, identiteitscontrole, bestemming, geldigheidsduur en afmelding worden verbonden aan de opdrachtgever die het werk heeft besteld." },
      { title: "Wijzigingsbeheer", text: "Tijdelijke afsluitingen, nieuwe huurders, gewijzigde poorten en projectzones krijgen een eigenaar en vervaldatum in de operationele instructie." }
    ],
    faq: [
      { question: "Beveiligt Logistic Security haven- of terminalactiviteiten in Born?", answer: "Alleen werkzaamheden die in een concrete opdracht, risicoanalyse en bevoegdheidsverdeling zijn vastgelegd. De regionale vermelding impliceert geen bestaande terminalrelatie en geen overname van nautische, douane- of operationele verantwoordelijkheden." },
      { question: "Hoe wordt een groot buitenterrein gecontroleerd?", answer: "Na een locatiescan worden kritieke punten, routes, meldcriteria en bestaande technische maatregelen gecombineerd. De haalbaarheid hangt af van oppervlakte, zichtlijnen, taken en beschikbare tijd; daarover volgt pas daarna een voorstel." },
      { question: "Kunnen tijdelijke projectzones in de instructie worden verwerkt?", answer: "Ja. Ze moeten een duidelijke locatie, toegangseis, contactpersoon en einddatum hebben. Na afloop worden passen, routeafspraken en uitzonderingen ingetrokken of opnieuw beoordeeld." }
    ],
    related: ["logistieke-beveiliging-limburg", "logistieke-beveiliging-sittard-geleen", "beveiliging-bedrijventerrein-logistiek", "nachtbeveiliging-transportbedrijf"]
  }
];

export const services = [
  {
    kind: "service",
    slug: "warehouse-beveiliging",
    title: "Warehouse beveiliging",
    metaTitle: "Warehouse beveiliging | Grip op voorraad en zones",
    description: "Warehouse beveiliging gericht op goederenontvangst, interne zones, docks, sleutels en sluitcontrole, afgestemd op uw opslagproces.",
    label: "Warehouse",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Fysieke beveiliging van opgeslagen goederen en de routes tussen ontvangst, opslag en uitgifte.",
    intro: "Warehouse beveiliging gaat over meer dan een gesloten buitendeur. Goederen bewegen van ontvangst via controle- en opslagzones naar picking, staging en expeditie. Tegelijk hebben medewerkers, leveranciers, schoonmaak en onderhoud verschillende redenen om in het gebouw te zijn. Logistic Security richt controles in op die interne logistiek: wie mag waar komen, welke deur of dock hoort bij een processtap en welke afwijking moet direct naar de warehouseverantwoordelijke.",
    context: [
      "De beveiligingsbehoefte verschilt per goederenprofiel, gebouwindeling en werktijd. Een bulkopslag met weinig mutaties vraagt iets anders dan een magazijn met veel kleine orderbewegingen. We kijken daarom naar de plekken waar goederen van status, eigenaar of fysieke zone wisselen.",
      "Docks vormen een tijdelijke opening in de buitenschil. De relevante vraag is niet alleen of een dockdeur dicht is, maar of de deur volgens planning in gebruik is, wie de trailer heeft toegewezen en wat er na de laatste handeling moet worden gecontroleerd.",
      "Interne bevoegdheden verdienen dezelfde aandacht als de hoofdpoort. Tijdelijke medewerkers of bezoekers kunnen legitiem binnen zijn maar niet voor iedere opslag-, sleutel- of technische ruimte zijn geautoriseerd. Zonering maakt dat verschil uitvoerbaar."
    ],
    risks: [
      { title: "Onheldere interne zones", text: "Een geldig toegangsmiddel voor het gebouw geeft zonder aanvullende afspraken mogelijk toegang tot opslag of ruimten die niet bij de functie horen." },
      { title: "Openstaande docks", text: "Dockgebruik wisselt snel. Zonder eigenaarschap voor vrijgave en sluitcontrole blijft onduidelijk of een open deur operationeel of afwijkend is." },
      { title: "Sleutels en tijdelijke passen", text: "Uitgifte zonder ontvanger, doel, tijd en retourcontrole maakt achteraf niet controleerbaar wie een middel nog bezit." },
      { title: "Wijzigingen in opslag", text: "Nieuwe goederen, stellingen of procesroutes kunnen bestaande rondes en zichtlijnen achterhalen zonder dat de instructie wordt aangepast." }
    ],
    approach: [
      { title: "Goederenroute als basis", text: "We lopen ontvangst, kwaliteitscontrole, opslag, staging en uitgifte door en bepalen waar fysieke beveiliging een aantoonbare controle kan toevoegen." },
      { title: "Autorisatie per functie", text: "Personeel, bezoekers en contractors worden gekoppeld aan toegestane zones en tijden. De opdrachtgever bepaalt de rechten; beveiliging controleert de toepassing." },
      { title: "Openen, overdracht en sluiten", text: "Voor de start en het einde van een dienst leggen we controlepunten vast voor deuren, docks, sleutels, bijzonderheden en nog aanwezige personen." },
      { title: "Rapporteren voor verbetering", text: "Afwijkingen worden feitelijk geregistreerd met tijd, zone, waarneming en genomen stap, zodat structurele oorzaken in proces of techniek kunnen worden aangepakt." }
    ],
    faq: [
      { question: "Wat is het verschil tussen warehouse beveiliging en algemene objectbeveiliging?", answer: "Warehouse beveiliging volgt de goederen- en personenstromen in het magazijn. Daardoor krijgen docks, opslagzones, staging, sleutelbeheer en ploegoverdracht specifieke instructies in plaats van alleen een algemene gebouwronde." },
      { question: "Kan beveiliging voorraadverschillen voorkomen?", answer: "Geen maatregel kan voorraadverschillen garanderen te voorkomen. Fysieke controles kunnen wel onderdeel zijn van een breder pakket met autorisaties, procesdiscipline, techniek en intern onderzoek. De opdrachtgever bepaalt welke controledoelen passend zijn." },
      { question: "Wordt bestaande toegangs- of cameratechniek meegenomen?", answer: "Ja, tijdens de intake bekijken we welke informatie en signalen beschikbaar zijn en wie ze mag gebruiken. Techniek en fysieke inzet moeten elkaar aanvullen; we doen geen aanname over compatibiliteit zonder beoordeling." }
    ],
    related: ["logistieke-beveiliging-limburg", "beveiliging-distributiecentrum-venlo", "toegangscontrole-logistiek-centrum", "nachtbeveiliging-transportbedrijf", "beveiliging-fulfilmentcentrum"]
  },
  {
    kind: "service",
    slug: "transportbeveiliging",
    title: "Transportbeveiliging op en rond de logistieke locatie",
    metaTitle: "Transportbeveiliging | Vertrek, aankomst en terrein",
    description: "Transportbeveiliging voor vertrek, aankomst, chauffeurscontrole, voertuiggegevens en terreinprocessen rond warehouses en transportbedrijven.",
    label: "Transport",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Controle van de fysieke overdrachtsmomenten vóór vertrek, bij aankomst en tijdens verblijf op het bedrijfsterrein.",
    intro: "Transportbeveiliging op deze site richt zich op de logistieke locatie: de poort, voertuig- en chauffeursgegevens, wachtzones, trailerposities en de overdracht bij vertrek of terugkomst. Het is niet automatisch persoonsbegeleiding of bewaking onderweg. Als een organisatie een andere vorm van transportbeveiliging bedoelt, wordt scope en haalbaarheid afzonderlijk beoordeeld. Zo blijft duidelijk welke risico's de inzet wel en niet adresseert.",
    context: [
      "Een transportopdracht verandert onderweg soms van voertuig, chauffeur of tijdstip. Die wijziging kan legitiem zijn, maar moet uit een bevoegde bron komen. De poortinstructie verbindt daarom actuele planning aan een verificatiestap in plaats van uitsluitend te vertrouwen op mondelinge uitleg.",
      "Vertrek is een kritisch overdrachtsmoment. Afhankelijk van het bedrijfsproces kunnen voertuig, trailer, sealgegevens, documenten of vrijgave relevant zijn. Welke velden worden gecontroleerd, bepaalt de opdrachtgever samen met de logistieke verantwoordelijke; beveiliging voert de overeengekomen handeling uit.",
      "Bij terugkomst of parkeren op het terrein verschuift de aandacht naar positie, sleutel- of documentenoverdracht en afwijkingen aan voertuig of afsluiting. Een herkenbaar proces voorkomt dat een nachtploeg moet raden wat de dagplanning heeft afgesproken."
    ],
    risks: [
      { title: "Mismatch tussen chauffeur en opdracht", text: "Een bekende vervoerder is geen vervanging voor controle van de specifieke rit, identiteit en voertuiggegevens die de locatie vereist." },
      { title: "Onbevoegde planningswijziging", text: "Telefonische of mondelinge wijzigingen zonder herleidbare bron kunnen de afgesproken toegangscontrole omzeilen." },
      { title: "Onvolledige vertrekoverdracht", text: "Wanneer documenten, sleutels of sealgegevens geen eigenaar hebben, wordt achteraf lastig vast te stellen waar een afwijking ontstond." },
      { title: "Trailer buiten afgesproken zone", text: "Een legitieme trailer op de verkeerde positie kan routes blokkeren of buiten de bedoelde controle vallen en vraagt snelle interne terugmelding." }
    ],
    approach: [
      { title: "Scope expliciet afbakenen", text: "We beschrijven of de opdracht toegang, vertrekcontrole, parkeerterrein, sleutelbeheer of andere locatiegebonden taken omvat en wat buiten scope blijft." },
      { title: "Betrouwbare gegevensbron", text: "De organisatie wijst het systeem, de lijst of de bevoegde contactpersoon aan waarmee ritwijzigingen en uitzonderingen worden geverifieerd." },
      { title: "Overdracht met vaste velden", text: "Alleen relevante en rechtmatig te gebruiken gegevens worden geregistreerd, met tijdstip en verantwoordelijke stap volgens het bedrijfsproces." },
      { title: "Afwijking niet improviseren", text: "Bij een mismatch volgt wachten, verificatie of weigering volgens de instructie. Operationele druk is geen zelfstandige autorisatiegrond." }
    ],
    faq: [
      { question: "Begeleidt Logistic Security vrachtwagens tijdens de rit?", answer: "Deze pagina beschrijft locatiegebonden transportbeveiliging. Eventuele begeleiding of andere inzet onderweg valt niet automatisch binnen de dienstverlening en vereist een afzonderlijke intake, risicoanalyse en expliciete scope." },
      { question: "Kan een chauffeur worden toegelaten als het kenteken is gewijzigd?", answer: "Dat kan alleen via de vooraf bepaalde verificatieprocedure en een bevoegde bron. De beveiliger beslist niet op basis van aannemelijkheid alleen en registreert de afwijking volgens de instructie." },
      { question: "Welke transportgegevens worden vastgelegd?", answer: "Dat hangt af van het doel en het proces van de opdrachtgever. We beperken de registratie tot afgesproken gegevens, zoals ritreferentie, voertuig, tijd en uitkomst, en bespreken bewaarbeleid en toegang met de verantwoordelijke organisatie." }
    ],
    related: ["beveiliging-distributiecentrum-venlo", "logistieke-beveiliging-weert", "toegangscontrole-logistiek-centrum", "nachtbeveiliging-transportbedrijf"]
  },
  {
    kind: "service",
    slug: "toegangscontrole-logistiek-centrum",
    title: "Toegangscontrole voor logistieke centra",
    metaTitle: "Toegangscontrole logistiek centrum | Poortproces",
    description: "Toegangscontrole voor logistieke centra met vooraanmelding, identiteitscontrole, voertuigverificatie, bezoekersroutes en beheersbare uitzonderingen.",
    label: "Toegangscontrole",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Beslissen wie, met welk doel, op welk moment en via welke route een logistieke locatie betreedt.",
    intro: "Toegangscontrole is een beslisproces, geen baliehandeling. Een persoon of voertuig wordt gekoppeld aan een geldige reden, tijd, opdrachtgever en toegestane zone. Op een logistieke locatie komen personeel, uitzendkrachten, chauffeurs, leveranciers, bezoekers en onderhoud vaak via dezelfde ingang. Logistic Security helpt een poortproces in te richten dat de normale stroom vlot afhandelt en afwijkingen apart laat verifiëren.",
    context: [
      "Een vooraanmelding is bruikbaar als duidelijk is wie haar invoert, welke gegevens actueel moeten zijn en wanneer zij vervalt. Vrije tekst of oude lijsten leiden tot discussie aan de poort. We kiezen daarom controlevelden die beschikbaar én beslissend zijn.",
      "Identiteitscontrole, voertuigcontrole en terreinbestemming zijn verschillende stappen. Niet ieder bezoek vereist exact hetzelfde niveau. Een risicogestuurde matrix voorkomt zowel een te lichte controle als onnodige verwerking van gegevens die niet bij het doel passen.",
      "De uitzonderingsroute bepaalt de kwaliteit van het geheel. Spoedleveringen, vervangende chauffeurs, vergeten passen en bezoekers buiten tijdslot moeten een vooraf bekende verificatie- of wachtstap hebben. Anders wordt de drukste situatie ook de zwakste controle."
    ],
    risks: [
      { title: "Meelopen of doorrijden", text: "Een geopende deur of slagboom kan door een tweede persoon of voertuig worden gebruikt wanneer de controle geen individuele passage bewaakt." },
      { title: "Verouderde autorisatie", text: "Passen en lijsten die niet tijdig worden ingetrokken geven toegang op basis van een relatie die niet meer actueel is." },
      { title: "Sociale druk bij afwijkingen", text: "Bekendheid, haast of een overtuigend verhaal kunnen het proces beïnvloeden als medewerkers geen duidelijke stopregel en back-up hebben." },
      { title: "Te brede registratie", text: "Meer persoonsgegevens verzamelen maakt een controle niet vanzelf sterker. Doel, toegang en bewaartermijn moeten door de verantwoordelijke organisatie worden bepaald." }
    ],
    approach: [
      { title: "Toegangsmatrix", text: "Per bezoekersgroep leggen we controlebron, geldigheidsduur, toegestane zone, uitgiftemiddel en bevoegde uitzonderingshouder vast." },
      { title: "Passage observeren", text: "De fysieke inrichting en werkwijze worden beoordeeld op meeliften, omzeilen, voetgangersroutes en veilige positie van de controlerende medewerker." },
      { title: "Stop- en verificatieregel", text: "Ontbrekende of afwijkende gegevens leiden tot een herkenbare wachtpositie en contactroute, niet tot een geïmproviseerde toelating." },
      { title: "Levenscyclus beheren", text: "Aanmaak, uitgifte, wijziging, inname en blokkade van passen of sleutels krijgen een eigenaar en controleerbare registratie." }
    ],
    faq: [
      { question: "Controleert een beveiliger altijd een identiteitsbewijs?", answer: "Dat hangt af van doel, wettelijke grondslag en het beleid van de verantwoordelijke organisatie. Tijdens de intake wordt bepaald welke identiteitstoets passend is. Logistic Security geeft geen generiek juridisch advies over gegevensverwerking." },
      { question: "Kan toegangscontrole met het bestaande toegangssysteem werken?", answer: "Vaak kan bestaande techniek onderdeel zijn van de werkwijze, maar rechten, koppelingen, beschikbaarheid en bedieningsbevoegdheid moeten eerst worden beoordeeld. Er wordt geen compatibiliteit of integratie beloofd zonder die controle." },
      { question: "Wat gebeurt er bij een vergeten personeelspas?", answer: "De opdrachtgever bepaalt een tijdelijke verificatie- en uitgifteprocedure met geldigheidsduur en inname. Zonder bevestiging door een bevoegde bron wordt geen uitzondering verzonnen." }
    ],
    related: ["beveiliging-distributiecentrum-venlo", "logistieke-beveiliging-roermond", "warehouse-beveiliging", "transportbeveiliging"]
  },
  {
    kind: "service",
    slug: "nachtbeveiliging-transportbedrijf",
    title: "Nachtbeveiliging voor transportbedrijven",
    metaTitle: "Nachtbeveiliging transportbedrijf | Daluren en terrein",
    description: "Nachtbeveiliging voor transportbedrijven met overdracht, terreinrondes, poortafspraken en opvolging van afwijkingen buiten de kernbezetting.",
    label: "Nachtbeveiliging",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Controle en bereikbare opvolging wanneer het transportterrein actief blijft maar de normale organisatie kleiner is.",
    intro: "Een transportbedrijf wordt 's nachts niet simpelweg een leeg object. Chauffeurs kunnen vertrekken of terugkomen, trailers worden verplaatst en een beperkte warehouse- of planningploeg kan doorwerken. Tegelijk zijn minder leidinggevenden aanwezig. Nachtbeveiliging richt zich daarom op overdracht, toegestane bewegingen, gerichte rondes en een escalatielijn die werkelijk bij de nachtelijke organisatie past.",
    context: [
      "De dagploeg weet vaak welke voertuigen vertraagd zijn, welke deur defect is of welke contractor nog aanwezig blijft. Als die kennis niet gestructureerd wordt overgedragen, begint de nachtdienst met aannames. Een korte, vaste overdracht is effectiever dan een lange algemene instructie zonder actuele status.",
      "Nachtelijke rondes hebben alleen waarde wanneer observatiepunten en acties vooraf zijn bepaald. Een open hek, draaiende koelunit, voertuig met verlichting of aanwezige persoon kan normaal of afwijkend zijn. De instructie verbindt waarneming aan planning, zone en meldcriterium.",
      "Alleen fysieke aanwezigheid is geen garantie tegen incidenten. Terreinverlichting, hekwerk, alarmopvolging, sleutelbeheer en operationele discipline blijven onderdeel van het totale pakket. We benoemen afhankelijkheden voordat bezetting wordt voorgesteld."
    ],
    risks: [
      { title: "Onvolledige dag-nachtoverdracht", text: "Tijdelijke uitzonderingen, defecten en voertuigen in afwijkende positie worden zonder vaste overdracht al snel als normale situatie behandeld." },
      { title: "Grote ronde met weinig focus", text: "Een uniforme route kan kritieke momenten missen en tijd besteden aan zones waar geen concrete controlehandeling is afgesproken." },
      { title: "Geen bevoegde achterwacht", text: "Een telefoonnummer zonder beschikbaarheids- of beslisafspraak is onvoldoende wanneer toegang, bedrijfsstilstand of herstel moet worden beoordeeld." },
      { title: "Combinatie van poort en ronde", text: "Wanneer één post verschillende taken heeft, moet vaststaan wat tijdens afwezigheid van de poort gebeurt en welke taak prioriteit heeft." }
    ],
    approach: [
      { title: "Nachtbeeld opstellen", text: "We brengen normale voertuigbewegingen, aanwezige functies, gesloten zones, alarmsignalen en bekende piekmomenten buiten kernuren in kaart." },
      { title: "Vaste overdracht", text: "Openstaande bijzonderheden krijgen tijd, locatie, status, eigenaar en verwachte vervolgactie. Afgeronde punten verdwijnen uit de actuele lijst." },
      { title: "Ronde op prioriteit", text: "Observatiepunten en timing sluiten aan op sluitmomenten, geplande aankomsten en terreindelen die niet door aanwezige medewerkers worden gezien." },
      { title: "Escalatie testen", text: "Contactvolgorde en bevoegdheid worden vóór de inzet gecontroleerd en aangepast wanneer organisatie, rooster of verantwoordelijkheden veranderen." }
    ],
    faq: [
      { question: "Is een beveiliger de hele nacht permanent aan de poort?", answer: "Dat hangt af van verkeersstroom, taken en risicoanalyse. Een vaste post, gecombineerde taak of andere inrichting wordt pas na de intake voorgesteld. We beloven geen standaardbezetting zonder locatiegegevens." },
      { question: "Kan nachtbewaking alarmopvolging uitvoeren?", answer: "Mogelijke alarmtaken vereisen afspraken over systeem, toegang, verificatie, contactpersonen en toegestane handelingen. De concrete haalbaarheid en scope worden afzonderlijk vastgelegd." },
      { question: "Hoe wordt voorkomen dat een ronde de poort onbemand laat?", answer: "De taakcombinatie wordt vooraf doorgerekend en beschreven. Denk aan rondevensters, afsluiting of technische ondersteuning van de toegang en een procedure voor aankomst tijdens de ronde. Wat passend is, verschilt per terrein." }
    ],
    related: ["logistieke-beveiliging-born-stein", "logistieke-beveiliging-weert", "beveiliging-bedrijventerrein-logistiek", "transportbeveiliging"]
  },
  {
    kind: "service",
    slug: "beveiliging-bedrijventerrein-logistiek",
    title: "Beveiliging van logistieke bedrijventerreinen",
    metaTitle: "Beveiliging logistiek bedrijventerrein | Gedeelde zones",
    description: "Beveiliging van logistieke bedrijventerreinen met heldere grenzen tussen gedeelde route, huurders, parkeerzones, rondes en individuele opvolging.",
    label: "Bedrijventerrein",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Toezicht op gedeelde buitenruimte en toegangen zonder huurderspecifieke verantwoordelijkheid te vermengen.",
    intro: "Een logistiek bedrijventerrein bestaat vaak uit openbare of gedeelde wegen, collectieve parkeerplaatsen en private kavels met eigen gebouwen. 'Terreinbeveiliging' is daarom pas betekenisvol als exact bekend is waar de opdracht begint en eindigt. Logistic Security helpt parkmanagement, eigenaar of deelnemende organisaties om gemeenschappelijke controledoelen te vertalen naar routes, meldingen en een eerlijke overdracht naar de juiste huurder.",
    context: [
      "Een mobiele ronde kan afwijkingen aan hekwerk, verlichting, geparkeerde voertuigen of algemene toegang signaleren. Zij kan niet zonder afspraak vaststellen wat binnen ieder bedrijfsproces normaal is. Huurdersspecifieke contact- en opvolginformatie is nodig als de opdracht verder gaat dan de gedeelde ruimte.",
      "Collectieve maatregelen werken alleen met duidelijke governance. Wie mag een voertuig laten verwijderen, een poort openen, camerabeelden beoordelen of een huurder buiten kantooruren bellen? De beveiliger voert afgesproken stappen uit maar vervangt het besluit van eigenaar, beheerder of huurder niet.",
      "Verschillende deelnemers kunnen verschillende openingstijden en risicoprofielen hebben. Een algemene nachtstand voor het hele terrein kan daardoor onpraktisch zijn. Zonering en tijdvensters maken het mogelijk gemeenschappelijke rust te bewaken zonder legitieme bedrijfsvoering te blokkeren."
    ],
    risks: [
      { title: "Onduidelijke publiek-private grens", text: "Een beveiliger kan op een openbare route niet dezelfde toegangsregels toepassen als op een afgesloten private kavel. De juridische en fysieke grens moet bekend zijn." },
      { title: "Verwachtingsverschil per huurder", text: "Een collectieve ronde wordt soms gezien als volledige objectbewaking. Zonder heldere scope ontstaat schijnzekerheid over gebouwen of opslag die niet worden gecontroleerd." },
      { title: "Melding zonder eigenaar", text: "Een afwijking bij een specifieke kavel blijft liggen als er geen actuele huurderscontactlijst en bevoegdheidsverdeling bestaat." },
      { title: "Tegenstrijdige openingstijden", text: "Normale nachtelijke activiteit bij de ene deelnemer kan als verdacht worden gezien door een andere. Geplande uitzonderingen moeten deelbaar en begrensd zijn." }
    ],
    approach: [
      { title: "Kaart met eigenaarschap", text: "We markeren openbare route, collectieve delen, private kavels, controlepunten en de partij die per zone beslissingen kan nemen." },
      { title: "Collectieve basisafspraak", text: "Meldcategorieën, ronde-uitkomst, privacygevoelige informatie en terugkoppeling worden voor alle deelnemers eenduidig georganiseerd." },
      { title: "Huurderspecifieke aanvulling", text: "Alleen waar expliciet afgesproken voegen we contactpersonen, normale activiteiten of objecttaken voor een individuele deelnemer toe." },
      { title: "Transparante rapportage", text: "De rapportage onderscheidt waarneming, zone, gemeenschappelijke actie en eventuele overdracht aan een huurder, zonder onbevestigde conclusies." }
    ],
    faq: [
      { question: "Dekt een ronde op het bedrijventerrein ook alle gebouwen?", answer: "Nee, niet automatisch. De opdracht moet per zone en object aangeven wat wordt gecontroleerd. Een collectieve buitenronde is geen vervanging voor huurderspecifieke objectbeveiliging of technische detectie." },
      { question: "Wie is opdrachtgever bij collectieve beveiliging?", answer: "Dat kan bijvoorbeeld een eigenaar, parkmanagement of een formeel samenwerkingsverband zijn. Voor de inzet moet één bevoegde contract- en escalatiestructuur bestaan, zodat meldingen en besluiten aantoonbaar bij de juiste verantwoordelijke terechtkomen." },
      { question: "Kan iedere huurder eigen meldafspraken krijgen?", answer: "Dat kan als de collectieve basis en privacyafspraken het toelaten. De instructie moet voor de beveiliger overzichtelijk blijven en duidelijk tonen welke aanvullende taak bij welke kavel hoort." }
    ],
    related: ["logistieke-beveiliging-sittard-geleen", "logistieke-beveiliging-born-stein", "nachtbeveiliging-transportbedrijf", "toegangscontrole-logistiek-centrum"]
  },
  {
    kind: "service",
    slug: "beveiliging-fulfilmentcentrum",
    title: "Beveiliging voor fulfilmentcentra",
    metaTitle: "Beveiliging fulfilmentcentrum | Orders, retouren en toegang",
    description: "Beveiliging voor fulfilmentcentra met aandacht voor snelle orderstromen, retouren, tijdelijke medewerkers, interne zones en cut-offmomenten.",
    label: "Fulfilment",
    updated: "2026-07-10",
    areaServed: ["Limburg", "Venlo", "Sittard-Geleen", "Roermond", "Weert", "Born", "Stein"],
    intent: "Beveiligingscontroles laten aansluiten op hoge orderfrequentie, retourstromen en wisselende bezetting in fulfilment.",
    intro: "Een fulfilmentcentrum verwerkt veel afzonderlijke orderregels, verpakkingen en retouren in korte tijd. De waarde zit verspreid door het proces en de bezetting kan rond acties of seizoenen sterk wisselen. Beveiliging moet de cut-off en productiviteit begrijpen zonder controles over te slaan. Logistic Security richt zich daarom op instroom van mensen, scheiding van retouren en voorraad, interne zones en de overdracht wanneer orders naar de vervoerder gaan.",
    context: [
      "Tijdelijke medewerkers moeten snel kunnen starten, maar hun autorisatie moet nog steeds aan functie, zone en looptijd zijn gekoppeld. Een groepslijst zonder individuele uitgifte en inname maakt het lastig om na een piek alle rechten aantoonbaar te beëindigen.",
      "Retouren hebben een andere status dan nieuwe voorraad. Zij kunnen wachten op beoordeling, opnieuw worden opgeslagen of worden afgevoerd. Een duidelijke fysieke en administratieve scheiding helpt voorkomen dat beveiliging een normale retourbeweging met een ongeautoriseerde goederenbeweging verwart.",
      "Rond een verzend-cut-off neemt de druk bij staging en expeditie toe. Extra controle moet daarom op de juiste plek en tijd zitten. Een procesanalyse bepaalt of de aandacht naar personen, rolcontainers, docks, documenten of afsluiting moet gaan."
    ],
    risks: [
      { title: "Piekmatige personeelsinstroom", text: "Versnelde onboarding kan leiden tot passen zonder duidelijke zone, vervaldatum of verantwoordelijke voor inname na de inzetperiode." },
      { title: "Vermenging van retour en voorraad", text: "Goederen met verschillende status kunnen in dezelfde ruimte belanden, waardoor een afwijking moeilijk herkenbaar en herleidbaar wordt." },
      { title: "Druk rond cut-off", text: "Wanneer iedere minuut telt, bestaat het risico dat deuren, stagingzones of overdrachtsregistraties buiten de normale discipline raken." },
      { title: "Kleine goederen, veel bewegingen", text: "Een algemene uitgangscontrole is zonder doel, grondslag en procesinpassing niet vanzelf effectief. Maatregelen moeten proportioneel en uitvoerbaar zijn." }
    ],
    approach: [
      { title: "Piek- en basisproces scheiden", text: "We beschrijven welke toegang, supervisie en sluitcontrole tijdens normale bezetting en tijdens vooraf bekende piekperioden nodig zijn." },
      { title: "Tijdelijke autorisatie", text: "Passen en zones krijgen een aanvrager, start, eindmoment en innameproces. Verlenging is een bewuste wijziging, geen stilzwijgende standaard." },
      { title: "Retour- en expeditiezones", text: "We koppelen controlepunten aan de statusovergangen die de fulfilmentorganisatie zelf hanteert, inclusief bevoegde afwijkingsbeslissers." },
      { title: "Cut-offoverdracht", text: "Na de laatste verzendgolf worden openstaande docks, achtergebleven zendingen, middelen en bijzonderheden aan de volgende verantwoordelijke overgedragen." }
    ],
    faq: [
      { question: "Is fulfilmentbeveiliging hetzelfde als warehouse beveiliging?", answer: "Er is overlap, maar fulfilment legt meer nadruk op hoge orderfrequentie, retouren, tijdelijke bezetting en verzend-cut-offs. Warehouse beveiliging kan breder gericht zijn op langdurige opslag, docks en interne voorraadzones." },
      { question: "Kan beveiliging tijdens seizoenspieken worden aangepast?", answer: "Een tijdelijke aanpassing kan worden besproken wanneer periode, extra stromen, taken en faciliteiten vooraf bekend zijn. Beschikbaarheid en bezetting worden niet gegarandeerd voordat planning en locatie zijn beoordeeld." },
      { question: "Voert een beveiliger uitgangscontroles bij medewerkers uit?", answer: "Alleen wanneer doel, beleid, proportionaliteit, werkwijze en bevoegdheden door de verantwoordelijke organisatie correct zijn vastgesteld. We vertalen de goedgekeurde procedure naar een respectvolle, consistente instructie en geven geen vervangend juridisch advies." }
    ],
    related: ["logistieke-beveiliging-limburg", "beveiliging-distributiecentrum-venlo", "warehouse-beveiliging", "toegangscontrole-logistiek-centrum"]
  }
];

export const blogPages = [
  {
    slug: "blog",
    title: "Kennisbank logistieke beveiliging",
    updated: "2026-07-10",
    description: "Praktische artikelen over logistieke beveiliging, toegangscontrole, overdracht en continuïteit."
  },
  {
    slug: "blog/logistieke-beveiliging-zonder-ruis-overdracht-planning",
    title: "Logistieke beveiliging zonder ruis: overdracht en planning",
    updated: "2026-06-25",
    description: "Praktische uitleg over overdracht, planning en duidelijke instructies."
  },
  {
    slug: "blog/fake-carriers-logistieke-beveiliging-toegangscontrole",
    title: "Fake carriers: controleer toegang en afspraken",
    updated: "2026-07-02",
    description: "Duiding van fake-carrierrisico's, toegangscontrole en escalatie."
  },
  {
    slug: "blog/weerbare-logistieke-beveiliging-2026-toegangscontrole-continuiteit",
    title: "Weerbare logistieke beveiliging in 2026",
    updated: "2026-07-09",
    description: "Praktische checks voor toegang, overdracht en continuïteit."
  },
  {
    slug: "blog/inzetgereed-voor-de-dienst-logistieke-beveiliging",
    title: "Inzetgereed vóór de dienst",
    updated: "2026-07-10",
    description: "Operationele checks voor inzetgegevens, instructies en overdracht."
  }
];

export const pages = [...regions, ...services];
