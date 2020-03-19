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

