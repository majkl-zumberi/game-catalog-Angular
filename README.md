# GameCatalogAngular

Realizzazione semplice portale di videogiochi.


## Requisiti:

L’applicazione presenterà una struttura di base composta da un menu e un contenitore principale delle pagine.

## Sono richieste 4 sezioni:

- Home, che rappresenterà la pagina iniziale del sito (accessibile anche da menu) e dovrà contenere un logo o un titolo di presentazione del portale.
- Lista videogiochi, accessibile da menu questa sezione deve visualizzare una lista di videogiochi, con alcune informazioni e possibili immagini di anteprima e la possibilità di accedere per ognuno di essi alla propria sezione di dettaglio.
- Dettaglio videogioco, accessibile solamente dal click nella lista, visualizzerà il dettaglio per intero del gioco selezionato. Al suo interno deve essere presente un pulsante per il ritorno alla lista e di visualizzazione della sezione modifica per il gioco corrente
- Modifica lista, accessibile da menu mostrerà un campo di ricerca e relativo bottone per ricercare un gioco dalla lista e visualizzarlo in un semplice form che permetterà di modificarne il dettaglio.

A livello architetturale sono previste e richiesti i seguenti elementi (che rappresentano gli elementi essenziali, ciò non esclude la possibilità di crearne degli altri per utilità):

1. Component
   - AppComponent, primo component dell’app che dovrà contenere e gestire la struttura base del layout (per cui conterrà all’interno del suo template, tutti gli altri component)
   - MenuComponent, rappresenterà il menu e di occupa di gestirne le funzionalità di navigazione ed evidenziando la sezione corrente. La visualizzazione può essere fatta sia in alto che lateralmente nella pagina.
   - HomeComponent, si occuperà di visualizzare la home del portale
   - GamesListComponent, si occuperà di visualizzare la lista e gestirne le interazioni
   - GameDetailComponent, che si occuperà di visualizzare il dettaglio e delle visualizzazioni delle pagine di lista e modifica, con appositi pulsanti 
   - EditGameComponent, che visualizzerà la pagina per la ricerca e modifica di un gioco. Dovrà essere gestita la possibilità che il gioco da modificare, venga indicato tramite la pagina di dettaglio.

2. Servizi
   - GameListService, che si dovrà occupare solamente di gestire la lista:
     - Inizializzazione
     - Get della lista totale
     - Get elemento specifico, tramite id
     - Modifica elemento nella lista
   - MenuService, che permetterà la comunicazione tra il component Menu e quelli di sezione, per la loro visualizzazione.
   - DetailToEditService, servirà a gestire il passaggio dalla schermata di dettaglio a quella di modifica.

3. Oggetti 
   - GameItem, interface che rappresenta l’oggetto videogioco, con i seguenti attributi di base:
     - id
     - Nome
     - Descrizione
     - Genere
     - Rating
     - Prezzo
     - Anno Nascita
     - ecc.
   -  MenuItem, interface che rappresenta gli oggetti che compongono la lista delle voci di menu, con i seguenti attributi:
      - id 
      - Descrizione
      - Selezionato (boolean)

## Introduzione del routing all’interno del portale creato nella prima esercitazione
1. Requisiti
   - Gestire la navigazione tra i componenti del portale, tramite il routing
   - Creare una paginadilogin del portale (metodo di autenticazione gestito da codice lato client)
   - Gestire l’autenticazione dell’utente registrato usando il sessionStorage
   - Non permettere di navigare in nessuna pagina del portale (eccetto la pagina di login) senza autenticazione. (Tramite l’utilizzo delle Route Guard)
   - Inserire nel menu un pulsante per effettuare il logout, che rimanda alla login e annulla l’autenticazione.
   - Non permettere l’accesso alla pagina di login se si è effettuato il login.
   - BONUS: (richiede l’aver creato la sezione modifica nella prima esercitazione) non navigare al di fuori della pagina di modifica, nel caso ci sia almeno un campo cambiato ma non salvato.
   

## GESTIONE ADMIN

  - Gestire l’accesso tramite login, con almeno due utenti differenti, in cui uno sarà l’admin e l’altro l’utente normale.
  - Una volta effettuato la login, salvare il fatto di aver fatto accesso come admin o meno.
  - Header: mostrare in alto a sinistra, il nome dell’utente che ha effettuato il login
  - Navigazione: nel menu di navigazione, visualizzare la voce di modifica solamente all’admin
  - Pagina dettaglio: non mostrare il pulsante “modifica”, se non si è admin
  - Pagina modifica: non permettere l’accesso a tale pagina se non si è admin. Usare lo stesso route guard già esistente

## Gestione dell’attributo genere di un videogioco

  - Creare un file ts, con una variabile lista di oggetti con due parametri (id e description) che servono a definire i possibili generi di videogioco (definendone almeno 5)  Es. [{id: 1, description: “Action RPG”}]
  - Se non lo si è fatto, definire l’attributo genere nella classe GameItem, creata nelle vecchie esercitazioni dello stesso tipo dell’id dichiarata nella lista creata precedentemente
  - Fare in modo di avere almeno 20 videogiochi nella propria lista, definendone il genere solamente tramite l’id e non la descrizione. (associare tutti i generi)
  - Pagina lista: creare una select, che contiene tra le option tutti i generi definiti. Tale select dovrà mostrare le descrizioni dei generi, ma dare riferimento dell’id per l’opzione selezionata. Inoltre, aggiungere l’option di default {id: null, description: “Tutti”}
  - Pagina lista: tramite l’id del genere selezionato filtrare la lista mostrando solamente i giochi appartenenti a quel genere, in entrambi questi modi:
    - Tramite utilizzo del ng-container
    - Filtrando la lista nel component
  - Nota: Attuare entrambi i metodi in sequenza e versionare il codice al completamento di ciascuno (così da avere una prova di entrambi gli sviluppi). Dopo di che, scegliere in base alla propria preferenza, quale metodo lasciare

## Pipes

  - Se non sono già presenti, dichiarare gli attributi amount (tipo number) e releaseDate (tipo Date) per la classe GameItem
  - Usare rispettivamente le pipes core di angular CurrencyPipe e DatePipe, per visualizzare in maniera corretta tali informazioni all’interno del portale
  - Creare una pipe custom che ricevuto in ingresso un id di un genere ne mostra il dettaglio. Usare tale direttiva all’interno del portale

## Attribute Directive

  - Creare una direttiva custom, da applicare nella lista dei videogiochi, per far sì che quando viene scatenato l’evento di mouseenter su ognuno di essi, lo stile cambia (lasciata libertà di scelta, in base allo stile scelto nel proprio portale…l’importante è modificare almeno un attributo visibile)
  - Modificare tale direttiva, in modo da avere un effetto diverso se si è admin o meno
  - BONUS 1: trovare, se c’è, un modo per dare un effetto diverso in base al genere del gioco selezionato, sempre tramite la direttiva.
  - BONUS 2: provare ad avere lo stesso effetto tramite un assegnamento dinamico delle classi css sulla lista.
  - BONUS 3: discutere le differenze tra i due approcci dei primi due punti bonus

  
   
